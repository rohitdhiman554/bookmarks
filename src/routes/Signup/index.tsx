import React, { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useNavigate } from "react-router-dom";

import { LogInButton } from "./components/Button";
import { signUp } from "../../store/actions";
import { inputState } from "../../store/actions";
import { LOGIN } from "../../utils/routeConstants";

type SignupState = {
  signUp: (obj: inputState) => void;
};

const Signup = (props: SignupState) => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    id: "",
    password: "",
  });

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
      <form>
        <label>
          Name:
          <input type="text" value={input.name} onChange={handleName}></input>
        </label>
        <br></br>
        <label>
          Id:
          <input type="text" value={input.id} onChange={handleId}></input>
        </label>
        <br></br>

        <label>
          Password:
          <input
            type="text"
            value={input.password}
            onChange={handlePassword}
          ></input>
        </label>
        <br></br>
      </form>
      <LogInButton onClick={handleSubmit}>SignIn</LogInButton>
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    signUp: (input: inputState) => dispatch(signUp(input)),
  };
};

export default connect(null, mapDispatchToProps)(Signup);
