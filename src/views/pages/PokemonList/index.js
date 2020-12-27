/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { List, ListItem, H1, H4, Button, Pagination } from "views/components";
import { GET_POKEMON_LIST } from "state/operations/queries/pokemon";
import { getAvatarImage, getPokemonId } from "utils";

const PokemonList = () => {
  // Object contains pagination params
  const [pagination, setPagination] = React.useState({ limit: 9, offset: 1 });

  // Fetch pokemon list
  const { loading, error, data } = useQuery(GET_POKEMON_LIST, {
    variables: { ...pagination },
  });

  // Get my pokemon from localStorage
  const myPokemonList = JSON.parse(localStorage.getItem("myPokemonList"));

  // Add the total of pokemon owned to the PokemonItem object
  const newPokemonList =
    data &&
    data.pokemons.results.map((pokemon) => {
      if (myPokemonList) {
        for (let i = 0; i < myPokemonList.length; i += 1) {
          if (pokemon.name === myPokemonList[i].name) {
            return {
              ...pokemon,
              owned: myPokemonList[i].nickname.length,
            };
          }
        }
      }
      return pokemon;
    });

  /**
   * Handle page changes
   * @param {string} type Button type
   */
  const handleOnPageChange = (type) => () => {
    setPagination({
      ...pagination,
      offset: type === "prev" ? pagination.offset - 10 : pagination.offset + 10,
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <H1>Pokemon List</H1>
      <List>
        {newPokemonList &&
          newPokemonList.map((pokemon) => (
            <ListItem key={pokemon.name}>
              <img
                src={getAvatarImage(getPokemonId(pokemon.url))}
                alt={pokemon.name}
              />
              <div
                css={css`
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding: 0 15px;
                `}
              >
                <div>
                  <H4>{pokemon.name}</H4>
                  <p>{`Owned: ${pokemon.owned || 0}`}</p>
                </div>
                <div>
                  <Link key={pokemon.name} to={`/detail/${pokemon.name}`}>
                    <Button>Detail</Button>
                  </Link>
                </div>
              </div>
            </ListItem>
          ))}
        <Pagination
          onBackward={handleOnPageChange("prev")}
          onForward={handleOnPageChange("next")}
          disabledPrev={!data.pokemons.previous}
          disabledNext={!data.pokemons.next}
        />
      </List>
    </>
  );
};

export default PokemonList;
