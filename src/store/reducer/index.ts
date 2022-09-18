import { combineReducers } from "redux";
import userAuth from "./userAuth";
import userList from "./Users";

export default combineReducers({
  userAuth,
  userList,
});
