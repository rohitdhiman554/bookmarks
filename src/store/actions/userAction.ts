import {
  USER_FETCH_REQUEST,
  USER_REQUEST_FAILURE,
  USER_REQUEST_SUCCESS,
} from "../actionsTypes";

export type UserType = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}[];

export const userList = () => {
  return {
    type: USER_FETCH_REQUEST,
  };
};

export const userRequestSuccess = (payload: UserType) => {
  return {
    type: USER_REQUEST_SUCCESS,
    payload,
  };
};

export const userRequestFailure = (error: any) => {
  return {
    type: USER_REQUEST_FAILURE,
    payload: error,
  };
};
