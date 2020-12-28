import React from "react";

const routes = [
  {
    path: "/",
    component: React.lazy(() => import("views/pages/PokemonList")),
    exact: true,
  },
  {
    path: "/detail/:name",
    component: React.lazy(() => import("views/pages/PokemonDetail")),
    exact: true,
  },
  {
    path: "/my-pokemon",
    component: React.lazy(() => import("views/pages/MyPokemonList")),
    exact: true,
  },
];

export default routes;
