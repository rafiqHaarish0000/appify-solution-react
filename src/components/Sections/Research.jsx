import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import "./Section.css";

const Research = forwardRef((props, ref) => {
  const researchAreas = [
    "Artificial Intelligence",
    "Blockchain Technology",
    "Quantum Computing",
    "Extended Reality",
  ];

  return (
    <motion.section
      id="research"
      ref={ref}
      className="layout-section research-layout"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-content">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Research & Innovation
        </motion.h1>
        <motion.div
          className="research-areas"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p>We're at the forefront of technology research, exploring:</p>
          <ul>
            {researchAreas.map((area, index) => (
              <motion.li
                key={index}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {area}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
});

export default Research;
