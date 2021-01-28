const express = require('express'),
      mongoose = require('mongoose'),
      cookieSession = require('cookie-session'),
      passport = require('passport'),
      authRoutes = require('./routes/authRoutes'),
      keys = require('./config/keys');

require('./models/user');
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys:[keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);



const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("Server Started at PORT 5000")
});