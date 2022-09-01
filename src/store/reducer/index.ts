import { GlobalState, Signin_Type } from "./type";
import { SIGN_IN } from "../actions/index";

const initialState: GlobalState = {
  users: [],
};

const reducer = (state = initialState, action: Signin_Type) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        users: [...state.users, { name: action.payload.name }],
      };
    default:
      return state;
  }
};

export default reducer;
