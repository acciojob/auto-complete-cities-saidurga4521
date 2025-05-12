import { useState } from "react";
import React from "react";

const AutoFiltered = ({ suggestions }) => {
  const [input, setInput] = useState("");
  const [FilteredSuggestions, setFilteredSuggestions] = useState([]);
  const handleSuggestionsClick = (e) => {
    const value = e.target.value;
    setInput(value);

    const matches = suggestions.filter((sugg) =>
      sugg.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredSuggestions(matches);
  };
  const handleClick = (sugg) => {
    setInput(sugg);
    setFilteredSuggestions([]);
  };
  return (
    <div className="autocomplete-container">
      <label for="Address">Enter Address</label>
      <input
        type="text"
        id="Address"
        value={input}
        onChange={handleSuggestionsClick}
      />
      {input && FilteredSuggestions.length > 0 && (
        <ul className="suggestions">
          {FilteredSuggestions.map((sugg, index) => (
            <li
              key={index}
              onClick={() => {
                handleClick(sugg);
              }}
            >
              {sugg}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoFiltered;
