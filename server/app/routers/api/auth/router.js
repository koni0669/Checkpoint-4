const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import auth-related actions
const {
  login,
  signUp,
  refreshToken,
  verifyToken,
} = require("../../../controllers/authActions");

// Route to authenticate a user
router.post("/login", login);

// Route to sign up a new user
router.post("/signup", signUp);

// Route to refresh the user's access token
router.post("/refresh", refreshToken);

// Route to verify the user's access token
router.get("/verify", verifyToken);

/* ************************************************************************* */

module.exports = router;
