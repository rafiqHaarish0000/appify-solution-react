// src/components/Header.jsx
import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo" onClick={() => window.location.reload()}>
        Appify
      </div>
      <nav className="nav">
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#company">Company</a>
        <a href="#blog">Blog</a>
        <a href="#contacts">Contacts</a>
      </nav>
    </header>
  );
}

export default Header;
