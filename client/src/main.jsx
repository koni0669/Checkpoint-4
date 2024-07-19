import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import PokemonClicker from "./pages/PokeClicker";

function getPokemon() {
  return axios
    .get("https://pokebuildapi.fr/api/v1/pokemon")
    .then((response) => response.data);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/profile",
    element: <Profile />,
    id: "Profile",
    loader: () => getPokemon(),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/pokeclicker",
    element: <PokemonClicker />,
    id: "Pokeclicker",
    loader: () => getPokemon(),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
