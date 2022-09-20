import { takeEvery, put } from "redux-saga/effects";
import { LOGIN } from "../../utils/routeConstants";
import {
  CREATE_FOLDER_REQUEST,
  GET_ALL_FOLDERS_REQUEST,
  SIGNUP,
} from "../actionsTypes";
import { createFolder } from "./createFolder";
import { getFolder } from "./getFolder";
import { getLoginDetails } from "./login";
import { getRegistrationDetails } from "./register";

function* productSaga() {
  yield takeEvery(SIGNUP, getRegistrationDetails);
  yield takeEvery(LOGIN, getLoginDetails);
  yield takeEvery(CREATE_FOLDER_REQUEST, createFolder);
  yield takeEvery(GET_ALL_FOLDERS_REQUEST, getFolder);
}

export default productSaga;
