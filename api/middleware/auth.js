const passport = require("passport");
const User = require("../models/User.js");

passport.use(User.createStrategy());

function register(req, res, next) {
  // Create a User Model
  const user = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });

  // Create the user with the specified password
  User.register(user, req.body.password, (error, user) => {
    if (error) {
      // register middleware failed
      next(error);
      return;
    }
    // store user to access in handler
    req.user = user;
    // Success
    next();
  });
}

module.exports = {
  // initialize: passport.initialize(),
  register,
  signIn: passport.authenticate("local", { session: false })
};
