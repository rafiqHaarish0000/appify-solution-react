// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import headerImg from "../assets/header_img.jpg";

function HeroSection() {
  return (
    <section
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <motion.img
        src={headerImg} // replace with your actual image path (e.g., from public folder)
        alt="banner_img"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          display: "flex",
          borderRadius: "20px", // rounded corners
          objectFit: "cover",
          marginBottom: "1rem",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // optional shadow
        }}
      />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        style={{
          fontSize: "3rem", // or "clamp(2.5rem, 5vw, 4rem)" for responsive sizing
          fontWeight: 700,
          fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
          color: "#000", // or use your design color
          lineHeight: 1.2,
          marginBottom: "1rem",
        }}
      >
        Appify Solutions
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{
          fontSize: "1.2rem",
          color: "#666",
          maxWidth: "600px", // optional, controls width
          margin: "0 auto", // this centers it horizontally
          textAlign: "center",
        }}
      >
        We build digital products that transform businesses.
      </motion.p>
    </section>
  );
}

export default HeroSection;
