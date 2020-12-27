import { PokemonList, PokemonDetail, MyPokemonList } from "views/pages";

const routes = [
  {
    path: "/",
    component: PokemonList,
    exact: true,
  },
  {
    path: "/detail/:name",
    component: PokemonDetail,
    exact: true,
  },
  {
    path: "/my-pokemon",
    component: MyPokemonList,
    exact: true,
  },
];

export default routes;
