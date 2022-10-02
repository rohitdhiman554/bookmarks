import {
  CREATE_BOOKMARKS_REQUEST,
  CREATE_BOOKMARK_SUCCESS,
  CREATE_FOLDER_FAILURE,
  CREATE_FOLDER_REQUEST,
  CREATE_FOLDER_SUCCESS,
  DELETE_FOLDER_SUCCESS,
  GET_ALL_FOLDERS_FAILURE,
  GET_ALL_FOLDERS_REQUEST,
  GET_ALL_FOLDERS_SUCCESS,
  GET_BOOKMARK_REQUEST,
  GET_BOOKMARK_SUCCESS,
  RENAME_FOLDER_FAILURE,
  RENAME_FOLDER_SUCCESS,
} from "../../actionsTypes";
import { folderReducerActions } from "./type";

interface FolderState {
  folders: [];
  bookmarks: [];
  bookmarkSpinner: boolean;
  folderSpinner: boolean;
  error: any;
}

const initialState: FolderState = {
  folders: [],
  bookmarks: [],
  folderSpinner: false,
  bookmarkSpinner: false,
  error: "",
};

export const folderReducer = (
  state = initialState,
  action: folderReducerActions
) => {
  switch (action.type) {
    case CREATE_FOLDER_REQUEST:
      return {
        ...state,
        folderSpinner: true,
      };

    case CREATE_FOLDER_SUCCESS:
      return {
        ...state,
        folders: [...state.folders, action.payload.folder],
        folderSpinner: false,
      };

    case CREATE_FOLDER_FAILURE:
      console.log(action);
      return {
        ...state,
        error: action.payload.error,
      };

    case GET_ALL_FOLDERS_REQUEST:
      return {
        ...state,
        folderSpinner: true,
      };

    case GET_ALL_FOLDERS_SUCCESS:
      return {
        ...state,
        folders: action.payload.folders,
        folderSpinner: false,
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

    case CREATE_BOOKMARKS_REQUEST:
      return {
        ...state,
        bookmarkSpinner: true,
      };

    case CREATE_BOOKMARK_SUCCESS:
      return {
        ...state,
        bookmarks: [
          ...state.bookmarks,
          { name: action.payload.name, url: action.payload.url },
        ],
        bookmarkSpinner: false,
      };

    case GET_BOOKMARK_REQUEST: {
      return {
        ...state,
        bookmarkSpinner: true,
      };
    }

    case GET_BOOKMARK_SUCCESS:
      return {
        ...state,
        bookmarks: action.payload,
        bookmarkSpinner: false,
      };

    default:
      return state;
  }
};
