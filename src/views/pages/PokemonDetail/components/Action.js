/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

import { Input, Button } from "views/components";
import { getAvatarImage } from "utils";
import pokeball from "assets/image/pokeball.svg";

const wiggle = keyframes`
  0% {
    transform: rotate(0);
  }
  10% {
    transform: rotate(-15deg);
  }
  20% {
    transform: rotate(15deg);
  }
  30% {
    transform: rotate(-15deg);
  }
  50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(0);
  }
`;

const Description = ({
  pokemon,
  isCatching,
  isCaught,
  isAlreadyUsed,
  catchPokemon,
  handleOnNicknameChange,
  saveNickname,
}) => (
  <div
    css={css`
      width: 50%;
      padding: 10px;
    `}
  >
    {isCatching && (
      <img
        width={96}
        src={pokeball}
        alt="pokeball"
        css={css`
          animation: ${wiggle} 1s ease infinite;
          display: block;
          margin: auto;
          padding-bottom: 10px;
        `}
      />
    )}
    {isCaught && (
      <>
        <p>
          <b>Gotcha!</b>
        </p>
        <p>{`${pokemon.name} has been caught`}</p>
        <p>{`Give your ${pokemon.name} a nickname`}</p>
        <Input
          type="text"
          placeholder="nickname"
          onChange={handleOnNicknameChange}
        />
        <Button onClick={saveNickname}>Save</Button>
        {isAlreadyUsed && (
          <p
            css={css`
              color: red;
            `}
          >
            Oops, the nickname is already in use
          </p>
        )}
      </>
    )}
    {!isCatching && !isCaught && (
      <>
        <img
          src={getAvatarImage(pokemon.id)}
          alt={pokemon.name}
          css={css`
            display: block;
            margin: auto;
            padding-bottom: 10px;
          `}
        />
        <Button
          disabled={isCatching}
          onClick={catchPokemon}
          css={css`
            display: block;
            margin: auto;
          `}
        >
          Catch
        </Button>
      </>
    )}
  </div>
);

export default Description;
