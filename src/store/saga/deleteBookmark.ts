import { put } from "redux-saga/effects";
import { sendRequest } from "./service";

import {
  DELETE_BOOKMARKS_FAILURE,
  DELETE_BOOKMARKS_SUCCESS,
} from "../actionsTypes";

export function* deleteBookmark(action: any): any {
  let data = action.payload.id;

  try {
    let response = yield sendRequest("DELETE", "bookmark", {
      bookmarkId: data,
    });

    yield put({
      type: DELETE_BOOKMARKS_SUCCESS,
      payload: {
        id: action.payload.id,
      },
    });
  } catch (error) {
    yield put({ type: DELETE_BOOKMARKS_FAILURE, payload: error });
  }
}
