import { useEffect, useState } from "react";
import { useRouteLoaderData, Link } from "react-router-dom";
import "../services/Pokeclicker.css";

function PokemonClicker() {
  const pokemonsData = useRouteLoaderData("Pokeclicker");
  const [pokemons, setPokemons] = useState([]);
  const [currentPokemonId, setCurrentPokemonId] = useState(0);
  const [score, setscore] = useState(0);
  const [stats, setStats] = useState({
    hp: "",
    attack: "",
    defense: "",
    speed: "",
  });

  useEffect(() => {
    if (pokemons[currentPokemonId]) {
      setStats({
        hp: pokemons[currentPokemonId].stats.HP,
        attack: pokemons[currentPokemonId].stats.attack,
        defense: pokemons[currentPokemonId].stats.defense,
        speed: pokemons[currentPokemonId].stats.speed,
      });
    }
  }, [currentPokemonId, pokemons]);

  useEffect(() => {
    if (pokemonsData) {
      setPokemons(pokemonsData);
    }
  }, [pokemonsData]);

  const handleClick = () => {
    const newscore = (score % 20) + 1;
    let newPokemonId = currentPokemonId;

    if (newscore % 20 === 0) {
      newPokemonId = Math.floor(Math.random() * pokemons.length);
    }

    setscore(newscore);
    setCurrentPokemonId(newPokemonId);
  };

  return (
    <div>
      <Link to="/profile">Go to Profile</Link>
      <div className="pokemoncardpokeclicker">
        <p className="pokemon-name">{pokemons[currentPokemonId]?.name}</p>
        <button
          type="button"
          aria-label="Pokemon"
          onClick={handleClick}
          style={{ border: "none", background: "none" }}
        >
          <img
            src={pokemons[currentPokemonId]?.image}
            alt=""
            style={{ width: "75%", height: "75%", cursor: "pointer" }}
          />
        </button>
        <p className="score">Score {score}</p>
        <div className="stats">
          <p className="HP">HP: {stats.hp}</p>
          <p className="attack">Attack: {stats.attack}</p>
          <p className="defense">Defense: {stats.defense}</p>
          <p className="speed">Speed: {stats.speed}</p>
        </div>
      </div>
    </div>
  );
}

export default PokemonClicker;
