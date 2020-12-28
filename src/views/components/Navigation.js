/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";

export const Navigation = (props) => (
  <nav
    css={css`
      padding-bottom: 56px;
    `}
  >
    <div
      css={css`
        height: 56px;
        position: fixed;
        bottom: 0px;
        width: 100%;
        background-color: rgb(255, 255, 255);
        box-shadow: rgba(108, 114, 124, 0.16) 0px -2px 4px 0px;
        display: flex;
        max-width: 500px;
      `}
      {...props}
    />
  </nav>
);

export const NavigationItem = ({ to, width, ...props }) => (
  <NavLink
    css={css`
      padding: 8px 0px;
      display: flex;
      align-items: center;
      flex-flow: column nowrap;
      font-size: 10px;
      color: rgba(49, 53, 59, 0.68);
      text-decoration: initial;
      width: ${width};
    `}
    to={to}
  >
    <div
      css={css`
        display: contents;
        &,
        & > img {
          margin-bottom: 4px;
        }
      `}
      {...props}
    />
  </NavLink>
);
