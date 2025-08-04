// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/HeroSection.css";
import heroImage from "../assets/header_img.jpg"; // Add a beautiful banner image

function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background image */}
      <motion.img
        src={heroImage}
        alt="Hero"
        className="hero-bg"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Appify Solutions
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          We build digital products that transform businesses.
        </motion.p>

        <motion.a
          href="#services"
          className="hero-button"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Explore Services
        </motion.a>
      </div>
    </section>
  );
}

export default HeroSection;
