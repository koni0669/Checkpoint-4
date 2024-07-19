const { pokemon } = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const pokemons = await pokemon.readAll();
    res.json(pokemons);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pokemonFound = await pokemon.read(id);
    if (!pokemonFound) {
      return res.status(404).json({ error: "Pokemon not found" });
    }
   return res.json(pokemonFound);
  } catch (error) {
   return next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const { name, type } = req.body;
    const newPokemon = await pokemon.create({ name, type });
    res.status(201).json(newPokemon);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  browse,
  read,
  add,
};
