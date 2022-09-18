import styled, { css } from "styled-components";

export const StyledImage = styled.img`
  ${(props) =>
    props.id === "saly-10" &&
    css`
      position: absolute;
      width: 130%;
      height: 100%;
      left: 50px;
    `}
`;
