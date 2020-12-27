import { gql } from "@apollo/client";

export const GET_POKEMON_LIST = gql`
  query GetPokemonList($limit: Int!, $offset: Int!) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      results {
        name
        url
      }
      owned @client
    }
  }
`;

export const GET_POKEMON_DETAIL = gql`
  query GetPokemonDetail($name: String!) {
    pokemon(name: $name) {
      id
      name
      height
      weight
      types {
        slot
        type {
          name
        }
      }
      moves {
        move {
          name
        }
      }
    }
  }
`;
