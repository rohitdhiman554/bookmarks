import { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import Modal from "@mui/material/Modal";
import { ClipLoader } from "react-spinners";
import { Box } from "@mui/material";

import {
  createNewFolder,
  getFolder,
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
} from "./style";
import { StyledImage } from "../../components/Image";
import {
  AddLink,
  FavouriteButton,
  LogoutButton,
  ModalButton,
} from "../../components/Button";
import Bookmark from "./Bookmark";
import { useGlobalState } from "../../hooks";
import Bookmarks from "./Bookmarks";
import UserPhoto from "../../components/assets/avatar.svg";

type DashBoardState = {
  createFolder: (name: string) => void;
  getAllFolders: () => void;
  getLoginUser: () => void;
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
};

const Home = (props: DashBoardState) => {
  useEffect(() => {
    props.getAllFolders();
    props.getLoginUser();
  }, []);

  const [folder, setFolder] = useState("");
  const [subModal, setSubModal] = useState(false);
  const { folders, folderSpinner } = useGlobalState();

  const { userProfile } = useGlobalState();

  const createNewFolder = (e: any) => {
    console.log(e);
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
    folders.filter((folder: any) => {
      return folder.name !== e.target.value;
    });
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
              onChange={handleSearch}
            />
          </SearchDiv>
          {folderSpinner === true ? (
            <SpinnerDiv>
              <ClipLoader />
            </SpinnerDiv>
          ) : (
            <FolderDiv>
              {folders.map((folder: any) => {
                return (
                  <FolderCard
                    key={folder.id}
                    id={folder.id}
                    name={folder.name}
                  />
                );
              })}
              <AddLink onClick={openModal}>+ Add Folder</AddLink>
            </FolderDiv>
          )}

          <FavouriteButton>
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

          <Modal open={subModal}>
            <Box sx={modalStyle}>
              {folderSpinner === true ? (
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
          </SearchBookmark>

          <Bookmarks />
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
  };
};

export default connect(null, mapDispatchToProps)(Home);
