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
      navigate(link); // route navigation
    } else if (link.startsWith("#")) {
      const id = link.slice(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      className="header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="logo" onClick={() => (window.location.href = "/")}>
        Appify
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>

      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <a
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#services");
          }}
        >
          Services
        </a>

        <a
          href="#products"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#products");
          }}
        >
          Projects
        </a>
        <a
          href="#company"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#company");
          }}
        >
          Company
        </a>
        <a
          href="#blog"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#blog");
          }}
        >
          Research
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
