import Menu from "@mui/material/Menu";
import { FaEllipsisV } from "react-icons/fa";
import styled, { css } from "styled-components";

export const CustomButton = styled.button`
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
      top: 72%;

      background: #5352ed;
      border: none;
      color: white;
      @media (max-width: 1045px) {
        top: 75%;
      }
      @media (max-width: 753px) {
        top: 78%;
      }
      @media (max-width: 600px) {
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
      top: 88%;
      border: 2px solid #f1f1fa;
      background: white;
      @media (max-width: 1045px) {
        top: 90%;
      }
      @media (max-width: 753px) {
        top: 94%;
      }
    `}

  border-radius: 16px;
  font-size: 1em;
`;

export const AddLink = styled.button`
  cursor: pointer;
  background: transparent;
  border: 2px solid #5352ed;
  border-radius: 2em;
  padding: 4%;
  color: #5352ed;
  font-size: 1em;
`;

export const FavouriteButton = styled.button`
  width: 80%;
  margin: auto;
  margin-top: 15%;
  margin-bottom: 3%;
  display: flex;
  font-size: 1.2em;
  align-items: center;
  padding: 3.5%;
  background: transparent;
  border: none;
  font-family: Inter, sans-serif;
  font-weight: 600;
  color: #77757f;

  background: #e4e3ff;
  border-radius: 1em;
`;

export const LogoutButton = styled.button`
  width: 80%;

  margin: auto;
  display: flex;
  font-size: 1.2em;
  align-items: center;
  padding: 3.5%;
  background: transparent;
  border: none;
  font-family: Inter, sans-serif;
  font-weight: 600;
  color: #77757f;

  border-radius: 1em;
`;

export const QuickLinkButton = styled.button`
  ${(props) =>
    props.id === "rootBtn" &&
    css`
      padding: 3%;
      width: 45%;
      font-size: 1em;
      color: white;
      font-family: Inter, sans-serif;
      border: none;
      border-radius: 1em;
      background: #6c6bf9;
    `}

  ${(props) =>
    props.id === "saveBtn" &&
    css`
      padding: 3%;
      width: 32%;
      font-size: 1em;
      color: #6c6bf9;
      font-weight: 600;
      font-family: Inter, sans-serif;
      border: none;
      border-radius: 1em;
      background: white; ;
    `}
`;

export const ModalButton = styled.button`
  cursor: pointer;
  ${(props) =>
    props.id === "close" &&
    css`
      background: transparent;
      font-size: 1em;
      border: none;
    `}

  ${(props) =>
    props.id === "saveModal" &&
    css`
      background: #5352ed;
      width: 40%;
      border-radius: 1em;
      padding: 5%;
      border: none;
      color: white;
      margin: auto;
      margin-top: 5%;
    `}
`;

export const FolderSettings = styled(FaEllipsisV)`
  flex-grow: 5;
  margin-left: 30%;
  cursor: pointer;
  color: black;
`;
