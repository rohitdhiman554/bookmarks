import { GlobalState, Signin_Type } from "./state";

const initialState: GlobalState = {
  users: [],
};

const reducer = (state = initialState, action: Signin_Type) => {
  console.log(state);
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        users: [...state.users, { name: action.payload.name }],
      };
    default:
      return state;
  }
};

export default reducer;
