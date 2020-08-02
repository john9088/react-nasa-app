import React from "react";
import "./nasa.css";

function Nasa({ data }) {
  return (
    <div className="nasa-items">
      <h2>{data.data[0].title}</h2>
      <img src={data.links[0].href} />
      <h4>Description</h4>
      <p>{data.data[0].description}</p>
    </div>
  );
}

export default Nasa;
