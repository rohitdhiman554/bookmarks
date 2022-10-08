import { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import Modal from "@mui/material/Modal";
import { BeatLoader, ClipLoader, SyncLoader } from "react-spinners";
import { Box } from "@mui/material";
import styled from "styled-components";

import {
  createNewFolder,
  getFolder,
  moveBookmarkRequest,
  searchFolderRequest,
  showFavoriteRequest,
  toggleView,
  userLoginRequest,
} from "../../store/actions";
import FolderCard from "./FolderCard";
import BookmarkIcon from "../../components/assets/bookmark.svg";

import {
  FavIcon,
  FolderDiv,
  HeadingDiv,
  LeftPanel,
  LogoutIcon,
  SearchDiv,
  SearchIcon,
  SearchInput,
  MainDiv,
  RightPanel,
  SearchBookmark,
  ModalHeading,
  ModalName,
  ModalInput,
  ModalContent,
  SpinnerDiv,
  UserDiv,
  UserAvatar,
  UserName,
  UserProfile,
  UserEmail,
  BookmarksDiv,
  ModalLoader,
  MainFolderDiv,
  DisplayDiv,
  HorizontalDiv,
  VerticalDiv,
  FavoriteLoader,
  VerticalBookmarksDiv,
  NoFolder,
} from "./style";
import { StyledImage } from "../../components/Image";
import {
  AddLink,
  FavouriteButton,
  LogoutButton,
  ModalButton,
} from "../../components/Button";
import Bookmark from "./QuickLink";
import { useReducerState } from "../../hooks";
import Bookmarks from "./Bookmarks";
import UserPhoto from "../../components/assets/avatar.svg";
import { BsJournalBookmarkFill, BsListUl } from "react-icons/bs";
import { FaBan, FaGripHorizontal } from "react-icons/fa";

type DashBoardState = {
  createFolder: (name: string) => void;
  getAllFolders: () => void;
  getLoginUser: () => void;
  searchFolders: (name: string) => void;
  moveBookmark: (folderId: string, bookmarkId: string) => void;
  showFavorite: () => void;
  toggleView: () => void;
};

export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "20%",
  background: "white",
  padding: "1%",
  outline: "none",
  borderRadius: "1em",
  overflow: "auto",
};

const EmptyFolderDiv = styled.div`
  display: flex;
  width: 25%;
  margin: auto;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  padding: 2%;
  flex-direction: column;
`;
const Icon = styled.div`
  color: #5352ed;
  font-size: 2.5em;
`;
const P = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1.25em;
  display: flex;
  align-items: center;
  color: #474749;
`;
const Text = styled.div`
display:flex;
flex-wrap:wrap:
justify-content:center;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 1em;
line-height: 22px;
align-items: center;
color: #77757F;
`;

const BookmarkSpinnerDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = (props: DashBoardState) => {
  useEffect(() => {
    props.getAllFolders();
    props.getLoginUser();
  }, []);

  const [folder, setFolder] = useState("");
  const [subModal, setSubModal] = useState(false);
  const [searchFolder, setSearchFolder] = useState("");
  const [active, setActive] = useState(false);

  const {
    folders,
    folderSpinner,
    userProfile,
    bookmarks,
    bookmarkSpinner,
    getFoldersSpinner,
    vertical,

    processing,
  } = useReducerState();

  const createNewFolder = (e: any) => {
    setFolder(e.target.value);
  };

  const closeModal = () => {
    setSubModal(false);
  };

  const openModal = () => {
    setSubModal(true);
  };

  const logoutUser = () => {
    localStorage.clear();
  };

  const saveFolder = () => {
    props.createFolder(folder);
    setSubModal(false);
  };

  const handleSearch = (e: any) => {
    if (e.key === "Enter") {
      if (e.target.value === "") {
        props.getAllFolders();
      } else {
        props.searchFolders(searchFolder);
      }
    }
  };

  const getFolderId = (folderId: string, bookmarkId: string) => {
    props.moveBookmark(folderId, bookmarkId);
  };

  const handleToggle = () => {
    setActive(true);
    props.toggleView();
  };

  return (
    <>
      <MainDiv>
        <LeftPanel>
          <StyledImage src={BookmarkIcon} id="bookmarkIcon" />
          <HeadingDiv id="bookmark">BOOKMARK</HeadingDiv>
          <SearchDiv id="search">
            <SearchIcon id="search" />
            <SearchInput
              placeholder="Search..."
              type="text"
              value={searchFolder}
              onChange={(e) => setSearchFolder(e.target.value)}
              onKeyPress={handleSearch}
            />
          </SearchDiv>
          {getFoldersSpinner === true ? (
            <SpinnerDiv>
              <ClipLoader />
            </SpinnerDiv>
          ) : (
            <>
              <MainFolderDiv>
                <FolderDiv>
                  {folders.length !== 0 ? (
                    folders.map((folder: any) => {
                      return (
                        <FolderCard
                          key={folder.id}
                          id={folder.id}
                          name={folder.name}
                        />
                      );
                    })
                  ) : (
                    <NoFolder>
                      <FaBan size={40} color="#616161"></FaBan>
                      <div style={{ marginTop: "8%" }}>No folder Exist</div>
                    </NoFolder>
                  )}
                </FolderDiv>
                <AddLink onClick={openModal}>+ Add Folder</AddLink>
              </MainFolderDiv>
            </>
          )}

          <FavouriteButton onClick={props.showFavorite}>
            <FavIcon />
            Favourites
          </FavouriteButton>

          <LogoutButton onClick={logoutUser}>
            <LogoutIcon />
            Logout
          </LogoutButton>
        </LeftPanel>

        <RightPanel>
          <UserDiv>
            <UserAvatar>
              <img src={UserPhoto} width={50} height={50} />
            </UserAvatar>
            <UserProfile>
              <UserName>{userProfile.name}</UserName>
              <UserEmail>{userProfile.email}</UserEmail>
            </UserProfile>
          </UserDiv>

          <Bookmark />

          <Modal open={folderSpinner === true ? true : subModal}>
            <Box sx={modalStyle}>
              {getFoldersSpinner === true ? (
                <SpinnerDiv>
                  <ClipLoader />
                </SpinnerDiv>
              ) : (
                <>
                  <ModalHeading>
                    <ModalName>CREATE FOLDER</ModalName>
                    <ModalButton id="close" onClick={closeModal}>
                      X
                    </ModalButton>
                  </ModalHeading>
                  <ModalContent>
                    <p
                      style={{
                        marginLeft: "5%",
                        marginTop: "3%",
                        color: " #808081",
                        fontFamily: "Inter,sans-serif",
                      }}
                    >
                      FOLDER NAME
                    </p>
                    <ModalInput
                      type="text"
                      placeholder="Enter Folder name"
                      onChange={createNewFolder}
                    ></ModalInput>
                    <ModalButton id="saveModal" onClick={saveFolder}>
                      Save
                      {folderSpinner ? (
                        <ModalLoader>
                          <ClipLoader size={10} />
                        </ModalLoader>
                      ) : (
                        ""
                      )}
                    </ModalButton>
                  </ModalContent>
                </>
              )}
            </Box>
          </Modal>

          <SearchBookmark>
            <SearchDiv id="bookmarkSearch">
              <SearchIcon id="bookmarkSearchIcon" />
              <SearchInput
                id="bookmarkSearchInput"
                placeholder="Search..."
                type="text"
              />
            </SearchDiv>

            <DisplayDiv>
              <VerticalDiv onClick={handleToggle}>
                <FaGripHorizontal size={25} />
              </VerticalDiv>
              <HorizontalDiv onClick={handleToggle}>
                {" "}
                <BsListUl size={23} />
              </HorizontalDiv>
            </DisplayDiv>
          </SearchBookmark>

          {vertical === false ? (
            bookmarkSpinner === true ? (
              <BookmarkSpinnerDiv>
                <SyncLoader size={15} />
              </BookmarkSpinnerDiv>
            ) : (
              <>
                {bookmarks.length === 0 ? (
                  <EmptyFolderDiv>
                    <Icon>
                      <BsJournalBookmarkFill />
                    </Icon>
                    <P>No Bookmarks Found</P>
                    <Text>Keep content organized with Folders</Text>
                  </EmptyFolderDiv>
                ) : processing === true ? (
                  <>
                    <FavoriteLoader>
                      <BeatLoader size={15} />
                    </FavoriteLoader>
                  </>
                ) : (
                  <BookmarksDiv>
                    {bookmarks.map((bookmark: any) => {
                      return (
                        <Bookmarks
                          key={bookmark.id}
                          id={bookmark.id}
                          name={bookmark.name}
                          imageUrl={bookmark.imageUrl}
                          description={bookmark.description}
                          folderId={getFolderId}
                          isFavorite={bookmark.isFavorite}
                        ></Bookmarks>
                      );
                    })}
                  </BookmarksDiv>
                )}
              </>
            )
          ) : bookmarkSpinner === true ? (
            <BookmarkSpinnerDiv>
              <SyncLoader size={15} />
            </BookmarkSpinnerDiv>
          ) : (
            ///////dsaaaaaa
            <>
              {bookmarks.length === 0 ? (
                <EmptyFolderDiv>
                  <Icon>
                    <BsJournalBookmarkFill />
                  </Icon>
                  <P>No Bookmarks Found</P>
                  <Text>Keep content organized with Folders</Text>
                </EmptyFolderDiv>
              ) : processing === true ? (
                <>
                  <FavoriteLoader>
                    <BeatLoader size={15} />
                  </FavoriteLoader>
                </>
              ) : (
                <VerticalBookmarksDiv>
                  {bookmarks.map((bookmark: any) => {
                    return (
                      <Bookmarks
                        key={bookmark.id}
                        id={bookmark.id}
                        name={bookmark.name}
                        imageUrl={bookmark.imageUrl}
                        description={bookmark.description}
                        folderId={getFolderId}
                        isFavorite={bookmark.isFavorite}
                      ></Bookmarks>
                    );
                  })}
                </VerticalBookmarksDiv>
              )}
            </>
          )}
        </RightPanel>
      </MainDiv>
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createFolder: (name: string) => dispatch(createNewFolder(name)),
    getAllFolders: () => dispatch(getFolder()),
    getLoginUser: () => dispatch(userLoginRequest()),
    searchFolders: (name: string) => dispatch(searchFolderRequest(name)),
    moveBookmark: (folderId: string, bookmarkId: string) =>
      dispatch(moveBookmarkRequest(folderId, bookmarkId)),
    showFavorite: () => dispatch(showFavoriteRequest()),
    toggleView: () => dispatch(toggleView()),
  };
};

export default connect(null, mapDispatchToProps)(Home);
