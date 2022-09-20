import React, { Fragment, useState } from "react";
import { CustomButton } from "../../components/Button";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { HeadingDiv, MainDiv, RightDiv, Header } from "../Signup/style";
import {
  CustomAnchor,
  CustomInput,
  HideEye,
  InputItems,
  ShowEye,
  Text,
} from "../../components/Input";
import { LoginState, userLogin } from "../../store/actions";
import { StyledImage } from "../../components/Image";
import HeaderImage from "../../components/assets/Saly-10.svg";
import { useFormik } from "formik";
import { loginSchema } from "../../validation";
import { getLoginDetails } from "../../store/saga/login";
import { EmailValidation } from "../../components/Validation";

type LoginStateType = {
  getLoginDetails: (obj: LoginState) => void;
};

const initialValues = {
  email: "",
  password: "",
};

const Login = (props: LoginStateType) => {
  const [visibility, setVisibility] = useState(false);

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      props.getLoginDetails(values);
      actions.resetForm();
    },
  });

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

        <StyledImage src={HeaderImage} />
      </MainDiv>
      <RightDiv>
        <Header>
          <b>Login</b>
        </Header>

        <InputItems>
          <form onSubmit={handleSubmit}>
            <CustomInput
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Email"
              value={values.email}
            ></CustomInput>

            <CustomInput
              type={`${visibility ? "text" : "password"}`}
              id="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            ></CustomInput>

            {/* {!visibility ? (
            <ShowEye onClick={handleVisibilty}></ShowEye>
          ) : (
            <HideEye  onClick={handleVisibilty}></HideEye>
          )} */}
            <CustomButton id="loginBtn">Login</CustomButton>

            <CustomAnchor href="/" id="forgot"></CustomAnchor>
            <Text id="noAcc">
              Don’t have an account yet?{"\u00a0"}
              <CustomAnchor href="/">Sign Up</CustomAnchor>
            </Text>
          </form>
        </InputItems>
      </RightDiv>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getLoginDetails: (values: LoginState) => dispatch(userLogin(values)),
  };
};
export default connect(null, mapDispatchToProps)(Login);
