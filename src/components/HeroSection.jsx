import React from "react";
import { motion } from "framer-motion";
import videoUrl from "../assets/banner_video.mp4";
import "./CubertoLayout.css"; // We'll write styles here

function HeroSection() {
  return (
    <section
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "50px 20px",
      }}
    >
      {/* Image with scroll animation */}
      {/* Heading with scroll animation */}
      {/* <motion.img
        src={headerImg}
        alt="banner_img"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }} // triggers once when in view
        style={{
          marginTop: "10px",
          display: "flex",
          borderRadius: "20px",
          objectFit: "cover",
          marginBottom: "1rem",
          justifyContent: "center",
          boxShadow: "0 4px 10px rgba(255, 255, 255, 1)",
          maxWidth: "100%",
        }}
      /> */}
      <motion.video
        src={videoUrl} // e.g., "/assets/banner.mp4" or from a CDN
        autoPlay
        loop
        muted
        playsInline
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          marginTop: "10px",
          display: "flex",
          borderRadius: "20px",
          objectFit: "cover",
          marginBottom: "1rem",
          justifyContent: "center",
          boxShadow: "0 4px 10px rgba(255, 255, 255, 1)",
          maxWidth: "100%",
          width: "100%", // ensure it scales properly
          height: "auto", // maintain aspect ratio
        }}
      />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        style={{
          fontSize: "3rem",
          fontWeight: 700,
          fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
          color: "#FFFF",
          lineHeight: 1.2,
          marginBottom: "1rem",
        }}
      >
        Appify Solutions
      </motion.h1>

      {/* Paragraph with scroll animation */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        style={{
          fontSize: "1.2rem",
          color: "#807c7cff",
          maxWidth: "600px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        We build digital products that transform businesses.
      </motion.p>
    </section>
  );
}

export default HeroSection;
