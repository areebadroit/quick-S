const passport = require("passport");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.redirect("/auth/google");
  });
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get("/home", passport.authenticate("google"), (req, res) => {
    res.redirect("/api/current_user");
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send("You are logged out");
  });

  app.get("/api/current_user", (req, res) => {
    //res.send(req.user);
    res.render("profile", { usr: req.user });
  });
};
