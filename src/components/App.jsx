import React from "react";
import "./../styles/App.css";
import AutoFiltered from "./AutoFiltered";
const suggestions = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
  "Austin",
  "Elm Street",
  "Sunset Boulevard",
  "Broadway",
  "Mumbai",
];
const App = () => {
  return (
    <div className="App">
      <h1>Address auto complete</h1>
      <AutoFiltered suggestions={suggestions} />
    </div>
  );
};

export default App;
