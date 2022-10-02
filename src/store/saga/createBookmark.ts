import { put } from "redux-saga/effects";
import { sendRequest } from "./service";

import {
  CREATE_BOOKMARKS_FAILURE,
  CREATE_BOOKMARK_SUCCESS,
} from "../actionsTypes";

export function* createBookmark(action: any): any {
  let data = action.payload;

  try {
    let response = yield sendRequest("POST", "bookmark", {
      url: data.url,
      name: data.name,
    });

    yield sendRequest("PATCH", "move-bookmark", {
      folderId: data.folderId,
      bookmarkId: response.id,
    });

    yield put({
      type: CREATE_BOOKMARK_SUCCESS,
      payload: {
        url: response.url,
        name: response.name,
      },
    });
  } catch (error) {
    yield put({ type: CREATE_BOOKMARKS_FAILURE, payload: error });
  }
}
