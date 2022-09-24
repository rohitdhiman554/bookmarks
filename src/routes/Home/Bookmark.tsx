import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { folderReducer } from "../../store/reducer/Folders/index";
import { Dispatch } from "redux";
import {
  createBookmarksRequest,
  deleteBookmarkRequest,
} from "../../store/actions";

type BookmarksType = {
  createBookmark: (obj: any) => void;
  deleteBookmark: (id: string) => void;
  id: string;
  name: string;
};

const Bookmark = (props: BookmarksType) => {
  const [url, setUrl] = useState("");

  const addUrl = (e: any) => {
    setUrl(e.target.value);
  };
  const handleBookmark = () => {
    let obj = {
      url: url,
      name: props.name,
    };
    setUrl("");
    props.createBookmark(obj);
  };

  const handleDeleteBookmark = () => {
    props.deleteBookmark(props.id);
  };

  return (
    <>
      Create Bookmarks
      <input type="text" placeholder="Enter Url" onChange={addUrl}></input>
      <button onClick={handleBookmark}>Add Bookmark</button>
      <button onClick={handleDeleteBookmark}>Delete Bookmark</button>
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createBookmark: (obj: any) => dispatch(createBookmarksRequest(obj)),
    deleteBookmark: (id: any) => dispatch(deleteBookmarkRequest(id)),
  };
};

export default connect(null, mapDispatchToProps)(Bookmark);
