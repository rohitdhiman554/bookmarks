import { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { createNewFolder, getFolder } from "../../store/actions";

type DashBoardState = {
  createFolder: (name: string) => void;
  getAllFolders: () => void;
};

const Home = (props: DashBoardState) => {
  const [folder, setFolder] = useState("");

  const createNewFolder = (e: any) => {
    setFolder(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={createNewFolder} />
      <button
        onClick={() => {
          props.createFolder(folder);
        }}
      >
        Create Folder
      </button>
      <button
        onClick={() => {
          props.getAllFolders();
        }}
      >
        Get Folders
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createFolder: (name: string) => dispatch(createNewFolder(name)),
    getAllFolders: () => dispatch(getFolder()),
  };
};

export default connect(null, mapDispatchToProps)(Home);
