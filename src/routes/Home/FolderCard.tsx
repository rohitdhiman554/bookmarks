import { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { deleteFolderRequest, renameFolderRequest } from "../../store/actions";
import {
  AllFolders,
  Folder,
  DropdownIcon,
  FolderIcon,
  FolderName,
  ModalContent,
  ModalHeading,
  ModalInput,
  ModalName,
} from "./style";
import { FolderSettings, ModalButton } from "../../components/Button";
import React from "react";
import { Modal, Box } from "@mui/material";
import { modalStyle } from ".";

interface FolderCardType {
  key: string;
  id: string;
  name: string;
  renameFolder: (obj: any) => void;
  deleteFolder: (obj: any) => void;
  folderName: (e: any) => void;
}

const FolderCard = (props: FolderCardType) => {
  const [rename, setRename] = useState("");
  const [modal, setModal] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleDelete = () => {
    let obj = { folderId: props.id };
    props.deleteFolder(obj);
    setModal(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openModal = () => {
    setAnchorEl(null);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const renameFolder = (e: any) => {
    setRename(e.target.value);
  };

  const handleRename = () => {
    let obj = { folderId: props.id, name: rename };
    setRename("");
    props.renameFolder(obj);
    setModal(false);
  };
  const getName = (e: any) => {
    props.folderName(e);
  };

  return (
    <>
      <AllFolders>
        <Folder>
          <DropdownIcon />
          <FolderIcon />
          <FolderName onClick={getName}>{props.name}</FolderName>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <FolderSettings />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={openModal}>Rename</MenuItem>
            <MenuItem onClick={handleClose}>Sub Folder</MenuItem>
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
          </Menu>
        </Folder>
      </AllFolders>
      <Modal open={modal}>
        <Box sx={modalStyle}>
          <ModalHeading>
            <ModalName>RENAME FOLDER</ModalName>
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
              onChange={renameFolder}
            ></ModalInput>
            <ModalButton id="saveModal" onClick={handleRename}>
              Save
            </ModalButton>
          </ModalContent>
        </Box>
      </Modal>
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    renameFolder: (obj: any) => dispatch(renameFolderRequest(obj)),
    deleteFolder: (obj: any) => dispatch(deleteFolderRequest(obj)),
  };
};

export default connect(null, mapDispatchToProps)(FolderCard);
