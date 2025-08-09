import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import "./Section.css";
import whatwedoimg from "../../assets/whatwedoimg.jpg";
import cubevideo from "../../assets/cube.gif";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const WhatWeDo = forwardRef((props, ref) => {
  return (
    <motion.section
      id="what-we-do"
      ref={ref}
      className="layout-section what-we-do-layout"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      variants={containerVariants}
      style={{
        backgroundImage: `url(${whatwedoimg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundColor: "white",
      }}
    >
      <motion.div className="section-content glassmorphism-card">
        <motion.h1
          variants={itemVariants}
          style={{
            marginBottom: "1.5rem",
            fontWeight: "700",
            fontSize: "2.5rem",
          }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
        >
          What We Do
        </motion.h1>
        <motion.img
          src={cubevideo}
          alt="Animated Graphic"
          variants={itemVariants}
          whileHover={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          style={{
            width: "100%",
            maxWidth: "500px",
            marginBottom: "1.5rem",
            objectFit: "cover",
            cursor: "pointer",
          }}
        />

        <motion.p
          variants={itemVariants}
          style={{
            fontSize: "2rem", // bigger size
            fontWeight: 600, // semi-bold for emphasis
            marginBottom: "1.5rem",
            maxWidth: "600px",
            color: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)", // gradient text fallback not supported in inline styles; use CSS class for gradient below
            textAlign: "center",
            textShadow: "0 2px 6px rgba(0,0,0,0.2)", // subtle shadow for depth
            lineHeight: 1.3,
          }}
          transition={{ duration: 2, ease: "easeOut", delay: 1 }}
          className="gradient-text" // better gradient with CSS below
        >
          We create innovative designs and strategies that drive your business
          forward.
        </motion.p>

        <motion.button
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 12px rgba(255, 255, 255, 0.7)",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            duration: 1.5,
            delay: 1.5,
          }}
          className="glassmorphism-button"
        >
          Visit Us
        </motion.button>
      </motion.div>
    </motion.section>
  );
});

export default WhatWeDo;
