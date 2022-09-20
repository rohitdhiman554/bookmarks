import { put } from "redux-saga/effects";
import { REGISTRATION_FAIL, REGISTRATION_SUCCESS } from "../actionsTypes";
import { sendRequest } from "./service";

export function* getRegistrationDetails(action: any): any {
  try {
    let data = action.payload;
    let response = yield sendRequest("POST", "register", {
      name: data.name,
      email: data.email,
      password: data.password,
    });

    if ("token" in response) {
      yield put({ type: REGISTRATION_SUCCESS, response });
      localStorage.setItem("auth", response.token);
    }
  } catch (error) {
    yield put({ type: REGISTRATION_FAIL });
  }
}
