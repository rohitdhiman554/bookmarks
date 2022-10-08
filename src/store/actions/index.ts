import { LOGIN } from "../../utils/routeConstants";
import {
  CREATE_BOOKMARKS_REQUEST,
  CREATE_FOLDER_REQUEST,
  DELETE_BOOKMARKS_REQUEST,
  DELETE_FOLDER_REQUEST,
  FAVORITE_REQUEST,
  GET_ALL_FOLDERS_REQUEST,
  GET_BOOKMARK_REQUEST,
  GET_ME_REQUEST,
  LOGIN_REQUEST,
  MOVE_BOOKMARK_REQUEST,
  RENAME_FOLDER_REQUEST,
  SEARCH_FOLDER,
  SHOW_FAVORITE,
  REGISTRATION_SUCCESS,
  TOGGLE_VIEW,
  REGISTRATION_REQUEST,
} from "../actionsTypes";

export type inputState = {
  name: string;
  email: string;
  password: string;
};

export type LoginState = {
  email: string;
  password: string;
};

export const userSignUp = (data: inputState) => {
  return {
    type: REGISTRATION_REQUEST,
    payload: data,
  };
};

export const userLogin = (data: LoginState) => {
  return {
    type: LOGIN_REQUEST,
    payload: data,
  };
};

export const userLoginRequest = () => {
  return {
    type: GET_ME_REQUEST,
  };
};

export const createNewFolder = (name: string) => {
  return {
    type: CREATE_FOLDER_REQUEST,
    payload: name,
  };
};

export const getFolder = () => {
  return {
    type: GET_ALL_FOLDERS_REQUEST,
  };
};

export const renameFolderRequest = (obj: any) => {
  return {
    type: RENAME_FOLDER_REQUEST,
    payload: {
      folderId: obj.folderId,
      name: obj.name,
    },
  };
};

export const deleteFolderRequest = (obj: string) => {
  return {
    type: DELETE_FOLDER_REQUEST,
    payload: obj,
  };
};

export const createBookmarksRequest = (obj: any) => {
  return {
    type: CREATE_BOOKMARKS_REQUEST,
    payload: obj,
  };
};

export const deleteBookmarkRequest = (id: any) => {
  return {
    type: DELETE_BOOKMARKS_REQUEST,
    payload: {
      id: id,
    },
  };
};

export const getBookmarkRequest = (id: string, name: string) => {
  return {
    type: GET_BOOKMARK_REQUEST,
    payload: {
      id: id,
      name: name,
    },
  };
};

export const searchFolderRequest = (name: string) => {
  return {
    type: SEARCH_FOLDER,
    payload: name,
  };
};

export const favoriteRequest = (id: string) => {
  return {
    type: FAVORITE_REQUEST,
    payload: {
      id: id,
    },
  };
};

export const moveBookmarkRequest = (folderId: string, bookmarkId: string) => {
  return {
    type: MOVE_BOOKMARK_REQUEST,
    payload: {
      folderId: folderId,
      bookmarkId: bookmarkId,
    },
  };
};

export const showFavoriteRequest = () => {
  return {
    type: SHOW_FAVORITE,
  };
};

export const toggleView = () => {
  return {
    type: TOGGLE_VIEW,
  };
};
