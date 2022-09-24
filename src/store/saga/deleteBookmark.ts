import { put } from "redux-saga/effects";
import {
  DELETE_BOOKMARKS_FAILURE,
  DELETE_BOOKMARKS_SUCCESS,
} from "../actionsTypes";
import { sendRequest } from "./service";

export function* deleteBookmark(action: any): any {
  let data = action.payload;
  try {
    let response = yield sendRequest("DELETE", "bookmark", {
      bookmarkId: data.id,
    });
    yield put({ type: DELETE_BOOKMARKS_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: DELETE_BOOKMARKS_FAILURE, payload: error });
  }
}
