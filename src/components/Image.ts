import styled, { css } from "styled-components";

export const StyledImage = styled.img`
  ${(props) =>
    props.id === "bookmarkIcon" &&
    css`
      margin-left: 10%;
      margin-top: 10%;
    `}
`;
