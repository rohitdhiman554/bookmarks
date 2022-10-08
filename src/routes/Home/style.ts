import styled, { css } from "styled-components";
import {
  FaCaretRight,
  FaFolder,
  FaHeart,
  FaRegHeart,
  FaSearch,
  FaSignOutAlt,
} from "react-icons/fa";
import { Card } from "@mui/material";
import { FadeLoader } from "react-spinners";

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
  width: 22%;
  margin-left: auto;
  margin-top: 1%;
  margin-right: 5%;
`;

export const UserProfile = styled.div`
  width: 80%;
  margin-left: 6%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserEmail = styled.div`
  font-family: Libre Franklin, sans-serif;
  font-weight: 600;
  color: #77757f;
  font-size: 0.9em;
`;
export const UserName = styled.div`
  color: #474749;
  font-family: Libre Franklin, sans-serif;
  font-weight: 700;
`;

export const UserAvatar = styled.div`
  margin-left: 2%;
  margin-top: 2%;
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
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: #dcdcdc;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #5352ed;
    border-radius: 10px;
  }
`;
export const AllFolders = styled.div`
  margin-top: 5%;
`;

type FolderType = {
  id: string;
  active: string;
};

export const Folder = styled.div<FolderType>`
  ${(props) =>
    props.id === props.active &&
    css`
      background: #e4e3ff;
      border-radius: 1em;
    `}

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

export const SelectFolder = styled.div`
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
  margin-left: 3%;
  padding: 1%;
  font-size: 1.2em;
  margin-right: 5%;
  color: #5352ed;
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
  padding: 1%;
  width: 60%;
`;

export const QuickLinkDiv2 = styled.div`
  width: 30%;
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
  ::placeholder {
    color: white;
    opacity: 0.9;
  }
`;
export const QuickLinkButtonsDiv = styled.div`
  display: flex;
  margin-left: 5%;
  width: 90%;
  margin-top: 1.5%;
`;

export const BookmarksDiv = styled.div`
  width: 100%;
  display: flex;

  justify-content: flex-start;
  flex-wrap: wrap;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-track {
    background: #dcdcdc;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #5352ed;
    border-radius: 10px;
  }
`;

export const VerticalBookmarksDiv = styled.div`
  height: 43.8%;
  width:80%:
  display:flex;
  flex-direction: column;
  align-items:flex-start;
  justify-content:flex-start;
 
  overflow: auto;
  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-track {
    background: #dcdcdc;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #5352ed;
    border-radius: 10px;
  }
`;

export const BookmarkNameDiv = styled.div`
  display: flex;
  align-items: center;

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
  ::placeholder {
    color: white;
    opacity: 0.9;
  }
`;

export const StyledCard = styled(Card)`
  width: 18%;
  margin-left: 5%;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  box-shadow: "5px 10px red";
`;

export const VerticalStyledCard = styled(Card)`
  display: flex;
  width: 90%;
  height: 50%;
  margin-left: 5%;
  margin-top: 2%;

  align-items: center;

  box-shadow: "5px 10px red";
`;

export const VerticalCardContent = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardImageDiv = styled.div`
  width: 80%;
  height: 150px;
  margin: auto;
  margin-top: 6%;
  border-radius: 1em;
`;

export const VerticalCardImage = styled.div`
  display: flex;
  margin-top: 0.5%;
  width: 20%;
  height: 140px;
  border-radius: 1em;
`;

export const VerticalMenuItems = styled.div`
  display: flex;
  width: 1%;
  justify-content: space-around;
  margin-top: 2%;
  flex-grow: 1;
`;

export const CardHeading = styled.div`
  width: 100%;
  font-size: 1em;
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-style: normal;
  object-fit: cover;
`;

export const CardDiscription = styled.div`
  margin-top: 4%;
`;

export const VerticalCardDiscription = styled.div`
  margin-top: 2%;
  width: 70%;

  flex-grow: 1;
`;

export const SearchBookmark = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
`;

export const SpinnerDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20%;
`;

export const HeartIcon = styled(FaRegHeart)`
  cursor: pointer;
  margin-left: auto;
  font-size: 1.5em;
  margin-right: 5%;
`;

export const FilledHeartIcon = styled(FaHeart)`
  cursor: pointer;
  margin-left: auto;
  font-size: 1.5em;
  margin-right: 5%;
  color: red;
`;

export const ModalLoader = styled.div`
  margin-left: 10%;
`;

export const MainFolderDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  margin-top: 10%;
`;

export const FavoriteLoader = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

export const DisplayDiv = styled.div`
  width: 8%;
  height: 45px;
  margin-right: 5%;
  margin-top: 1%;
  display: flex;

  border-radius: 16px;
  :hover {
    cursor: pointer;
  }
`;
export const VerticalDiv = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
`;
export const HorizontalDiv = styled.div`
  width: 50%;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`;

export const NoFolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4%;
`;
