const User = require('./../models/user');
const GoogleStrategy  = require('passport-google-oauth20').Strategy;
const TwitterStrategy  = require('passport-twitter');
const passport = require('passport');

const configurePassport = () => {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "https://sales-dashboard-orpin.vercel.app/auth/google/callback"
    },
    async function(accessToken, refreshToken, profile, cb) {
        try {
            let user = await User.findOne({ googleId: profile.id });
            if (!user) {
                user = new User({ googleId: profile.id,accessToken });
            } else {
                user.accessToken = accessToken;
            }
            await user.save();
            return cb(null, user);
        } catch (err) {
            return cb(err);
        }
    }));
    passport.use(new TwitterStrategy({
        consumerKey: process.env.TWITTER_CONSUMER_KEY,
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
        callbackURL: "https://sales-dashboard-orpin.vercel.app/auth/twitter/callback"
    },
    async function(token, tokenSecret, profile, cb) {
        try {
            let user = await User.findOne({ twitterId: profile.id });
            if (!user) {
                user = new User({ twitterId: profile.id, accessToken: token });
            } else {
                user.accessToken = token;
            }
            await user.save();
            return cb(null, user);
        } catch (err) {
            return cb(err);
        }
    }));
      
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    
    passport.deserializeUser((id, done) => {
        User.findById(id).then((err, user) => {
            done(err, user);
        });
    });
    
}

module.exports = configurePassport
  