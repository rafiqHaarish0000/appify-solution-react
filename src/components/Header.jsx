import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Header.css";

function Header() {
  const navigate = useNavigate();

  return (
    <motion.header
      className="header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="logo" onClick={() => navigate("/")}>
        Appify
      </div>
      <nav className="nav">
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#company">Company</a>
        <a href="#blog">Blog</a>
        <button className="contactus" onClick={() => navigate("/contact")}>
          Contact Us
        </button>
      </nav>
    </motion.header>
  );
}

export default Header;
