import { takeEvery, put } from "redux-saga/effects";
import { userRequestFailure, userRequestSuccess } from "../actions/userAction";
import { USER_FETCH_REQUEST } from "../actionsTypes";

function* fetchUser(): any {
  try {
    let data = yield fetch("https://api.github.com/users");
    data = yield data.json();

    yield put(userRequestSuccess(data));
  } catch (error) {
    yield put(userRequestFailure());
  }
}

function* UserSaga() {
  yield takeEvery(USER_FETCH_REQUEST, fetchUser);
}

export default UserSaga;
