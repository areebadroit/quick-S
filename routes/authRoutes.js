const passport = require('passport');

module.exports = (app) =>{
app.get(
    '/auth/google',
    passport.authenticate('google',{
        scope: ['profile','email']
    })
);

app.get('/home', passport.authenticate('google'),(req,res)=>{
    res.send({hi:'welcome'})
});
}