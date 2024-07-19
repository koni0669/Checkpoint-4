const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
const { browse, read, add } = require("../../../controllers/pokemonActions");

// Route to get a list of Pokémons
router.get("/", browse);

// Route to get a specific Pokémon by ID
router.get("/:id", read);

// Route to add a new Pokémon
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
