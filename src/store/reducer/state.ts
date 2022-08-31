export interface GlobalState {
  users: {
    name: string;
  }[];
}
export interface Signin_Type {
  type: "SIGNIN";
  payload: {
    name: string;
  };
}
