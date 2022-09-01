import AppRoute from "./app/index";
import { Provider } from "react-redux";
import store from "./store/index";
function App() {
  return (
    <>
      <Provider store={store}>
        <AppRoute></AppRoute>
      </Provider>
    </>
  );
}

export default App;
