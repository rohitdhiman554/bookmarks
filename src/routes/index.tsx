import Signin from "./singin/Signin";
import { useRoutes } from "react-router-dom";

const GlobalRoute = () => {
  const routes = useRoutes([{ path: "/", element: <Signin /> }]);
  return routes;
};

export default GlobalRoute;
