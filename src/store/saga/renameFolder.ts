import { put } from "redux-saga/effects";
import { RENAME_FOLDER_FAILURE, RENAME_FOLDER_SUCCESS } from "../actionsTypes";
import { sendRequest } from "./service";

type RenameFolderType = {
  type: "RENAME_FOLDER_REQUEST";
  payload: {
    folderId: string;
    name: string;
  };
};

export function* renameFolder(action: RenameFolderType): any {
  let data = action.payload;
  try {
    let response = yield sendRequest("PUT", "rename-folder", {
      folderId: data.folderId,
      name: data.name,
    });

    yield put({
      type: RENAME_FOLDER_SUCCESS,
      // payload: { folderId: data.folderId, name: data.name },
      response,
    });
  } catch (error) {
    yield put({ type: RENAME_FOLDER_FAILURE, payload: { error: error } });
  }
}
