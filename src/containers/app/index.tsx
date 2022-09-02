import { BrowserRouter as Router } from "react-router-dom";

import { AppRoute } from "../../routes/index";

const App = () => {
  return (
    <Router>
      <AppRoute />
    </Router>
  );
};

export default App;
