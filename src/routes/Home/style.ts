import styled, { css } from "styled-components";
import {
  FaCaretRight,
  FaFolder,
  FaHeart,
  FaSearch,
  FaSignOutAlt,
} from "react-icons/fa";

export const MainDiv = styled.div`
  display: flex;
  height: 100vh;
`;

export const LeftPanel = styled.div`
  box-shadow: 6px 0px 8px silver;
  width: 18%;
`;

export const HeadingDiv = styled.div`
  ${(props) =>
    props.id === "bookmark" &&
    css`
      font-size: 1.5rem;
      font-family: Inter, sans-serif;
      margin-left: 5%;
      margin-top: 2%;
      padding: 2%;
      font-weight: 700;
    `}

  ${(props) =>
    props.id === "quicklink" &&
    css`
      font-size: 1.5rem;
      font-family: Inter, sans-serif;
      font-style: normal;
      margin-left: 5%;
      margin-top: 1%;
      color: white;
      font-weight: 600;
    `}
`;

export const SearchDiv = styled.div`
  display: flex;
  width: 80%;
  margin-left: 5%;
  padding: 2%;
  margin-top: 8%;
  border: 2px solid #f1f1fa;
  border-radius: 1em;
`;
export const SearchIcon = styled(FaSearch)`
  margin-top: 6%;
  margin-left: 8%;
`;

export const SearchInput = styled.input`
  padding: 5%;
  border: none;
  font-size: ${(props) => (props.placeholder = "13px")};
  box-sizing: border-box;
  height: 42px;
  &:focus {
    outline: none;
  }
`;

export const FolderDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15%;
`;

export const Folder = styled.div`
  display: flex;
  align-items: center;
  padding: 2%;
  box-sizing: border-box;

  width: 80%;
  margin: auto;

  &:hover {
    background: #e4e3ff;
    border-radius: 1em;
  }
`;

export const FolderIcon = styled(FaFolder)`
  font-size: 1.8em;
  margin-left: 3%;
  margin-right: 5%;
  color: blue;
`;
export const FolderName = styled.p`
  font-family: Inter, sans-serif;
  font-weight: 500;
`;

export const DropdownIcon = styled(FaCaretRight)``;

export const FavIcon = styled(FaHeart)`
  color: #5352ed;
  margin-left: 3%;
  padding: 1%;
  font-size: 1.2em;
  margin-right: 5%;
`;

export const LogoutIcon = styled(FaSignOutAlt)`
  margin-left: 3%;
  padding: 1%;
  font-size: 1.2em;
  margin-right: 5%;
  color: #5352ed;
`;

export const RightPanel = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const QuickLink = styled.div`
  display: flex;
  background: #5352ed;
  width: 90%;
  margin: auto;
  margin-top: 6%;
  border-radius: 1.5em;
`;

export const QuickLinkDiv1 = styled.div`
  margin-top: 1.5%;
  padding: 2%;
  width: 60%;
`;

export const QuickLinkDiv2 = styled.div`
  width: 40%;
`;

export const UrlDiv = styled.div`
  border: 2px solid black;
  margin-top: 2%;
  width: 65%;
  margin-left: 5%;
  border: none;

  border-radius: 1em;
`;

export const UrlInput = styled.input`
  width: 100%;
  padding: 4%;
  border: none;
  border-radius: 1em;
  background: #6c6bf9;
  color: white;

  box-sizing: border-box;
  font-size: ${(props) => (props.placeholder = "15px")};
  &:focus {
    outline: none;
  }
`;
export const QuickLinkButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 5%;
  width: 65%;

  margin-top: 2%;
`;
