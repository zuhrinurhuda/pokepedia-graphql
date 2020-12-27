/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Chip = (props) => (
  <div
    css={css`
      display: inline-block;
      background-color: ${props.color || "rgb(214, 255, 222)"};
      border-radius: 3px;
      font-weight: bold;
      font-size: 0.71rem;
      line-height: 1.4;
      letter-spacing: normal;
      margin-right: 4px;
      height: 20px;
      padding: 3px 12px 2px;
      text-transform: uppercase;
    `}
    {...props}
  />
);

export default Chip;
