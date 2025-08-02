// src/components/ProjectsSection.jsx
import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Project Alpha", description: "A groundbreaking mobile app." },
  { title: "Project Beta", description: "An innovative web platform." },
  { title: "Project Gamma", description: "A modern e-commerce solution." },
];

function ProjectsSection() {
  return (
    <section>
      <h2>Our Projects</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
