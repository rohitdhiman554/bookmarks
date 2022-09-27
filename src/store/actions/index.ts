import { LOGIN } from "../../utils/routeConstants";
import {
  CREATE_BOOKMARKS_REQUEST,
  CREATE_FOLDER_REQUEST,
  DELETE_FOLDER_REQUEST,
  GET_ALL_FOLDERS_REQUEST,
  RENAME_FOLDER_REQUEST,
  SIGNUP,
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
    type: SIGNUP,
    payload: data,
  };
};

export const userLogin = (data: LoginState) => {
  return {
    type: LOGIN,
    payload: data,
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
    payload: {
      obj: obj,
    },
  };
};

export const createBookmarksRequest = (obj: any) => {
  return {
    type: CREATE_BOOKMARKS_REQUEST,
    payload: obj,
  };
};

export const deleteBookmarkRequest = (obj: any) => {
  return {
    type: DELETE_FOLDER_REQUEST,
    payload: obj,
  };
};
