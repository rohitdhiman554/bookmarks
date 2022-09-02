import { Actions } from "../userAuth/type";
import { SIGNUP } from "../../actionsTypes/index";

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
            id: action.payload.id,
            password: action.payload.password,
          },
        ],
      };
    default:
      return state;
  }
};

export default userAuth;
