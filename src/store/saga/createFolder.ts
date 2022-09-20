import { put } from "redux-saga/effects";
import { CREATE_FOLDER_FAILURE, CREATE_FOLDER_SUCCESS } from "../actionsTypes";
import { sendRequest } from "./service";

export function* createFolder(action: any): any {
  try {
    let data = action.payload;

    let response = yield sendRequest("POST", "folder", {
      name: data,
    });

    yield put({ type: CREATE_FOLDER_SUCCESS, response });
  } catch (error) {
    yield put({ type: CREATE_FOLDER_FAILURE, error });
  }
}
