const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', passport.authenticate('linkedin'));

router.get('/auth/linkedin/callback', 
    passport.authenticate('linkedin', { failureRedirect: '/login' }),
function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

module.exports = router;