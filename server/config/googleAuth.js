
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
},
async function(accessToken, refreshToken, profile, cb) {
try {
    let user = await User.findOne({ googleId: profile.id });
    if (!user) {
        user = new User({ googleId: profile.id, accessToken });
    } else {
        user.accessToken = accessToken;
    }
    await user.save();
    return cb(null, user);
} catch (err) {
    return cb(err);
}}));