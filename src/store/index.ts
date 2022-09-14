import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import productSaga from "./saga";
import createSagaMiddleware from "redux-saga";
import combineReducers from "./reducer/index";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(productSaga);

export default store;
