/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Input = (props) => (
  <input
    css={css`
      height: 32px;
      border-radius: 8px;
      outline: none;
      padding: 0px 16px;
      border: 1px solid rgb(3, 172, 14);
      width: calc(100% - 69px);
      margin-right: 4px;
      margin-top: 8px;
    `}
    {...props}
  />
);

export default Input;
