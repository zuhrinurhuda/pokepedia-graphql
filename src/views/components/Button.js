/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Button = (props) => (
  <button
    css={css`
      ${!props.disabled && "color: rgb(3, 172, 14)"};
      height: 32px;
      border-radius: 8px;
      outline: none;
      padding: 0px 16px;
      ${!props.disabled &&
      "background: radial-gradient(circle, transparent 1%, rgb(255, 255, 255) 1%) center center / 15000% rgb(255, 255, 255);"}
      ${!props.disabled && "border: 1px solid rgb(3, 172, 14);"}
      cursor: ${props.disabled ? "not-allowed" : "pointer"};
    `}
    {...props}
  />
);

export default Button;
