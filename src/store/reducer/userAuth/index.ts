import { Actions } from "../userAuth/type";
import {
  GET_ME_REQUEST,
  GET_ME_SUCCESS,
  SIGNUP,
} from "../../actionsTypes/index";

interface UserState {
  users: {
    name: string;
  }[];
  userProfile: any;
}

const initialState: UserState = {
  users: [],
  userProfile: {},
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
