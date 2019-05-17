const passport = require('passport');
const LinkedInStrategy = require('passport-github').Strategy;

passport.use(new LinkedInStrategy({
    clientID:  '780fhk4o1zlp1m',
    clientSecret: 'SBaFlHC1rAFZnaM3',
    callbackURL: "http://localhost:3000/auth/linkedin/callback"
  },
  function(token, tokenSecret, profile, done) {
    User.findOrCreate({ linkedinId: profile }, function (err, user) {
      return done(err, user);
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});