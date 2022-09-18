import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userList } from "../../store/actions/userAction";
import { UserType } from "../../store/actions/userAction";
import { MainDiv, UsersDiv } from "../Users/style";
import { NavBar } from "../../components/NavBar";
import { GitLogo } from "../../components/Icons";
import { Spinner } from "../../components/Icons";
import UserCard from "./UserCard";

interface UserState {
  userList: {
    spinner: false;
    users: UserType;
  };
}

const Users = () => {
  useEffect(() => {
    setTimeout(() => {
      dispatch(userList());
    }, 1000);
  }, []);

  const data = useSelector((state: UserState) => state.userList);

  const dispatch = useDispatch();
  {
    console.log(data.spinner);
  }
  return (
    <Fragment>
      <MainDiv>
        <NavBar>
          <GitLogo></GitLogo>
        </NavBar>

        {data.spinner ? (
          <Spinner />
        ) : (
          <UsersDiv>
            {data.users.map((e) => {
              return <UserCard key={e.node_id} url={e.url} />;
            })}
          </UsersDiv>
        )}
      </MainDiv>
    </Fragment>
  );
};

export default Users;
