import { InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    PokemonList: {
      fields: {
        owned() {
          /**
           * I plan to manipulate the PokemonItem object by adding an owned property
           * but I get stuck, next time i will try again
           */
          // const myPokemonList = JSON.parse(
          //   localStorage.getItem("myPokemonList")
          // );
          // const owned = myPokemonList.nickname.length;
          return "owned";
        },
      },
    },
  },
});
