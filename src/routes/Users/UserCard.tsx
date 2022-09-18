import React, { Fragment, useEffect, useState } from "react";
import { UserIcon } from "../../components/Icons";
import {
  AvatarDiv,
  ContentDiv,
  HeadingDiv,
  Info,
  NameDiv,
  UserDetail,
} from "./style";

interface UserType {
  url: string;
  key: string;
}

const UserCard = (props: UserType) => {
  const [details, setDetails] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch(props.url);
      data = await data.json();
      await setDetails(data);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <ContentDiv>
        <AvatarDiv src={details.avatar_url} />
        <NameDiv>
          <HeadingDiv id="name">{details.name}</HeadingDiv>
          <HeadingDiv id="username">{details.login}</HeadingDiv>
          <UserDetail>
            <UserIcon />
            <Info>
              <b>{details.followers}</b> followers <b>{details.following}</b>{" "}
              following
            </Info>
          </UserDetail>
        </NameDiv>
      </ContentDiv>
    </Fragment>
  );
};

export default UserCard;
