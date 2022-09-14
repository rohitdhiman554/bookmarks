import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCTLIST } from "../actionsTypes";

function* getProducts(): any {
  let data = yield fetch("https://api.github.com/users");
  data = yield data.json();
  yield put({
    type: SET_PRODUCTLIST,
    payload: {
      data: data.map((el: any) => {
        return el.login;
      }),
    },
  });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;
