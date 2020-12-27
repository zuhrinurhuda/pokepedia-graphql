/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Chip } from "views/components";
import { typeColors } from "utils";

const Description = ({ pokemon }) => (
  <div
    css={css`
      width: 50%;
      padding: 10px;
    `}
  >
    <p>
      <b>Height:</b>
      {` ${pokemon.height}`}
    </p>
    <p>
      <b>Weight:</b>
      {` ${pokemon.weight}`}
    </p>
    <p>
      <b>Moves:</b>
    </p>
    <ul
      css={css`
        list-style-type: khmer;
        margin-block-start: 0px;
        margin-block-end: 0px;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 25px;
      `}
    >
      {pokemon.moves.map((moves, index) => {
        if (index < 3) {
          return <li key={moves.move.name}>{moves.move.name}</li>;
        }
        return null;
      })}
    </ul>
    <p>
      <b>Types:</b>
    </p>
    {pokemon.types.map((types) => (
      <Chip key={types.type.name} color={typeColors[types.type.name]}>
        {types.type.name}
      </Chip>
    ))}
  </div>
);

export default Description;
