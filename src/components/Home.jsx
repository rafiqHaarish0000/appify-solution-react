// Home.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Cursor from "./Cursor";
import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import ServiceSection from "./ServiceSection";
import ProjectsSection from "./ProjectsSection";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";

function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="home-page">
      <Cursor />
      <div className="scroll-container" ref={containerRef}>
        <motion.div className="content-wrapper" style={{ y }}>
          <HeroSection />
          <IntroSection />
          <ServiceSection />
          <ProjectsSection />
          <BlogSection />
          <ContactSection />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
