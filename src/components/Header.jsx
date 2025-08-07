import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Header.css";

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (link) => {
    setMenuOpen(false);
    if (link.startsWith("/")) {
      navigate(link);
    }
  };

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

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>

      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <a href="#services" onClick={() => handleNavClick("#services")}>
          Services
        </a>
        <a href="#projects" onClick={() => handleNavClick("#projects")}>
          Projects
        </a>
        <a href="#company" onClick={() => handleNavClick("#company")}>
          Company
        </a>
        <a href="#blog" onClick={() => handleNavClick("#blog")}>
          Blog
        </a>
        <button
          className="contactus"
          onClick={() => handleNavClick("/contact")}
        >
          Contact Us
        </button>
      </nav>
    </motion.header>
  );
}

export default Header;
