import { Fragment, useState } from "react";
import { CustomButton } from "../../components/Button";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { useFormik } from "formik";

import {
  HeadingDiv,
  MainDiv,
  RightDiv,
  Header,
  LeftDiv,
} from "../Signup/style";
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
import { loginSchema } from "../../validation";
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

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, actions) => {
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
        {" "}
        <LeftDiv>
          <HeadingDiv>
            Welcome,
            <br />
            <b>Get Started</b>
          </HeadingDiv>

          <StyledImage src={HeaderImage} id="headingImage" />
        </LeftDiv>
        <RightDiv>
          <Header>
            <b>Login</b>
          </Header>

          <InputItems id="loginItems" onSubmit={handleSubmit}>
            <CustomInput
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Email"
              value={values.email}
            ></CustomInput>
            {errors.email && touched.email ? (
              <EmailValidation id="email"></EmailValidation>
            ) : null}

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
            <CustomButton id="loginBtn" type="submit">
              Login
            </CustomButton>

            <CustomAnchor href="/" id="forgot">
              Forgot Password?
            </CustomAnchor>
            <Text id="noAcc">
              Don’t have an account yet?{"\u00a0"}
              <CustomAnchor href="/">Sign Up</CustomAnchor>
            </Text>
          </InputItems>
        </RightDiv>
      </MainDiv>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getLoginDetails: (values: LoginState) => dispatch(userLogin(values)),
  };
};
export default connect(null, mapDispatchToProps)(Login);
