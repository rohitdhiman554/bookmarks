import { Actions } from "../userAuth/type";
import {
  CREATE_FOLDER_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTRATION_SUCCESS,
  SIGNUP,
} from "../../actionsTypes/index";

interface UserState {
  users: {
    name: string;
  }[];
}

const initialState: UserState = {
  users: [],
};

const userAuth = (state = initialState, action: Actions) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        users: [
          ...state.users,
          {
            name: action.payload.name,
            email: action.payload.email,
            password: action.payload.password,
          },
        ],
      };

    case REGISTRATION_SUCCESS:
      return {
        ...state,
      };

    case LOGIN_SUCCESS:
      return { ...state };

    case LOGIN_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default userAuth;
