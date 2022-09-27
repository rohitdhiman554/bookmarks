import { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import Modal from "@mui/material/Modal";

import { createNewFolder, getFolder } from "../../store/actions";
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
} from "./style";
import { StyledImage } from "../../components/Image";
import {
  AddLink,
  FavouriteButton,
  LogoutButton,
  ModalButton,
} from "../../components/Button";
import { Box } from "@mui/material";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { createFolder } from "../../store/saga/createFolder";
import Bookmark from "./Bookmark";

type DashBoardState = {
  createFolder: (name: string) => void;
  getAllFolders: () => void;
  folders: any[];
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
  const [folder, setFolder] = useState("");
  const [subModal, setSubModal] = useState(false);
  const [folderName, setFolderName] = useState("");

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
  const getFolderName = (e: any) => {
    setFolderName(e.target.innerText);
  };

  return (
    <>
      <MainDiv>
        <LeftPanel>
          <StyledImage src={BookmarkIcon} id="bookmarkIcon" />
          <HeadingDiv id="bookmark">BOOKMARK</HeadingDiv>
          <SearchDiv id="search">
            <SearchIcon id="search" />
            <SearchInput placeholder="Search..." type="text" />
          </SearchDiv>

          <FolderDiv>
            <AddLink onClick={openModal}>+ Add Link</AddLink>
            {props.folders.map((folder) => {
              return (
                <FolderCard
                  key={folder.id}
                  id={folder.id}
                  name={folder.name}
                  folderName={getFolderName}
                />
              );
            })}
          </FolderDiv>

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
          {folderName != "" ? <Bookmark folder={folderName} /> : <Bookmark />}

          <Modal open={subModal}>
            <Box sx={modalStyle}>
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
            </Box>
          </Modal>

          <SearchBookmark>
            <SearchDiv id="bookmarkSearch">
              <SearchIcon id="bookmarkSearch" />
              <SearchInput placeholder="Search..." type="text" />
            </SearchDiv>
          </SearchBookmark>
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
