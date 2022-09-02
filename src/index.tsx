import { Fragment } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import AppRoute from "./containers/App/index";
import store from "./store/index";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Fragment>
    <Provider store={store}>
      <AppRoute />
    </Provider>
  </Fragment>
);
