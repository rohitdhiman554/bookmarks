import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Modal, Box } from "@mui/material";
import { FaEllipsisV } from "react-icons/fa";

import {
  deleteFolderRequest,
  getBookmarkRequest,
  renameFolderRequest,
} from "../../store/actions";
import { ClipLoader, FadeLoader } from "react-spinners";
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
  ModalLoader,
} from "./style";
import { ModalButton } from "../../components/Button";
import { modalStyle } from ".";
import { useReducerState } from "../../hooks";

interface FolderCardType {
  key: string;
  id: string;
  name: string;
  renameFolder: (obj: any) => void;
  getBookmark: (id: string, name: string) => void;
  deleteFolder: (obj: any) => void;
}

const FolderCard = (props: FolderCardType) => {
  const [rename, setRename] = useState("");
  const [modal, setModal] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { Loading, deleteSpinner, folderId } = useReducerState();
  const [active, setActive] = useState(false);

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

  return (
    <>
      <AllFolders>
        <Folder
          onClick={() => {
            props.getBookmark(props.id, props.name);
          }}
          id={props.id}
          active={folderId}
        >
          <DropdownIcon />
          <FolderIcon />
          <FolderName>{props.name}</FolderName>
          <FaEllipsisV
            style={{ marginTop: "1.2%", color: " #9D9B9F", cursor: "pointer" }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={(event: any) => {
              setAnchorEl(event.currentTarget);
            }}
          ></FaEllipsisV>
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

            <MenuItem onClick={handleDelete}>
              Delete{" "}
              {deleteSpinner ? (
                <ModalLoader>
                  <ClipLoader size={10}></ClipLoader>
                </ModalLoader>
              ) : (
                ""
              )}{" "}
            </MenuItem>
          </Menu>
        </Folder>
      </AllFolders>

      <Modal open={Loading === true ? true : modal}>
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
              {Loading ? (
                <ModalLoader>
                  <ClipLoader size={10}></ClipLoader>
                </ModalLoader>
              ) : (
                ""
              )}
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
    getBookmark: (id: string, name: string) =>
      dispatch(getBookmarkRequest(id, name)),
  };
};

export default connect(null, mapDispatchToProps)(FolderCard);
