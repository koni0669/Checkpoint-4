const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

router.use("/users", require("./users/router"));
router.use("/pokemons", require("./pokemons/router"));

/* ************************************************************************* */

module.exports = router;
