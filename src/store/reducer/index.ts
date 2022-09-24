import { combineReducers } from "redux";
import userAuth from "./userAuth";
import products from "./Products";
import { folderReducer } from "./Folders";

export default combineReducers({
  userAuth,
  products,
  folderReducer,
});
