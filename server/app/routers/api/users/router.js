const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import user-related actions
const { browse, read, add, drop } = require("../../../controllers/userActions");
const { hashPassword } = require("../../../services/auth");
const { verifyCookie } = require("../../../services/auth");

const { signout, signin } = require("../../../controllers/authActions");

// Route to get a list of users
router.get("/", browse);

router.post("/signout", signout);

// Route to get a specific user by ID
router.get("/:id", read);

router.post("/login", signin);

// Route to add a new user
router.post("/add", hashPassword, add);

// Route to delete a user
router.delete("/:id", verifyCookie, drop);

/* ************************************************************************* */

module.exports = router;
