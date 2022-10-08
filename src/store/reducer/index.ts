import { combineReducers } from "redux";
import userAuth from "./userAuth";

import { folderReducer } from "./Folders";

export default combineReducers({
  userAuth,
  folderReducer,
});
