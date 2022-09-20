import { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useFormik } from "formik";

import { CustomButton } from "../../components/Button";
import { inputState } from "../../store/actions";
import { MainDiv, HeadingDiv, RightDiv, Header } from "./style";
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
import { userSignUp } from "../../store/actions/index";
import {
  NameValidation,
  PasswordValidation,
} from "../../components/Validation";
import { signUpSchema } from "../../validation/index";

type SignupState = {
  getRegistrationDetails: (obj: inputState) => void;
};

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const Signup = (props: SignupState) => {
  const [visibility, setVisibility] = useState(false);
  const [checked, setChecked] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, actions) => {
        props.getRegistrationDetails(values);
        actions.resetForm();
      },
    });

  const handleVisibilty = () => {
    setVisibility(!visibility);
  };

  const handleCheck = () => {
    setChecked(!checked);
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
        <Header>
          <b>SignUp</b>
        </Header>

        <InputItems>
          <form onSubmit={handleSubmit}>
            <CustomInput
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Name"
              name="name"
              id="name"
            ></CustomInput>
            {errors.name && touched.name ? (
              <NameValidation id="name">{errors.name}</NameValidation>
            ) : null}

            <CustomInput
              type="email"
              value={values.email}
              id="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
            ></CustomInput>
            {errors.email && touched.email ? (
              <PasswordValidation id="password">
                {errors.password}
              </PasswordValidation>
            ) : null}

            <CustomInput
              type={`${visibility ? "text" : "password"}`}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              id="password"
              name="password"
              placeholder="Password"
            ></CustomInput>

            {errors.password && touched.password ? (
              <PasswordValidation id="password">
                {errors.password}
              </PasswordValidation>
            ) : null}
            {/* {!visibility ? (
              <ShowEye onClick={handleVisibilty}></ShowEye>
            ) : (
              <HideEye onClick={handleVisibilty}></HideEye>
            )} */}
            <CheckBoxDiv>
              <CustomInput
                type="checkbox"
                id="check"
                onChange={handleCheck}
                defaultChecked={checked}
              ></CustomInput>

              <Text id="signin">
                By signing up, you agree to the{" "}
                <CustomAnchor href="/" id="terms">
                  Terms of Service and Privacy Policy
                </CustomAnchor>
              </Text>
            </CheckBoxDiv>
            <CustomButton id="signupBtn" type="submit">
              Sign Up
            </CustomButton>
            <Text id="orwith">Or with</Text>
            <CustomButton type="submit" id="googleBtn">
              <img src={GoogleIcon} />
              <b>Sign Up with Google</b>
            </CustomButton>
            <Text id="login">
              Already have an account?{"\u00a0\u00a0"}
              <CustomAnchor id="loginAnc" href="./login">
                Login
              </CustomAnchor>
            </Text>
          </form>
        </InputItems>
      </RightDiv>
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getRegistrationDetails: (values: inputState) =>
      dispatch(userSignUp(values)),
  };
};

export default connect(null, mapDispatchToProps)(Signup);
