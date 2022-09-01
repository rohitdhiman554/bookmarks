import Signin from "./Signin/index";
import { useRoutes } from "react-router-dom";
import { HOME } from "../utils/routeConstants";

const GlobalRoute = () => {
  const routes = useRoutes([{ path: HOME, element: <Signin /> }]);
  return routes;
};

export default GlobalRoute;
