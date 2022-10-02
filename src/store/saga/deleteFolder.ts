import { put } from "redux-saga/effects";
import { sendRequest } from "./service";

import { DELETE_FOLDER_FAILURE, DELETE_FOLDER_SUCCESS } from "../actionsTypes";

export function* deleteFolder(action: any): any {
  let data = action.payload.obj;

  try {
    yield sendRequest("DELETE", "folder", data);

    yield put({
      type: DELETE_FOLDER_SUCCESS,
      payload: { folderId: data.folderId },
    });
  } catch (error) {
    yield put({ type: DELETE_FOLDER_FAILURE, error });
  }
}
