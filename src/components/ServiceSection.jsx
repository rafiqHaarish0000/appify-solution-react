// components/ServiceSection.jsx
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./ServiceSection.css";

const services = [
  {
    title: "Web Design",
    description: "Modern, clean UI/UX with responsive design.",
  },
  {
    title: "App Development",
    description: "Cross-platform mobile apps with Flutter/React Native.",
  },
  {
    title: "Branding",
    description: "Logo design, brand strategy & visual identity.",
  },
  {
    title: "SEO",
    description: "Improve search visibility with keyword optimization.",
  },
];

const ServiceSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="service-section">
      <motion.div className="service-header" style={{ y }}>
        <h2>Our Services</h2>
      </motion.div>

      <div className="service-list">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
