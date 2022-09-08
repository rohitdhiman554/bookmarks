import styled, { css } from "styled-components";

export const LogInButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 10px;
  position: absolute;

  ${(props) =>
    props.id === "loginBtn" &&
    css`
      width: 100%;
      height: 50px;
      left: 0;
      top: 390.54px;
      background: #5352ed;
      border: none;
      color: white;
    `}

  ${(props) =>
    props.id === "googleBtn" &&
    css`
      box-sizing: border-box;
      width: 100%;
      height: 50px;
      left: 0;
      top: 485px;
      border: 2px solid #f1f1fa;

      background: white;
    `}
  border-radius: 16px;
  font-size: 20px;
`;
