import { takeEvery } from "redux-saga/effects";

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
  REGISTRATION_REQUEST,
  RENAME_FOLDER_REQUEST,
} from "../actionsTypes";
import { createBookmark } from "./createBookmark";
import { createFolder } from "./createFolder";
import { deleteBookmark } from "./deleteBookmark";
import { deleteFolder } from "./deleteFolder";
import getBookmarks from "./getBookmark";

import { getFolder } from "./getFolder";
import { getUser } from "./getMe";
import { getLoginDetails } from "./login";
import { moveBookmark } from "./moveBookmark";
import { getRegistrationDetails } from "./register";
import { renameFolder } from "./renameFolder";
import { toggleFavorite } from "./toggleFavorite";

function* productSaga() {
  yield takeEvery(REGISTRATION_REQUEST, getRegistrationDetails);
  yield takeEvery(LOGIN_REQUEST, getLoginDetails);
  yield takeEvery(GET_ME_REQUEST, getUser);
  yield takeEvery(CREATE_FOLDER_REQUEST, createFolder);
  yield takeEvery(GET_ALL_FOLDERS_REQUEST, getFolder);
  yield takeEvery(RENAME_FOLDER_REQUEST, renameFolder);
  yield takeEvery(DELETE_FOLDER_REQUEST, deleteFolder);
  yield takeEvery(CREATE_BOOKMARKS_REQUEST, createBookmark);
  yield takeEvery(DELETE_BOOKMARKS_REQUEST, deleteBookmark);
  yield takeEvery(GET_BOOKMARK_REQUEST, getBookmarks);
  yield takeEvery(FAVORITE_REQUEST, toggleFavorite);
  yield takeEvery(MOVE_BOOKMARK_REQUEST, moveBookmark);
}

export default productSaga;
