import styled, { css } from "styled-components";

export const LogInButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: absolute;

  ${(props) =>
    props.id === "signupBtn" &&
    css`
      width: 100%;
      height: 8%;
      top: 70%;

      background: #5352ed;
      border: none;
      color: white;
      @media (max-width: 1045px) {
        top: 75%;
      }

      @media (max-width: 752px) {
        top: 74%;
      }

      @media (max-width: 700px) {
        top: 75%;
      }
    `}

  ${(props) =>
    props.id === "loginBtn" &&
    css`
      width: 100%;
      height: 8%;
      top: 58%;

      background: #5352ed;
      border: none;
      color: white;
    `}
  ${(props) =>
    props.id === "googleBtn" &&
    css`
      width: 100%;
      height: 8%;
      top: 86%;
      border: 2px solid #f1f1fa;
      background: white;
      @media (max-width: 1045px) {
        top: 90%;
      }
      @media (max-width: 752px) {
        top: 90%;
      }
      @media (max-width: 700px) {
        top: 92%;
      }
    `}

  border-radius: 16px;
  font-size: 1em;
`;
