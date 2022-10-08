import {
  CREATE_BOOKMARKS_REQUEST,
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
  DELETE_BOOKMARKS_SUCCESS,
  SEARCH_FOLDER,
  FAVORITE_SUCCESS,
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  SHOW_FAVORITE,
  MOVE_BOOKMARK_SUCCESS,
  RENAME_FOLDER_REQUEST,
  GET_BOOKMARK_FAILURE,
  DELETE_FOLDER_REQUEST,
  DELETE_FOLDER_FAILURE,
  MOVE_BOOKMARK_REQUEST,
  MOVE_BOOKMARK_FAILURE,
  DELETE_BOOKMARKS_REQUEST,
  DELETE_BOOKMARKS_FAILURE,
  FAVORITE_REQUEST,
  TOGGLE_VIEW,
  FAVORITE_FAILURE,
  CREATE_BOOKMARKS_FAILURE,
  CREATE_BOOKMARKS_SUCCESS,
} from "../../actionsTypes";
import { folderReducerActions } from "./type";

interface FolderState {
  folders: [];
  bookmarks: [];
  searchFolder: [];
  favorites: [];
  activeFolder: boolean;
  bookmarkSpinner: boolean;
  Loading: boolean;
  folderName: string;
  folderSpinner: boolean;
  getFoldersSpinner: boolean;
  processing: boolean;
  deleteSpinner: boolean;
  folderId: string;
  favoriteSpinner: boolean;
  error: any;
  vertical: boolean;
  favId: string;
}

const initialState: FolderState = {
  folders: [],
  bookmarks: [],
  searchFolder: [],
  favorites: [],
  folderSpinner: false,
  folderName: "",
  activeFolder: false,
  bookmarkSpinner: false,
  favoriteSpinner: false,
  Loading: false,
  processing: false,
  getFoldersSpinner: false,
  folderId: "",
  deleteSpinner: false,
  error: "",
  vertical: false,
  favId: "",
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
      return {
        ...state,
        error: action.payload.error,
        folderSpinner: false,
      };

    case GET_ALL_FOLDERS_REQUEST:
      return {
        ...state,
        getFoldersSpinner: true,
      };

    case GET_ALL_FOLDERS_SUCCESS:
      return {
        ...state,
        folders: action.payload.folders,
        getFoldersSpinner: false,
      };

    case GET_ALL_FOLDERS_FAILURE:
      return {
        ...state,
        getFoldersSpinner: false,
      };

    case RENAME_FOLDER_REQUEST:
      return {
        ...state,
        Loading: true,
      };

    case RENAME_FOLDER_SUCCESS:
      return {
        ...state,
        folders: [
          ...state.folders.map((folder: any) => {
            if (folder.id === action.response.id) {
              return { ...folder, name: action.response.name };
            } else return { ...folder };
          }),
        ],
        Loading: false,
      };

    case RENAME_FOLDER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        Loading: false,
      };

    case DELETE_FOLDER_REQUEST:
      return {
        ...state,
        deleteSpinner: true,
      };

    case DELETE_FOLDER_SUCCESS:
      return {
        ...state,
        folders: [
          ...state.folders.filter((folder: any) => {
            return folder.id != action.payload.folderId;
          }),
        ],
        deleteSpinner: false,
      };

    case DELETE_FOLDER_FAILURE:
      return {
        ...state,
        deleteSpinner: false,
      };

    case CREATE_BOOKMARKS_REQUEST:
      return {
        ...state,
        bookmarkSpinner: true,
      };

    case CREATE_BOOKMARKS_SUCCESS:
      return {
        ...state,
        bookmarkSpinner: false,
        bookmarks: [...state.bookmarks, action.payload.response],
      };

    case CREATE_BOOKMARKS_FAILURE:
      return {
        ...state,
        bookmarkSpinner: false,
      };

    case GET_BOOKMARK_REQUEST:
      return {
        ...state,
        bookmarkSpinner: true,
        folderId: action.payload.id,
        folderName: action.payload.name,
      };

    case GET_BOOKMARK_SUCCESS:
      return {
        ...state,
        bookmarks: action.payload,
        bookmarkSpinner: false,
      };

    case GET_BOOKMARK_FAILURE:
      return {
        ...state,
        bookmarkSpinner: false,
      };

    case DELETE_BOOKMARKS_REQUEST:
      return {
        ...state,
        deleteSpinner: true,
      };

    case DELETE_BOOKMARKS_SUCCESS:
      return {
        ...state,
        bookmarks: [
          ...state.bookmarks.filter((bookmark: any) => {
            return bookmark.id !== action.payload.id;
          }),
        ],
        deleteSpinner: false,
      };

    case DELETE_BOOKMARKS_FAILURE:
      return {
        ...state,
        deleteSpinner: false,
      };

    case SEARCH_FOLDER:
      return {
        ...state,
        searchFolder: state.folders,
        folders: state.folders.filter(
          (folder: any) => folder.name === action.payload
        ),
      };

    case FAVORITE_REQUEST:
      return {
        ...state,
        favId: action.payload.id,
        processing: true,
      };

    case FAVORITE_SUCCESS:
      return {
        ...state,
        bookmarks: [
          ...state.bookmarks.map((bookmark: any) => {
            if (bookmark.id === action.payload.response.id) {
              return {
                ...bookmark,
                isFavorite: action.payload.response.isFavorite,
              };
            }
            return { ...bookmark };
          }),
        ],
        processing: false,
      };

    case FAVORITE_FAILURE:
      return {
        ...state,
        processing: false,
      };

    case ADD_TO_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload.bookmark],
      };

    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favorites: [
          ...state.bookmarks.filter((bookmark: any) => {
            return bookmark.id != action.payload.id;
          }),
        ],
      };

    case SHOW_FAVORITE:
      return {
        ...state,
        bookmarks: state.favorites,
      };

    case MOVE_BOOKMARK_REQUEST:
      return {
        ...state,
        processing: true,
      };

    case MOVE_BOOKMARK_SUCCESS:
      return {
        ...state,
        bookmarks: [
          ...state.bookmarks.filter((bookmark: any) => {
            return bookmark.id !== action.payload.id;
          }),
        ],
        processing: false,
      };

    case MOVE_BOOKMARK_FAILURE:
      return {
        ...state,
        processing: false,
      };

    case TOGGLE_VIEW:
      return {
        ...state,
        vertical: !state.vertical,
      };
    default:
      return state;
  }
};
