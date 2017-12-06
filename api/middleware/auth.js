const passport = require("passport");
const JWT = require("jsonwebtoken");
const User = require("../models/User.js");
const PassportJwt = require("passport-jwt");

const jwtSecret = "n3xAXrwmMMCC4/Yfr2IMQhYBNN4nyac=";
const jwtAlgorithm = "HS256";
const jwtExpiresIn = "7 days";

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

passport.use(
  new PassportJwt.Strategy(
    {
      jwtFromRequest: PassportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret,
      algorithms: [jwtAlgorithm]
    },
    (payload, done) => {
      // find user by jwt from database
      User.findById(payload.sub)
        .then(user => {
          if (user) {
            done(null, user);
          } else {
            done(null, false);
          }
        })
        .catch(error => {
          done(error, false);
        });
    }
  )
);

function signJWTForUser(req, res) {
  // Get the user (sign in or up)
  const user = req.user;
  // Create a signed token
  const token = JWT.sign(
    {
      email: user.email
    },
    // secret
    jwtSecret,
    {
      algorithm: jwtAlgorithm,
      expiresIn: jwtExpiresIn,
      subject: user._id.toString()
    }
  );

  res.json({
    token
  });
}

module.exports = {
  initialize: passport.initialize(),
  register,
  signIn: passport.authenticate("local", { session: false }),
  requireJWT: passport.authenticate("jwt", { session: false }),
  signJWTForUser
};
