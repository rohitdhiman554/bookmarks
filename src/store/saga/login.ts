import { put } from "redux-saga/effects";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../actionsTypes";
import { sendRequest } from "./service";

export function* getLoginDetails(action: any): any {
  try {
    let data = action.payload;
    let response = yield sendRequest("POST", "login", {
      email: data.email,
      password: data.password,
    });

    if ("token" in response) {
      yield put({ type: LOGIN_SUCCESS, response });
      localStorage.setItem("auth", response.token);
    }
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, error });
  }
}
