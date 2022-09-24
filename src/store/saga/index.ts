import { takeEvery, put } from "redux-saga/effects";
import { LOGIN } from "../../utils/routeConstants";
import {
  CREATE_BOOKMARKS_REQUEST,
  CREATE_FOLDER_REQUEST,
  DELETE_BOOKMARKS_REQUEST,
  DELETE_FOLDER_REQUEST,
  GET_ALL_FOLDERS_REQUEST,
  RENAME_FOLDER_REQUEST,
  SIGNUP,
} from "../actionsTypes";
import { createBookmark } from "./createBookmark";
import { createFolder } from "./createFolder";
import { deleteBookmark } from "./deleteBookmark";
import { deleteFolder } from "./deleteFolder";
import { getFolder } from "./getFolder";
import { getLoginDetails } from "./login";
import { getRegistrationDetails } from "./register";
import { renameFolder } from "./renameFolder";

function* productSaga() {
  yield takeEvery(SIGNUP, getRegistrationDetails);
  yield takeEvery(LOGIN, getLoginDetails);
  yield takeEvery(CREATE_FOLDER_REQUEST, createFolder);
  yield takeEvery(GET_ALL_FOLDERS_REQUEST, getFolder);
  yield takeEvery(RENAME_FOLDER_REQUEST, renameFolder);
  yield takeEvery(DELETE_FOLDER_REQUEST, deleteFolder);
  yield takeEvery(CREATE_BOOKMARKS_REQUEST, createBookmark);
  yield takeEvery(DELETE_BOOKMARKS_REQUEST, deleteBookmark);
}

export default productSaga;
