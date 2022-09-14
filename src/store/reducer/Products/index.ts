import { SET_PRODUCTLIST } from "../../actionsTypes";
import { Actions } from "./type";

interface UsersState {
  users: {
    name: string;
  }[];
}

const initialState: UsersState = {
  users: [],
};

const products = (state = initialState, action: Actions) => {
  switch (action.type) {
    case SET_PRODUCTLIST:
      return {
        ...state,
        users: [
          ...state.users,
          {
            name: action.payload.data,
          },
        ],
      };
    default:
      return state;
  }
};
export default products;
