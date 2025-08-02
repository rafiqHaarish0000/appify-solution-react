import React, { useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import "./App.css"; // This CSS file will now manage the custom scrollbar
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import FooterSection from "./components/FooterSection";
import Cursor from "./components/Cursor";
import ServiceSection from "./components/ServiceSection";
import BlogSection from "./components/BlogSection";
import IntoSection from "./components/IntroSection";
import ContactSection from "./components/ContactSection";

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  // Use useTransform to create a custom scrolling effect
  // The final value (-2000) is a guess; you'll need to adjust this
  // based on the total height of your content.
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="App">
      <Cursor />
      <div className="scroll-container" ref={containerRef}>
        <motion.div className="content-wrapper" style={{ y }}>
          <Header />
          <HeroSection />
          <IntoSection/>
              <ServiceSection/>
          <ProjectsSection />
          <BlogSection/>
            {/* <AboutSection /> */}
          <ContactSection/>
        </motion.div>
      </div>
    </div>
  );
}

export default App;