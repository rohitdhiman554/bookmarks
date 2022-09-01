export interface GlobalState {
  users: {
    name: string;
  }[];
}

export type Signin_Type = {
  type: "SIGNIN";
  payload: {
    name: string;
  };
};
