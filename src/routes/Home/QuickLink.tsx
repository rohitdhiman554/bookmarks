import { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Modal, Box } from "@mui/material";

import { createBookmarksRequest } from "../../store/actions";
import QuickLinkImg from "../../components/assets/quickLink.svg";
import { FolderNameButton, QuickLinkButton } from "../../components/Button";
import {
  QuickLink,
  QuickLinkDiv1,
  HeadingDiv,
  UrlDiv,
  UrlInput,
  QuickLinkDiv2,
  BookmarkNameDiv,
  QuickLinkButtonsDiv,
  BookmarkNameInput,
  AllFolders,
  DropdownIcon,
  Folder,
  FolderIcon,
  FolderName,
  ModalHeading,
  ModalName,
  SelectFolder,
} from "./style";
import { useReducerState } from "../../hooks";

type BookmarksType = {
  createBookmark: (obj: any) => void;
  folder?: string;
  id?: string;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Bookmark = (props: BookmarksType) => {
  const [url, setUrl] = useState("");
  const [bookmarkName, setBookmarkname] = useState("");
  const [open, setOpen] = useState(false);
  const [folderId, setFolderId] = useState("");

  const { folders, folderName } = useReducerState();

  const addUrl = (e: any) => {
    setUrl(e.target.value);
  };

  const handleBookmark = () => {
    let obj = {
      url: url,
      name: bookmarkName,
      folderId: folderId,
    };

    setUrl("");
    setBookmarkname("");

    props.createBookmark(obj);
  };

  const handleBookmarkName = (e: any) => {
    setBookmarkname(e.target.value);
  };

  const handleClose = () => setOpen(false);

  const openFolderModal = () => {
    setOpen(true);
  };
  const closeFolderModal = () => {
    setOpen(false);
  };

  return (
    <>
      <QuickLink>
        <QuickLinkDiv1>
          <HeadingDiv id="quicklink">Add Quick Link</HeadingDiv>
          <p
            style={{
              color: "white",
              margin: "2% 0 0 5%",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.89em",
            }}
          >
            URL
          </p>
          <UrlDiv>
            <UrlInput
              type="text"
              placeholder="url"
              onChange={addUrl}
              value={url}
            ></UrlInput>
          </UrlDiv>
          <p
            style={{
              color: "white",
              margin: "2% 0 0 5%",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.89em",
            }}
          >
            NAME
          </p>

          <QuickLinkButtonsDiv>
            <BookmarkNameDiv>
              <BookmarkNameInput
                type="text"
                placeholder="bookmark name"
                onChange={handleBookmarkName}
                value={bookmarkName}
              ></BookmarkNameInput>
            </BookmarkNameDiv>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <ModalHeading>
                  <ModalName>SELECT FOLDER</ModalName>
                </ModalHeading>

                {folders.length != 0 ? (
                  folders.map((folder: any) => {
                    return (
                      <AllFolders key={folder.id}>
                        <SelectFolder
                          onClick={() => {
                            setFolderId(folder.id);
                            setOpen(false);
                          }}
                        >
                          <FolderIcon />
                          <FolderName>{folder.name}</FolderName>
                        </SelectFolder>
                      </AllFolders>
                    );
                  })
                ) : (
                  <p>No Selected Folder</p>
                )}
              </Box>
            </Modal>

            <FolderNameButton
              placeholder="folder name"
              id="rootBtn"
              onClick={openFolderModal}
            >
              {folderName === "" ? "no folder selected" : folderName}
            </FolderNameButton>
            <QuickLinkButton id="saveBtn" onClick={handleBookmark}>
              Save
            </QuickLinkButton>
          </QuickLinkButtonsDiv>
        </QuickLinkDiv1>

        <QuickLinkDiv2>
          <img
            src={QuickLinkImg}
            style={{ width: "70%", marginTop: "5%", marginLeft: "15%" }}
          />
        </QuickLinkDiv2>
      </QuickLink>
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createBookmark: (obj: any) => dispatch(createBookmarksRequest(obj)),
  };
};

export default connect(null, mapDispatchToProps)(Bookmark);
