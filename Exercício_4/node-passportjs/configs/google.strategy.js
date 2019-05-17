const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

//var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: '230264567202-f7hn2c928sabagdvlb3f9mlei6f6hmvg.apps.googleusercontent.com',
    clientSecret: 'sEgIyRMH4pX1ZwO5jZMTya1K',
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  } 
));

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});