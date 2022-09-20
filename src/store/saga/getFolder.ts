import { put } from "redux-saga/effects";
import {
  GET_ALL_FOLDERS_FAILURE,
  GET_ALL_FOLDERS_SUCCESS,
} from "../actionsTypes";
import { sendRequest } from "./service";

export function* getFolder(): any {
  if (localStorage.getItem("auth")) {
    try {
      let response = yield sendRequest("GET", "folders", {});
      yield put({ type: GET_ALL_FOLDERS_SUCCESS, response });
    } catch (error) {
      yield put({ type: GET_ALL_FOLDERS_FAILURE, error });
    }
  }
}
