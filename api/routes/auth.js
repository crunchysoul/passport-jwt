const express = require("express");
const authMiddleware = require("../middleware/auth.js");

const router = new express.Router();

// Register
// middleware stream out to registration
// then normal req, res
router.post(
  // path
  "/auth/register",
  // middleware
  authMiddleware.register,
  // can have extra middleware,
  authMiddleware.signJWTForUser
);

// Register
// middleware stream out to registration
// then normal req, res
router.post(
  // path
  "/auth",
  // middleware
  authMiddleware.signIn,
  // can have extra middleware,
  authMiddleware.signJWTForUser
);

module.exports = router;
