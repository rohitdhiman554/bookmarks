import { put } from "redux-saga/effects";
import { sendRequest } from "./service";

import {
  CREATE_BOOKMARKS_FAILURE,
  CREATE_BOOKMARKS_SUCCESS,
  MOVE_BOOKMARK_REQUEST,
  MOVE_BOOKMARK_SUCCESS,
} from "../actionsTypes";

export function* createBookmark(action: any): any {
  let data = action.payload;

  try {
    let response = yield sendRequest("POST", "bookmark", {
      url: data.url,
      name: data.name,
    });

    let response2 = yield sendRequest("PATCH", "move-bookmark", {
      folderId: data.folderId,
      bookmarkId: response.id,
    });

    yield put({
      type: CREATE_BOOKMARKS_SUCCESS,
      payload: {
        folderId: response2.folder.id,
        response: response,
      },
    });
  } catch (error) {
    yield put({ type: CREATE_BOOKMARKS_FAILURE, payload: error });
  }
}
