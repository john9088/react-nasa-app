import React, { useState, useEffect } from "react";
import "./App.css";
import Nasa from "./nasa.js";

function App() {
  const [desc, setDesc] = useState([]);
  const [query, setQuery] = useState("nasa");
  let search = "";

  const request = `https://images-api.nasa.gov/search?q=${query}&media_type=image`;

  useEffect(() => {
    getDesc();
  }, [query]);

  const getDesc = async () => {
    console.log(request);
    const response = await fetch(request);
    const data = await response.json();
    setDesc(data.collection.items.slice(0, 15));
    console.log(desc);
  };
  //setQuery(search);
  const setSearch = (e) => {
    search = e.target.value;
  };

  const getQuery = (e) => {
    e.preventDefault();
    search = search.toUpperCase();
    search = search.replace(" ", "%20");
    setQuery(search);
    search = "";
  };

  return (
    <div className="App">
      <form className="search-box" onSubmit={getQuery}>
        <input
          className="search-field"
          type="text"
          placeholder="Search..."
          onChange={setSearch}
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
