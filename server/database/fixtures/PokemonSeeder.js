const axios = require("axios");
const AbstractSeeder = require("./AbstractSeeder");

class PokemonSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "pokemon", truncate: true });
  }

  // The run method - Populate the 'pokemon' table with real data from the pokeapi

  async run() {
    const response = await axios.get("https://pokebuildapi.fr/api/v1/pokemon");
    const pokemons = response.data.results;
    const promises =
      pokemons?.map(async (pokemon) => {
        const pokemonResponse = await axios.get(pokemon.url);
        return {
          name: pokemonResponse.data.name,
          image: pokemonResponse.data.sprites.front_default,
        };
      }) || [];
    const pokemonDetails = await Promise.all(promises);
    pokemonDetails.forEach((pokemon) => {
      this.insert(pokemon);
    });
  }
}

// Export the PokemonSeeder class
module.exports = PokemonSeeder;
