import styled, { css } from "styled-components";

export const StyledImage = styled.img`
  ${(props) =>
    props.id === "headingImage" &&
    css`
      width: 110%;

      margin-top: 3%;
      margin-left: 20%;

      z-index: 1;
    `}
  ${(props) =>
    props.id === "bookmarkIcon" &&
    css`
      margin-left: 10%;
      margin-top: 10%;
    `}
`;
