import React, { Fragment, useState } from "react";
import { LogInButton } from "../../components/Button";
import { HeadingDiv, MainDiv, RightDiv } from "../Signup/style";
// import Image from "../../components/assets/Image";
import {
  CustomAnchor,
  CustomInput,
  HideEye,
  InputItems,
  ShowEye,
  Text,
} from "../../components/Input";
import { StyledImage } from "../../components/Image";
import HeaderImage from "../../components/assets/Saly-10.svg";

const Login = () => {
  const [visibility, setVisibility] = useState(false);

  const handleLogin = () => {
    localStorage.setItem("Login", "true");
  };

  const handleVisibilty = () => {
    setVisibility(!visibility);
  };

  return (
    <Fragment>
      <MainDiv>
        <HeadingDiv>
          Welcome,
          <br />
          <b>Get Started</b>
        </HeadingDiv>

        <StyledImage src={HeaderImage} width={700} />
      </MainDiv>
      <RightDiv>
        <InputItems>
          <CustomInput
            type="text"
            // value={input.id}
            id="id"
            // onChange={handleId}
            placeholder="Email"
          ></CustomInput>

          <CustomInput
            type={`${visibility ? "text" : "password"}`}
            // value={input.password}
            // onChange={handlePassword}
            id="password"
            placeholder="Password"
          ></CustomInput>
          {!visibility ? (
            <ShowEye onClick={handleVisibilty}></ShowEye>
          ) : (
            <HideEye onClick={handleVisibilty}></HideEye>
          )}

          <LogInButton id="loginBtn" onClick={handleLogin}>
            Login
          </LogInButton>

          <CustomAnchor to="/" id="forgot">
            Forgot Password?
          </CustomAnchor>
          <Text id="noAcc">
            Don’t have an account yet?{"\u00a0"}
            <a href="./">Sign Up</a>
          </Text>
        </InputItems>
      </RightDiv>
    </Fragment>
  );
};
export default Login;
