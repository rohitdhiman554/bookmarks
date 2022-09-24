import {
  CREATE_FOLDER_FAILURE,
  CREATE_FOLDER_SUCCESS,
  DELETE_FOLDER_SUCCESS,
  GET_ALL_FOLDERS_FAILURE,
  GET_ALL_FOLDERS_SUCCESS,
  RENAME_FOLDER_FAILURE,
  RENAME_FOLDER_SUCCESS,
} from "../../actionsTypes";
import { folderReducerActions } from "./type";

interface FolderState {
  folders: [];
  error: any;
}

const initialState: FolderState = {
  folders: [],
  error: "",
};

export const folderReducer = (
  state = initialState,
  action: folderReducerActions
) => {
  switch (action.type) {
    case CREATE_FOLDER_SUCCESS:
      return {
        ...state,
        folders: [...state.folders, action.payload.folder],
      };

    case CREATE_FOLDER_FAILURE:
      console.log(action);
      return {
        ...state,
        error: action.payload.error,
      };

    case GET_ALL_FOLDERS_SUCCESS:
      return {
        ...state,
        folders: action.payload.folders,
      };

    case GET_ALL_FOLDERS_FAILURE:
      return {
        ...state,
      };

    case RENAME_FOLDER_SUCCESS:
      console.log(action);
      return {
        ...state,
        folders: [
          ...state.folders.map((folder: any) => {
            if (folder.id === action.response.id) {
              return { ...folder, name: action.response.name };
            } else return { ...folder };
          }),
        ],
      };

    case RENAME_FOLDER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    case DELETE_FOLDER_SUCCESS:
      return {
        ...state,
        folders: [
          ...state.folders.filter((folder: any) => {
            return folder.id != action.payload.folderId;
          }),
        ],
      };
    default:
      return state;
  }
};
