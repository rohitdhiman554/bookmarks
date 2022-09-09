import React, { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useNavigate } from "react-router-dom";

import { LogInButton } from "../../components/Button";
import { signUp } from "../../store/actions";
import { inputState } from "../../store/actions";
import { LOGIN } from "../../utils/routeConstants";
import { MainDiv, HeadingDiv, RightDiv } from "./style";
import {
  CheckBoxDiv,
  CustomAnchor,
  CustomInput,
  HideEye,
  InputItems,
  ShowEye,
  Text,
} from "../../components/Input";

import { StyledImage } from "../../components/Image";

import GoogleIcon from "../../components/assets/googleicon.svg";
import HeaderImage from "../../components/assets/Saly-10.svg";

type SignupState = {
  signUp: (obj: inputState) => void;
};

const Signup = (props: SignupState) => {
  const [visibility, setVisibility] = useState(false);
  const [checked, setChecked] = useState(false);

  const [input, setInput] = useState({
    name: "",
    id: "",
    password: "",
  });

  const handleVisibilty = () => {
    setVisibility(!visibility);
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  const navigate = useNavigate();

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, name: e.target.value });
  };

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, id: e.target.value });
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, password: e.target.value });
  };

  const handleSubmit = () => {
    props.signUp(input);
    setInput({
      name: "",
      id: "",
      password: "",
    });
    navigate(LOGIN);
  };

  return (
    <>
      <MainDiv>
        <HeadingDiv>
          Welcome,
          <br />
          <b>Get Started</b>
        </HeadingDiv>
        <StyledImage src={HeaderImage} />
      </MainDiv>

      <RightDiv>
        <InputItems>
          <CustomInput
            type="text"
            value={input.name}
            onChange={handleName}
            placeholder="Name"
            id="name"
          ></CustomInput>
          <CustomInput
            type="text"
            value={input.id}
            id="id"
            onChange={handleId}
            placeholder="Email"
          ></CustomInput>
          <CustomInput
            type={`${visibility ? "text" : "password"}`}
            value={input.password}
            onChange={handlePassword}
            id="password"
            placeholder="Password"
          ></CustomInput>
          {!visibility ? (
            <ShowEye onClick={handleVisibilty}></ShowEye>
          ) : (
            <HideEye onClick={handleVisibilty}></HideEye>
          )}
          <CheckBoxDiv>
            <CustomInput
              type="checkbox"
              id="check"
              onChange={handleCheck}
              defaultChecked={checked}
            ></CustomInput>

            <Text id="signin">
              By signing up, you agree to the{" "}
              <CustomAnchor to="/" id="terms">
                Terms of Service and Privacy Policy
              </CustomAnchor>
            </Text>
          </CheckBoxDiv>

          <LogInButton id="loginBtn" onClick={handleSubmit}>
            Sign Up
          </LogInButton>

          <LogInButton id="googleBtn">
            {" "}
            <img src={GoogleIcon} />
            <b>Sign Up with Google</b>
          </LogInButton>

          <Text id="orwith">Or with</Text>

          <Text id="login">
            Already have an account?{"\u00a0\u00a0"}
            <a href="./login">Login</a>
          </Text>
        </InputItems>
      </RightDiv>
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    signUp: (input: inputState) => dispatch(signUp(input)),
  };
};

export default connect(null, mapDispatchToProps)(Signup);
