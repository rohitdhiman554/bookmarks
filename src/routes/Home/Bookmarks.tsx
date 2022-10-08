import React, { useState } from "react";
import { Box, CardContent, Menu, MenuItem, Modal } from "@mui/material";
import { FaEllipsisV } from "react-icons/fa";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { useReducerState } from "../../hooks";
import {
  AllFolders,
  CardDiscription,
  CardHeading,
  CardImageDiv,
  CardTitle,
  FavoriteLoader,
  FilledHeartIcon,
  Folder,
  FolderIcon,
  FolderName,
  HeartIcon,
  ModalHeading,
  ModalLoader,
  ModalName,
  SelectFolder,
  StyledCard,
  VerticalCardContent,
  VerticalCardDiscription,
  VerticalCardImage,
  VerticalMenuItems,
  VerticalStyledCard,
} from "./style";

import { deleteBookmarkRequest, favoriteRequest } from "../../store/actions";
import DefaultImage from "../../components/assets/defaultBookmark.svg";
import { ClipLoader } from "react-spinners";
import {
  FaPencilAlt,
  FaTrash,
  FaHeart,
  FaRegHeart,
  FaRegFile,
} from "react-icons/fa";

type BookmarkType = {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  isFavorite: boolean;
  folderId: (folderId: string, bookmarkId: string) => void;
  deleteBookmark: (id: string) => void;
  toggleFavorite: (id: string) => void;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 150,
  bgcolor: "background.paper",
  border: "2px solid #000",

  p: 4,
};
const Bookmarks = (props: BookmarkType) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [modal, setModal] = useState(false);
  const {
    bookmarks,
    folders,
    deleteSpinner,
    Loading,
    favoriteSpinner,
    processing,
    favId,
    vertical,
  } = useReducerState();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openModal = () => {
    setModal(true);
    setAnchorEl(null);
  };

  const closeModal = () => {};

  const handleDelete = (id: string) => {
    props.deleteBookmark(id);
    setAnchorEl(null);
  };

  return (
    <>
      <Modal open={processing === true ? true : modal}>
        {processing === true ? (
          <ClipLoader />
        ) : (
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
                        props.folderId(folder.id, props.id);
                        setModal(false);
                      }}
                    >
                      <FolderIcon />
                      <FolderName
                        onClick={() => {
                          setModal(false);
                        }}
                      >
                        {folder.name}
                      </FolderName>
                    </SelectFolder>
                  </AllFolders>
                );
              })
            ) : (
              <p>No Selected Folder</p>
            )}
          </Box>
        )}
      </Modal>

      {vertical === false ? (
        <StyledCard sx={{ boxShadow: 20, padding: 0 }}>
          <CardImageDiv>
            {props.imageUrl === "" ? (
              <img
                src={DefaultImage}
                style={{ width: "100%", height: "100%", borderRadius: "1em" }}
              />
            ) : (
              <img
                src={props.imageUrl}
                style={{ width: "100%", height: "100%", borderRadius: "1em" }}
              />
            )}
          </CardImageDiv>

          <CardContent>
            <CardTitle>
              <CardHeading>{props.name}</CardHeading>
              <FaEllipsisV
                style={{ marginTop: "1.2%", color: " #9D9B9F" }}
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
                <MenuItem onClick={openModal}>Move</MenuItem>
                <MenuItem
                  onClick={() => {
                    handleDelete(props.id);
                  }}
                >
                  Delete{" "}
                  {deleteSpinner ? (
                    <ModalLoader>
                      <ClipLoader size={10} />
                    </ModalLoader>
                  ) : (
                    ""
                  )}
                </MenuItem>
              </Menu>
            </CardTitle>
            <CardDiscription>
              {props.description === "" ? (
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Harum labore esse dolorem repellendus saepe dolor, nihil
                  suscipit voluptas soluta? Consequatur hic in explicabo
                  quisquam inventore veniam ratione aut fugit amet!
                </p>
              ) : (
                props.description
              )}
            </CardDiscription>
          </CardContent>

          {props.isFavorite ? (
            <FilledHeartIcon onClick={() => props.toggleFavorite(props.id)} />
          ) : (
            <HeartIcon onClick={() => props.toggleFavorite(props.id)} />
          )}
        </StyledCard>
      ) : (
        <VerticalStyledCard>
          <VerticalCardImage>
            {props.imageUrl === "" ? (
              <img
                src={DefaultImage}
                style={{ width: "100%", height: "100%", borderRadius: "1em" }}
              />
            ) : (
              <img
                src={props.imageUrl}
                style={{ width: "100%", height: "100%", borderRadius: "1em" }}
              />
            )}
          </VerticalCardImage>
          <CardContent>
            <CardTitle>
              <CardHeading>{props.name}</CardHeading>
            </CardTitle>

            <VerticalCardContent>
              <VerticalCardDiscription>
                {props.description === "" ? (
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Harum labore esse dolorem repellendus saepe dolor, nihil
                    suscipit voluptas soluta? Consequatur hic in explicabo
                    quisquam inventore veniam ratione aut fugit amet!
                  </p>
                ) : (
                  props.description
                )}
              </VerticalCardDiscription>

              <VerticalMenuItems>
                {props.isFavorite ? (
                  <FaHeart onClick={() => props.toggleFavorite(props.id)} />
                ) : (
                  <FaRegHeart onClick={() => props.toggleFavorite(props.id)} />
                )}
                <FaRegFile onClick={openModal} />
                <FaPencilAlt />

                <FaTrash
                  onClick={() => {
                    handleDelete(props.id);
                  }}
                />
              </VerticalMenuItems>
            </VerticalCardContent>
          </CardContent>
        </VerticalStyledCard>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    deleteBookmark: (id: string) => dispatch(deleteBookmarkRequest(id)),
    toggleFavorite: (id: string) => dispatch(favoriteRequest(id)),
  };
};

export default connect(null, mapDispatchToProps)(Bookmarks);
