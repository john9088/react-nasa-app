import React, { useState, useEffect } from "react";
import "./App.css";
import Nasa from "./nasa.js";

function App() {
  const [desc, setDesc] = useState([]);
  let [search, setSearch] = useState("");
  const [query, setQuery] = useState("dark%20energy");

  const request = `https://images-api.nasa.gov/search?q=${query}&media_type=image`;

  useEffect(() => {
    getDesc();
  }, [query]);

  const getDesc = async () => {
    const response = await fetch(request);
    const data = await response.json();
    setDesc(data.collection.items.slice(0, 15));
  };
  //setQuery(search);
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getQuery = (e) => {
    e.preventDefault();
    search = search.toUpperCase();
    search = search.replace(" ", "%20");
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form className="search-box" onSubmit={getQuery}>
        <input
          className="search-field"
          type="text"
          placeholder="Search..."
          onChange={updateSearch}
          value={search}
        />
        <button className="search-btn" type="submit">
          Enter
        </button>
      </form>
      <div className="show-desc">
        {desc.length > 1 ? (
          desc.map((d) => <Nasa key={desc.indexOf(d)} data={d} />)
        ) : (
          <h3 style={{ color: "white" }}>Try Other input</h3>
        )}
      </div>
    </div>
  );
}

export default App;
