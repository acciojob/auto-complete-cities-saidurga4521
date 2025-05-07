import React from "react";
import "./../styles/App.css";
import AutoFiltered from "./AutoFiltered";

const App = () => {
  return (
    <div className="App">
      <h1>Address auto complete</h1>
      <AutoFiltered />
    </div>
  );
};

export default App;
