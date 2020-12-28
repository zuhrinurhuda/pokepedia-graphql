/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const H1 = (props) => (
  <h1
    css={css`
      text-align: center;
      color: rgb(3, 172, 14);
    `}
    {...props}
  />
);

export const H2 = (props) => (
  <h2
    css={css`
      font-size: 1.17em;
      text-transform: uppercase;
      color: rgba(49, 53, 59, 0.96);
    `}
    {...props}
  />
);
