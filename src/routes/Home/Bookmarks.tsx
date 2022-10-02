import React from "react";
import { CardContent, Menu, MenuItem } from "@mui/material";
import styled from "styled-components";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { SyncLoader } from "react-spinners";

import { useGlobalState } from "../../hooks";
import {
  BookmarkCard,
  CardDiscription,
  CardHeading,
  CardImage,
  CardTitle,
  StyledCard,
} from "./style";
import { deleteBookmarkRequest } from "../../store/actions";
import DefaultImage from "../../components/assets/defaultBookmark.svg";

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
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type BookmarkType = {
  deleteBookmark: (id: string) => void;
};
const Bookmarks = (props: BookmarkType) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { bookmarks, bookmarkSpinner } = useGlobalState();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const openModal = () => {
    setAnchorEl(null);
  };
  const closeModal = () => {};

  const handleDelete = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <BookmarkCard>
        {bookmarkSpinner === true ? (
          <BookmarkSpinnerDiv>
            <SyncLoader />
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
            ) : (
              bookmarks.map((bookmark: any) => {
                return (
                  <StyledCard key={bookmark.id} sx={{ maxWidth: 345 }}>
                    {bookmark.imageUrl === "" ? (
                      <CardImage src={DefaultImage} />
                    ) : (
                      <CardImage src={bookmark.imageUrl} />
                    )}

                    <CardContent>
                      <CardTitle>
                        <CardHeading>{bookmark.name}</CardHeading>
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
                          <MenuItem onClick={openModal}>Rename</MenuItem>
                          <MenuItem onClick={handleClose}>Sub Folder</MenuItem>
                          <MenuItem onClick={handleDelete}>Delete</MenuItem>
                        </Menu>
                      </CardTitle>

                      <CardDiscription>{bookmark.description}</CardDiscription>
                    </CardContent>
                  </StyledCard>
                );
              })
            )}
          </>
        )}
      </BookmarkCard>
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    deleteBookmark: (id: string) => dispatch(deleteBookmarkRequest(id)),
  };
};

export default connect(null, mapDispatchToProps)(Bookmarks);
