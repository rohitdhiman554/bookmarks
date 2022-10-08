import { put } from "redux-saga/effects";
import { sendRequest } from "./service";

import { GET_BOOKMARK_FAILURE, GET_BOOKMARK_SUCCESS } from "../actionsTypes";

function* getBookmarks(action: any): any {
  try {
    let obj = {
      folderId: action.payload.id,
    };
    const url = `folder-bookmarks?folderId=${action.payload.id}`;
    let response = yield sendRequest("GET", url, obj);

    yield put({
      type: GET_BOOKMARK_SUCCESS,
      payload: response,
    });
  } catch (error: any) {
    yield put({
      type: GET_BOOKMARK_FAILURE,
      payload: {
        error: error.message,
      },
    });
  }
}

export default getBookmarks;
