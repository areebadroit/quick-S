# quick-S
Using passport js to allow users to sign-up in my app using google authentication.
This feature can be integrated with any node js application, who want to authenticate users via google in their app.
Deployed code: https://quick-sur.herokuapp.com/

This app will not work if you directly clone it and try to run it in your local system.
This will happen because of the missing keys which are required and provided by google and mongodb.
How to resolve that?
Create google developer account.
step 1: go to https://console.cloud.google.com/
step 2: create a new project
step 3: give it a name and follow the require steps, configure your OAuth consent screen.
step 4: go to credentials and OAuth 2.0 client, open your client record. you will get your **client id** and **client secret**, which is required in the project.
create mongodb account:
get your mongodb **connection uri**
You are ready with all your required keys.
Finally go to config folder in the project: create a file named as "devkeys.js":
copy the below code:
module.exports = {
  googleClientID:
    "<Your google client id>",
  googleClientSecret: "<you google client secret>",
  mongoURI:
    "<your mongodb uri>",
  cookieKey: "fgiegbnlglfgnorfijlwkmdshhhhhhheopwrfkkkkkkkkksvmx",
};
  cookie is any random string.
  The application is now ready to run on local system. make sure node is installed in your local system.
  If it does not run, install npm and then use the command
  node index.js
  
  For heroku deployment and integration with other apps.
  go to https://dashboard.heroku.com/
  select your app.
  go to settings: you will find a section of config vars which basically has key value pairs for environment variables.
  Create environment variables in the following order.
  COOKIE_KEY
  GOOGLE_CLIENT_ID
  GOOGLE_CLIENT_SECRET
  MONGO_URI
  In the value column enter their required values which you already know.
  Now deploy the code in heroku and it is ready.
  For deploting your code in heroku follow https://devcenter.heroku.com/categories/deployment
