import { put } from "redux-saga/effects";
import { DELETE_FOLDER_FAILURE, DELETE_FOLDER_SUCCESS } from "../actionsTypes";
import { sendRequest } from "./service";

export function* deleteFolder(action: any): any {
  let data = action.payload.id;

  try {
    let response = yield sendRequest("DELETE", "folder", {
      folderId: data,
    });

    yield put({ type: DELETE_FOLDER_SUCCESS, payload: { folderId: data } });
  } catch (error) {
    yield put({ type: DELETE_FOLDER_FAILURE, error });
  }
}
