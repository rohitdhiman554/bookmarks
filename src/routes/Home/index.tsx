import { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { FaSearch } from "react-icons/fa";

import { createNewFolder, getFolder } from "../../store/actions";
import FolderCard from "./FolderCard";
import BookmarkIcon from "../../components/assets/bookmark.svg";
import QuickLinkImg from "../../components/assets/quickLink.svg";

import {
  DropdownIcon,
  FavIcon,
  Folder,
  FolderDiv,
  FolderIcon,
  FolderName,
  HeadingDiv,
  LeftPanel,
  LogoutIcon,
  SearchDiv,
  SearchIcon,
  SearchInput,
  MainDiv,
  QuickLink,
  RightPanel,
  UrlDiv,
  UrlInput,
  QuickLinkButtonsDiv,
  QuickLinkDiv1,
  QuickLinkDiv2,
} from "./style";
import { StyledImage } from "../../components/Image";
import {
  FavouriteButton,
  LogoutButton,
  QuickLinkButton,
} from "../../components/Button";

type DashBoardState = {
  createFolder: (name: string) => void;
  getAllFolders: () => void;
  folders: any[];
};

const Home = (props: DashBoardState) => {
  const [folder, setFolder] = useState("");

  const createNewFolder = (e: any) => {
    setFolder(e.target.value);
  };

  return (
    <>
      <MainDiv>
        <LeftPanel>
          <StyledImage src={BookmarkIcon} id="bookmarkIcon" />
          <HeadingDiv id="bookmark">BOOKMARK</HeadingDiv>
          <SearchDiv id="search">
            <SearchIcon />
            <SearchInput placeholder="Search..." type="text" />
          </SearchDiv>
          <FolderDiv>
            <Folder>
              <DropdownIcon />
              <FolderIcon />
              <FolderName>Folder 1</FolderName>
            </Folder>

            <Folder>
              <DropdownIcon />
              <FolderIcon />
              <FolderName>Folder 2</FolderName>
            </Folder>

            <Folder>
              <DropdownIcon />
              <FolderIcon />
              <FolderName>Folder 3</FolderName>
            </Folder>

            <Folder>
              <DropdownIcon />
              <FolderIcon />
              <FolderName>Folder 4</FolderName>
            </Folder>

            <Folder>
              <DropdownIcon />
              <FolderIcon />
              <FolderName>Folder 5</FolderName>
            </Folder>
          </FolderDiv>

          <FavouriteButton>
            <FavIcon />
            Favourites
          </FavouriteButton>

          <LogoutButton>
            <LogoutIcon />
            Logout
          </LogoutButton>
        </LeftPanel>

        <RightPanel>
          <QuickLink>
            <QuickLinkDiv1>
              <HeadingDiv id="quicklink">Add Quick Link</HeadingDiv>
              <p
                style={{
                  color: "white",
                  margin: "3% 0 0 5%",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.89em",
                }}
              >
                URL
              </p>
              <UrlDiv>
                <UrlInput type="text" placeholder="url"></UrlInput>
              </UrlDiv>
              <p
                style={{
                  color: "white",
                  margin: "4% 0 0 5%",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.89em",
                }}
              >
                FOLDER
              </p>

              <QuickLinkButtonsDiv>
                <QuickLinkButton id="rootBtn">Root</QuickLinkButton>
                <QuickLinkButton id="saveBtn">Save</QuickLinkButton>
              </QuickLinkButtonsDiv>
            </QuickLinkDiv1>

            <QuickLinkDiv2>
              <img src={QuickLinkImg} />
            </QuickLinkDiv2>
          </QuickLink>
        </RightPanel>
      </MainDiv>
    </>
  );
};
const mapStateToProps = (state: any) => {
  return {
    folders: state.folderReducer.folders,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createFolder: (name: string) => dispatch(createNewFolder(name)),
    getAllFolders: () => dispatch(getFolder()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
