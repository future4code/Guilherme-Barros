import React from "react";
import Router from "./routes/Router";
import GlobalState from "./global/GlobalState";
import Requirements from "./components/Requirements/Requirements";

const App = () => {
  return (
    <GlobalState>
      <Router />
      <Requirements />
    </GlobalState>
  );
};

export default App;
