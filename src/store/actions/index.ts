import { SIGNUP } from "../actionsTypes";

export type inputState = {
  name: string;
  id: string;
  password: string;
};

export const signUp = (obj: inputState) => {
  return {
    type: SIGNUP,
    payload: {
      name: obj.name,
      id: obj.id,
      password: obj.password,
    },
  };
};
