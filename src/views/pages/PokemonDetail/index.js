/** @jsxImportSource @emotion/react */
import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { css } from "@emotion/react";

import { GET_POKEMON_DETAIL } from "state/operations/queries/pokemon";
import { Action, Description } from "./components";
import { getRandomInt } from "utils";

const PokemonDetail = () => {
  // Get name from params
  const { name } = useParams();

  // Fetch pokemon detail
  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name },
  });

  // Flags for conditional rendering
  const [isCatching, setIsCatching] = React.useState(false);
  const [isCaught, setIsCaught] = React.useState(false);
  const [isAlreadyUsed, setIsAlreadyUsed] = React.useState(false);

  // Pokemon nickname
  const [nickname, setNickname] = React.useState("");

  /**
   * Trigger catch pokemon
   * will change the pokemon image with pokeball as animation
   */
  const catchPokemon = () => {
    setIsCatching(true);

    setTimeout(() => {
      // Generate random numbers between 0 and 1
      if (getRandomInt(2)) {
        setIsCaught(true);
      }

      setIsCatching(false);
    }, 4000);
  };

  /**
   * Handle nickname changes
   * @param {string} nickname - Name given
   */
  const handleOnNicknameChange = ({ target: { value } }) => {
    setNickname(value.toLowerCase());
  };

  /**
   * Handle save nickname
   */
  const saveNickname = () => {
    // Disable save if the nickname is empty
    if (!nickname) return;

    // Get my pokemon from localStorage
    const myPokemonList =
      JSON.parse(localStorage.getItem("myPokemonList")) || [];

    // Check if the selected pokemon is in my pokemon list
    const myCurrentPokemon = myPokemonList.find(
      (pokemon) => pokemon.name === data.pokemon.name
    );

    if (myCurrentPokemon) {
      // Check if the nickname is already in use
      if (myCurrentPokemon.nickname.indexOf(nickname.toLowerCase()) !== -1) {
        // if yes, return
        setIsAlreadyUsed(true);
        return;
      } else {
        // if no, push it into the nickname array inside pokemon list
        myCurrentPokemon.nickname.push(nickname);
      }
    } else {
      // Create new pokemon object
      const myNewPokemon = {
        id: data.pokemon.id,
        name: data.pokemon.name,
        nickname: [nickname],
      };

      // Push my new pokemon into pokemon list
      myPokemonList.push(myNewPokemon);
    }

    // Save changes in localStorage
    localStorage.setItem("myPokemonList", JSON.stringify(myPokemonList));

    // Set to default value
    setIsCaught(false);
    setNickname("");
    setIsAlreadyUsed(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <h1
        css={css`
          text-align: center;
        `}
      >{`${data.pokemon.name.toUpperCase()} #${data.pokemon.id}`}</h1>
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <Action
          pokemon={data.pokemon}
          isCatching={isCatching}
          isCaught={isCaught}
          isAlreadyUsed={isAlreadyUsed}
          catchPokemon={catchPokemon}
          handleOnNicknameChange={handleOnNicknameChange}
          saveNickname={saveNickname}
        />
        <Description pokemon={data.pokemon} />
      </div>
    </>
  );
};

export default PokemonDetail;
