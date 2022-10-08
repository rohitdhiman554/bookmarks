import { put } from "redux-saga/effects";
import { sendRequest } from "./service";

import { GET_ME_FAILURE, GET_ME_SUCCESS } from "../actionsTypes";

export function* getUser(): any {
  try {
    let response = yield sendRequest("GET", "me", {});

    yield put({ type: GET_ME_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: GET_ME_FAILURE, payload: error });
  }
}
