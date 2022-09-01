import { SIGN_IN } from "../actions";

export const signIn = (name: string) => {
  return {
    type: SIGN_IN,
    payload: {
      name: name,
    },
  };
};
