const passport = require("passport"),
  googleStrategy = require("passport-google-oauth20").Strategy,
  mongoose = require("mongoose");

const keys = require("../config/keys");

const User = mongoose.model("quick-S_users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/home",
      proxy: true,
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleID: profile.id }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({
            googleID: profile.id,
            name: profile._json.name,
            emails: profile.emails,
            photos: profile.photos,
            gender: profile.gender,
            provider: profile.provider,
          })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
