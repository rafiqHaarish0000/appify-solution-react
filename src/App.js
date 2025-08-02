import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import FooterSection from "./components/FooterSection";
// import Cursor from "./components/Cursor";

function App() {
  return (
    <div className="App">
      {/* <Cursor /> */}
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <FooterSection />
    </div>
  );
}

export default App;
