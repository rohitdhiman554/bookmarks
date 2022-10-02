import { Routes, Route, Navigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { ReactNode } from "react";

import { ROOT, LOGIN, HOME } from "../utils/routeConstants";
import Login from "./Login/index";
import Signup from "./Signup/index";
import Home from "./Home/index";

const routesConfig = [
  {
    path: ROOT,
    component: <Signup />,
    privateRoute: false,
  },

  {
    path: LOGIN,
    component: <Login />,
    privateRoute: false,
  },

  {
    path: HOME,
    component: <Home />,
    privateRoute: true,
  },
];

const ProtectedRoute = (component: ReactNode, privateRoute: boolean) => {
  const isUserPresent = localStorage.getItem("auth");

  const isValidRoute =
    (privateRoute && isUserPresent) || !(privateRoute || isUserPresent);

  if (isValidRoute) return component;
  return <Navigate to={privateRoute ? "/login" : "/home"} />;
};

const AppRoute = () => {
  return (
    <Routes>
      {routesConfig.map((route) => {
        const obj = { ...route };
        return (
          <Route
            key={uuid()}
            path={obj.path}
            element={ProtectedRoute(obj.component, obj.privateRoute)}
          ></Route>
        );
      })}
    </Routes>
  );
};

export { AppRoute };
