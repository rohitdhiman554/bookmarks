import { Actions } from "../userAuth/type";
import {
  GET_ME_REQUEST,
  GET_ME_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTRATION_FAIL,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
} from "../../actionsTypes/index";
import { LOGIN } from "../../../utils/routeConstants";

interface UserState {
  users: {
    name: string;
  }[];
  userProfile: any;
  loginSpinner: boolean;
  signUpSpinner: boolean;
}

const initialState: UserState = {
  users: [],
  userProfile: {},
  loginSpinner: false,
  signUpSpinner: false,
};

const userAuth = (state = initialState, action: any) => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
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
        signUpSpinner: true,
      };

    case REGISTRATION_SUCCESS:
      return {
        ...state,
        signUpSpinner: false,
      };

    case REGISTRATION_FAIL:
      return {
        ...state,
        signUpSpinner: false,
      };

    case LOGIN_REQUEST:
      return {
        ...state,
        loginSpinner: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loginSpinner: false,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loginSpinner: false,
      };

    case GET_ME_REQUEST:
      return {
        ...state,
      };

    case GET_ME_SUCCESS:
      return {
        ...state,
        userProfile: action.payload,
      };

    default:
      return state;
  }
};

export default userAuth;
