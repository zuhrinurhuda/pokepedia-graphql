/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Container = (props) => (
  <div
    css={css`
      max-width: 500px;
      margin: 0px auto;
    `}
    {...props}
  />
);

export default Container;
