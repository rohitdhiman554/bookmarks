import { put } from "redux-saga/effects";
import {
  ADD_TO_FAVORITE,
  FAVORITE_FAILURE,
  FAVORITE_SUCCESS,
  REMOVE_FROM_FAVORITE,
} from "../actionsTypes";
import { sendRequest } from "./service";

export function* toggleFavorite(action: any): any {
  try {
    let obj = {
      bookmarkId: action.payload.id,
    };

    let response = yield sendRequest("PUT", "toggle-favorite", obj);

    yield put({
      type: FAVORITE_SUCCESS,
      payload: {
        response: response,
      },
    });
    if (response.isFavorite === true) {
      yield put({
        type: ADD_TO_FAVORITE,
        payload: {
          bookmark: response,
        },
      });
    } else {
      yield put({
        type: REMOVE_FROM_FAVORITE,
        payload: {
          id: response.id,
        },
      });
    }
  } catch (error) {
    yield put({ type: FAVORITE_FAILURE });
  }
}
