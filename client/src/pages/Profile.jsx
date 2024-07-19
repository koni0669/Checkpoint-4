import { useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";

import "../services/Profile.css";

function Profile() {
  const pokemonsData = useRouteLoaderData("Profile");
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    if (pokemonsData) {
      setPokemons(pokemonsData);
    }
  }, [pokemonsData]);

  if (pokemons.length === 0) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <ul className="pokemonsul">
          {pokemons.map((pokemon) => (
            <li className="pokemons" key={pokemon.id}>
              <h2>{pokemon.name}</h2>
              <p>Score : {pokemon.score}</p>
              <p>
                Type: {pokemon.apiTypes.map((type) => type.name).join(", ")}
              </p>
              <img
                width="200"
                height="200"
                src={pokemon.image}
                alt={pokemon.name}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
