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
  ${(props) =>
    props.id === "search" &&
    css`
      display: flex;
      width: 80%;
      margin-left: 5%;
      padding: 2%;
      margin-top: 8%;
      border: 2px solid #f1f1fa;
      border-radius: 1em;
    `}

  ${(props) =>
    props.id === "bookmarkSearch" &&
    css`
      display: flex;

      width: 20%;
      margin-left: 5%;
      margin-top: 1%;
      border: 2px solid black;
      border-radius: 1em;
    `}
`;
export const SearchIcon = styled(FaSearch)`
  ${(props) =>
    props.id === "search" &&
    css`
      margin-top: 4%;
      margin-left: 8%;
    `}

  ${(props) =>
    props.id === "bookmarkSearch" &&
    css`
      margin-top: 4%;
      margin-left: 8%;
    `}
`;

export const SearchInput = styled.input`
  border: none;
  width: 80%;
  font-size: ${(props) => (props.placeholder = "13px")};
  box-sizing: border-box;
  padding: 3%;
  &:focus {
    outline: none;
  }
`;

export const AllFolders = styled.div`
  margin-top: 5%;
`;

export const FolderDiv = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: 50%;
  margin-top: 18%;
`;

export const Folder = styled.div`
  display: flex;
  align-items: center;
  padding: 2%;
  box-sizing: border-box;
  width: 100%;
  margin: auto;

  &:hover {
    background: #e4e3ff;
    border-radius: 1em;
  }
`;

export const FolderNameInput = styled.input`
  cursor: pointer;
  padding: 3%;
  width: 45%;
  font-size: 1em;
  color: white;
  font-family: Inter, sans-serif;
  border: none;
  border-radius: 1em;
  background: #6c6bf9;
`;

export const ModalName = styled.div`
  font-family: Inter, sans-serif;
  font-weight: 600;
`;

export const ModalHeading = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2em;
  padding: 4%;
  margin-top: 4%;
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ModalFolderName = styled.div``;

export const ModalInput = styled.input`
  margin-top: 5%;
  margin-left: 4%;
  width: 80%;
  padding: 5%;
  border-radius: 1em;
  border: 2px solid #5352ed;
  ::-webkit-input-placeholder {
    color: #5352ed;
  }

  &:focus {
    border: 2px solid #5352ed;
  }
`;

export const FolderIcon = styled(FaFolder)`
  font-size: 1.8em;
  margin-left: 3%;
  margin-right: 5%;
  color: #5352ed;
`;
export const FolderName = styled.p`
  font-family: Inter, sans-serif;
  cursor: pointer;
  font-weight: 500;
  flex-grow: 5;
`;

export const DropdownIcon = styled(FaCaretRight)`
  flex-grow: 1;
`;

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
  flex-direction: column;
  width: 100%;
  border: 2px solid red;
`;

export const QuickLink = styled.div`
  display: flex;
  background: #5352ed;
  width: 93%;
  margin-left: 3.5%;
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

export const SearchBookmark = styled.div`
  border: 2px solid black;
`;
