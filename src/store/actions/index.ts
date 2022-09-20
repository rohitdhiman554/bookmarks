import { LOGIN } from "../../utils/routeConstants";
import {
  CREATE_FOLDER_REQUEST,
  GET_ALL_FOLDERS_REQUEST,
  SIGNUP,
} from "../actionsTypes";

export type inputState = {
  name: string;
  email: string;
  password: string;
};

export type LoginState = {
  email: string;
  password: string;
};

export const userSignUp = (data: inputState) => {
  return {
    type: SIGNUP,
    payload: data,
  };
};

export const userLogin = (data: LoginState) => {
  return {
    type: LOGIN,
    payload: data,
  };
};

export const createNewFolder = (name: string) => {
  return {
    type: CREATE_FOLDER_REQUEST,
    payload: name,
  };
};

export const getFolder = () => {
  return {
    type: GET_ALL_FOLDERS_REQUEST,
  };
};
