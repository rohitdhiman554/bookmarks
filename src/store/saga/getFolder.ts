import { put } from "redux-saga/effects";
import { sendRequest } from "./service";

import {
  GET_ALL_FOLDERS_FAILURE,
  GET_ALL_FOLDERS_SUCCESS,
} from "../actionsTypes";

export function* getFolder(): any {
  if (localStorage.getItem("auth")) {
    try {
      let response = yield sendRequest("GET", "folders", {});
      yield put({
        type: GET_ALL_FOLDERS_SUCCESS,
        payload: { folders: response },
      });
    } catch (error) {
      yield put({ type: GET_ALL_FOLDERS_FAILURE, payload: { error: error } });
    }
  }
}
