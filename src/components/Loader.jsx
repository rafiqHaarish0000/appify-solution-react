// src/components/Loader.jsx
import React from "react";
import "../styles/Loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="dot-loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* <p className="loader-text">Launching Appify...</p> */}
    </div>
  );
};

export default Loader;
