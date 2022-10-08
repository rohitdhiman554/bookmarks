import { put } from "redux-saga/effects";
import { MOVE_BOOKMARK_FAILURE, MOVE_BOOKMARK_SUCCESS } from "../actionsTypes";
import { sendRequest } from "./service";

export function* moveBookmark(action: any) {
  try {
    sendRequest("PATCH", "move-bookmark", {
      folderId: action.payload.folderId,
      bookmarkId: action.payload.bookmarkId,
    });
    yield put({
      type: MOVE_BOOKMARK_SUCCESS,
      payload: {
        id: action.payload.bookmarkId,
      },
    });
  } catch (error: any) {
    yield put({
      type: MOVE_BOOKMARK_FAILURE,
      payload: {
        error: error.messsage,
      },
    });
  }
}
