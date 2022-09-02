import { LogInButton } from "../Signup/components/Button";

const Login = () => {
  const handleLogin = () => {
    localStorage.setItem("Login", "true");
  };

  return (
    <>
      Login
      <input type="text"></input>
      <LogInButton onClick={handleLogin}>Login</LogInButton>
    </>
  );
};
export default Login;
