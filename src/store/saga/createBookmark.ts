import { put } from "redux-saga/effects";
import {
  CREATE_BOOKMARKS_FAILURE,
  CREATE_BOOKMARK_SUCCESS,
} from "../actionsTypes";
import { sendRequest } from "./service";

export function* createBookmark(action: any): any {
  let data = action.payload;

  try {
    let response = yield sendRequest("POST", "bookmark", {
      url: data.url,
      name: data.name,
    });

    yield put({ type: CREATE_BOOKMARK_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: CREATE_BOOKMARKS_FAILURE, payload: error });
  }
}
