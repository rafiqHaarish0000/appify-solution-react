// src/components/Layout.jsx
import React from "react";
import Header from "./Header";
import Cursor from "./Cursor";

function Layout({ children }) {
  return (
    <div className="App">
      <Cursor />
      <Header />
      <div className="scroll-container">
        <div className="content-wrapper">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
