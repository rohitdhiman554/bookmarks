import { BrowserRouter as Router } from "react-router-dom";
import GlobalRoute from "../routes";

const App = () => {
  return (
    <>
      <Router>
        <GlobalRoute></GlobalRoute>
      </Router>
    </>
  );
};

export default App;
