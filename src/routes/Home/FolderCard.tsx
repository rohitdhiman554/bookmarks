import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";
import { string } from "yup";
import { deleteFolderRequest, renameFolderRequest } from "../../store/actions";
import Bookmark from "./Bookmark";

interface FolderCardType {
  key: string;
  id: string;
  name: string;
  renameFolder: (obj: any) => void;
  deleteFolder: (obj: any) => void;
}

const FolderDiv = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
`;

const FolderName = styled.div`
  text-align: center;
`;

const FolderRename = styled.div``;

const FolderEdit = styled.div``;

const FolderCard = (props: FolderCardType) => {
  const [rename, setRename] = useState("");

  const handleEdit = () => {
    let obj = { folderId: props.id, name: rename };
    setRename("");
    props.renameFolder(obj);
  };

  const handleDelete = () => {
    let obj = { bookmarkId: props.id };
    props.deleteFolder(obj);
  };
  return (
    <>
      <FolderDiv>
        <FolderName>{props.name}</FolderName>

        <FolderRename>
          <input
            type="text"
            value={rename}
            onChange={(e) => setRename(e.target.value)}
          ></input>
        </FolderRename>

        <FolderEdit>
          <button onClick={handleEdit}>Rename Folder</button>
          <button onClick={handleDelete}>Delete Folder </button>
        </FolderEdit>
      </FolderDiv>
      <div>
        <Bookmark id={props.id} name={props.name}></Bookmark>
      </div>
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
