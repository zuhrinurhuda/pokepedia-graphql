/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Button } from "views/components";

const Pagination = (props) => (
  <div
    css={css`
      display: flex;
      justify-content: space-between;
    `}
  >
    <Button onClick={props.onBackward} disabled={props.disabledPrev}>
      Prev
    </Button>
    <Button onClick={props.onForward} disabled={props.disabledNext}>
      Next
    </Button>
  </div>
);

export default Pagination;
