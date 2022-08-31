import "./App.css";
import GlobalRoute from "./routes/index";
import { Provider } from "react-redux";
import store from "./store/index";
function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalRoute></GlobalRoute>
      </Provider>
    </>
  );
}

export default App;
