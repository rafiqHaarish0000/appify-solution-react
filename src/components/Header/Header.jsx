import React from "react";
import { motion } from "framer-motion";
import "./Header.css";

const Header = ({ activeSection, scrollToSection }) => {
  const sections = [
    { id: "intro", name: "Intro" },
    { id: "what-we-do", name: "What We Do" },
    { id: "services", name: "Services" },
    { id: "products", name: "Products" },
    { id: "research", name: "Research" },
  ];

  const underlineVariants = {
    hover: { width: "100%" },
    rest: { width: "0%" },
  };

  return (
    <header className="glass-header">
      <div className="header-container">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Appify
        </motion.div>

        <nav className="nav-tabs">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              className={`nav-item ${
                activeSection === section.id ? "active" : ""
              }`}
              onClick={() => scrollToSection(section.id)}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              {section.name}
              <motion.div
                className="hover-underline"
                variants={underlineVariants}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              {activeSection === section.id && (
                <div className="active-indicator" />
              )}
            </motion.button>
          ))}

          <motion.a
            href="/contact"
            className="contact-button"
            whileHover={{
              background: "rgba(255, 255, 255, 0.15)",
              boxShadow: "0 0 15px rgba(100, 200, 255, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Contact Us
          </motion.a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
