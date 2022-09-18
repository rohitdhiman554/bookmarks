import {
  USER_FETCH_REQUEST,
  USER_REQUEST_FAILURE,
  USER_REQUEST_SUCCESS,
} from "../../actionsTypes";
import { Actions } from "./type";
import { UserType } from "../../actions/userAction";

interface UsersState {
  users: UserType;
  spinner: boolean;
}

const initialState: UsersState = {
  users: [],
  spinner: true,
};

const userList = (state = initialState, action: Actions) => {
  switch (action.type) {
    case USER_FETCH_REQUEST:
      return {
        ...state,
        spinner: true,
      };

    case USER_REQUEST_SUCCESS:
      return {
        ...state,
        users: action.payload,
        spinner: false,
      };

    case USER_REQUEST_FAILURE:
      return {
        ...state,
        spinner: false,
      };
    default:
      return state;
  }
};
export default userList;
