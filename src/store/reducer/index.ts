import { combineReducers } from "redux";
import userAuth from "./userAuth";
import products from "./Products";

export default combineReducers({
  userAuth,
  products,
});
