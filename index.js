const express = require('express'),
      authRoutes = require('./routes/authRoutes')
      require('./services/passport');

const app = express();
authRoutes(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("Server Started at PORT 5000")
});