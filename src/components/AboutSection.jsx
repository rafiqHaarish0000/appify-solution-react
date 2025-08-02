// src/components/AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>About Us</h2>
      <p>
        We are a creative agency specializing in design and development. Our
        team creates innovative solutions that help brands stand out in the
        digital age.
      </p>
    </motion.section>
  );
}

export default AboutSection;
