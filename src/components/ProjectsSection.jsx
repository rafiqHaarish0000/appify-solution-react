import React from "react";
import { motion } from "framer-motion";
import "../styles/ProjectsSection.css";

const AnimatedButton = ({ text, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="animated-button interactive"
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      initial={{ scale: 1 }}
    >
      <motion.span whileHover={{ y: -2, transition: { duration: 0.2 } }}>
        {text}
      </motion.span>
    </motion.button>
  );
};

const ProjectCard = ({ title, description, image, animateProps }) => {
  return (
    <motion.div className="project-card" {...animateProps}>
      <div className="project-image-wrapper">
        <img src={image} alt={title} className="project-image" />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <motion.span
          className="explore-button interactive"
          whileHover={{
            scale: 1.1,
            backgroundColor: "#fff",
            color: "#000",
          }}
        >
          Explore
        </motion.span>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Artificial Intelligence Engineer",
      description: "Build intelligent systems with Gen AI, NLP, and ML models.",
      image:
        "https://plus.unsplash.com/premium_photo-1677269465314-d5d2247a0b0c?fm=jpg&q=60&w=3000",
    },
    {
      title: "Full-Stack Developer with Gen AI",
      description: "Master frontend, backend, and integrate Gen AI APIs.",
      image:
        "https://plus.unsplash.com/premium_photo-1716396589811-69274847ce9f?fm=jpg&q=60&w=3000",
    },
    {
      title: "Cloud & DevOps Engineer",
      description: "Deploy scalable apps using AWS, Docker, and Kubernetes.",
      image:
        "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?q=80&w=1032",
    },
    {
      title: "Data Scientist",
      description:
        "Turn raw data into insights using Python, Pandas, and AI tools.",
      image:
        "https://plus.unsplash.com/premium_photo-1682126325927-0e6399d5d170?fm=jpg&q=60&w=3000",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="projects-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <h2 className="projects-title">Featured projects</h2>
      <motion.div className="projects-grid" variants={containerVariants}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            animateProps={{
              variants: itemVariants,
              viewport: { once: true },
            }}
          />
        ))}
      </motion.div>
      <AnimatedButton
        text="View all projects"
        onClick={() => console.log("Go to projects page")}
      />
    </motion.section>
  );
};

export default ProjectsSection;
