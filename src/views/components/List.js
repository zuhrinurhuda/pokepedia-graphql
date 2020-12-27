/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const List = (props) => (
  <div
    css={css`
      padding: 8px 12px;
    `}
    {...props}
  />
);

export const ListItem = (props) => (
  <div
    css={css`
      padding-bottom: 8px;
      margin: 0px 4px;
    `}
  >
    <div
      css={css`
        display: flex;
        border-radius: 9px;
        box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
        margin: 0px;
      `}
      {...props}
    />
  </div>
);
