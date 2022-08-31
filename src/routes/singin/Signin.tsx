import React, { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

type SignInState = {
  signIn: (name: string) => void;
};

const Signin = (props: SignInState) => {
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      props.signIn(input);
      setInput("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        onKeyPress={handleSubmit}
      ></input>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    signIn: (input: string) =>
      dispatch({ type: "SIGNIN", payload: { name: input } }),
  };
};

export default connect(null, mapDispatchToProps)(Signin);
