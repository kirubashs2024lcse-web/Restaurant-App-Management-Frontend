import React, { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function handleSearch(e) {
    const value = e.target.value;
    setQuery(value);

    // Dummy data
    const restaurants = [
      "The Migrant Kitchen",
      "Spicy Hub",
      "Food Court",
      "BBQ Nation"
    ];

    const filtered = restaurants.filter(function (item) {
      return item.toLowerCase().includes(value.toLowerCase());
    });

    setResults(filtered);
  }

  return React.createElement(
    "div",
    { className: "search-container" },

    React.createElement("h1", null, "Search"),

    React.createElement("input", {
      type: "text",
      placeholder: "Search restaurants...",
      value: query,
      onChange: handleSearch,
      className: "search-input"
    }),

    React.createElement(
      "div",
      { className: "search-results" },
      results.map(function (item, index) {
        return React.createElement(
          "p",
          { key: index, className: "search-item" },
          item
        );
      })
    )
  );
}

export default Search;
