import styled, { css } from "styled-components";

export const StyledImage = styled.img`
  ${(props) =>
    props.id === "headingImage" &&
    css`
      position: absolute;
      width: 40%;
      top: 10%;
      left: 1%;
      z-index: 1;

      @media (max-width: 1245px) {
        top: 20%;
        left: 1%;
      }

      @media (max-width: 1140px) {
        top: 25%;
        left: 1%;
      }
    `}
  ${(props) =>
    props.id === "bookmarkIcon" &&
    css`
      margin-left: 10%;
      margin-top: 10%;
    `}
`;
