import React from "react";
import ReactDOM from "react-dom/client";
import AppRoute from "./containers/app/index";
import { Provider } from "react-redux";
import store from "./store/index";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoute />
    </Provider>
  </React.StrictMode>
);
