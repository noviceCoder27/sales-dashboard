const router = require('express').Router()
const passport = require('passport');


router.get('/google', passport.authenticate('google', { scope: ['profile']}));

router.get('/google/callback', passport.authenticate('google'),
    function(req, res) {
        res.cookie('accessToken', req.user.accessToken);
        res.redirect(`${process.env.CLIENT_URL}/dashboard`)
    }
);

router.get('/twitter', passport.authenticate('twitter'));

router.get('/twitter/callback', passport.authenticate('twitter'),
    function(req, res) {
        res.cookie('accessToken', req.user.accessToken);
        res.redirect(`${process.env.CLIENT_URL}/dashboard`)
    }
);

module.exports = router