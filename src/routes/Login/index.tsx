import { Fragment } from "react";
import { LogInButton } from "../Signup/components/Button";

const Login = () => {
  const handleLogin = () => {
    localStorage.setItem("Login", "true");
  };

  return (
    <Fragment>
      Login
      <input type="text"></input>
      <LogInButton onClick={handleLogin}>Login</LogInButton>
    </Fragment>
  );
};
export default Login;
