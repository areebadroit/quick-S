const passport = require('passport'),
      googleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('../config/keys');
    
passport.use(new googleStrategy({
    clientID:keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL: '/home'
    },
    (accessToken, refreshToken, profile, done)=>{
        console.log('access token', accessToken);
        console.log('refresh token', refreshToken);
        console.log('profile', profile);
    }
));
