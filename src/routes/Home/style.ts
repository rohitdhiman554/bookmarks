import styled, { css } from "styled-components";
import {
  FaCaretRight,
  FaFolder,
  FaHeart,
  FaSearch,
  FaSignOutAlt,
} from "react-icons/fa";
import { Card } from "@mui/material";

export const MainDiv = styled.div`
  display: flex;
  height: 100vh;
`;

export const LeftPanel = styled.div`
  box-shadow: 6px 0px 8px silver;
  width: 18%;
`;

export const UserDiv = styled.div`
  cursor: pointer;
  display: flex;
  width: 20%;
  margin-left: auto;
  margin-top: 1%;
  margin-right: 5%;
`;

export const UserProfile = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const UserEmail = styled.div`
  font-family: Libre Franklin, sans-serif;
  font-weight: 600;
  color: #77757f;
  font-size: 0.9em;
`;
export const UserName = styled.div`
  padding: 2%;
  color: #474749;
  font-family: Libre Franklin, sans-serif;
  font-weight: 700;
`;
export const UserAvatar = styled.div`
  width: 20%;
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
      border: none;
      display: flex;
      background: #dcdcdc;
      width: 20%;
      margin-left: 5%;
      margin-top: 1%;

      border-radius: 1em;
    `}
`;
export const SearchIcon = styled(FaSearch)`
  cursor: pointer;
  ${(props) =>
    props.id === "search" &&
    css`
      margin-top: 4%;
      margin-left: 8%;
    `}

  ${(props) =>
    props.id === "bookmarkSearchIcon" &&
    css`
      margin-top: 5%;
      margin-left: 8%;
    `}
`;

export const SearchInput = styled.input`
  border: none;
  width: 80%;
  font-size: ${(props) => (props.placeholder = "13px")};
  box-sizing: border-box;
  padding: 5%;
  ${(props) =>
    props.id === "bookmarkSearchInput" &&
    css`
      background: #dcdcdc;
      color: #a5a3a9;
    `}

  &:focus {
    outline: none;
  }
`;

export const FolderDiv = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: 50%;
  margin-top: 18%;
`;
export const AllFolders = styled.div`
  margin-top: 5%;
`;

export const Folder = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;

  margin: auto;

  &:hover {
    background: #e4e3ff;
    border-radius: 1em;
  }
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
  font-size: 2em;
  margin-left: 2%;
  margin-right: 4%;
  color: #5352ed;
`;
export const FolderName = styled.p`
  font-family: Inter, sans-serif;
  cursor: pointer;
  font-weight: 500;

  width: 66%;
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
  flex-direction: column;
  width: 100%;
`;

export const QuickLink = styled.div`
  display: flex;
  background: #5352ed;
  width: 93%;
  margin-left: 3.5%;
  margin-top: 1%;
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
  margin-left: 5%;
  width: 90%;
  margin-top: 2%;
`;

export const BookmarkCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow: auto;
`;

export const BookmarkNameDiv = styled.div`
  width: 50%;
  padding: 2%;
  width: 45%;
  margin-right: 10%;
  font-size: 1em;
  color: white;
  font-family: Inter, sans-serif;
  border: none;
  border-radius: 1em;
  background: #6c6bf9;
`;

export const BookmarkNameInput = styled.input`
  width: 100%;
  padding: 2%;
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

export const StyledCard = styled(Card)`
  margin-left: 5%;
  margin-top: 2%;
  display: flex;
  flex-direction: column;

  width: 30%;

  box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12),
    0px 8px 24px -4px rgba(24, 39, 75, 0.08);
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardImage = styled.img`
  width: 90%;
  border-radius: 1.5em;
  margin: auto;
`;

export const CardHeading = styled.div`
  width: 100%;
  font-size: 1em;
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-style: normal;
`;

export const CardDiscription = styled.div`
  margin-top: 4%;
`;

export const SearchBookmark = styled.div``;

export const SpinnerDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20%;
`;
