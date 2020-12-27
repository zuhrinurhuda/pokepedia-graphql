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

export const H4 = (props) => (
  <h4
    css={css`
      text-transform: uppercase;
      color: rgba(49, 53, 59, 0.96);
    `}
    {...props}
  />
);
