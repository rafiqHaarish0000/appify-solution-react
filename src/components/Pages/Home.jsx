import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Intro from "../Sections/Intro";
import WhatWeDo from "../Sections/WhatWeDo";
import Services from "../Sections/Services";
import Products from "../Sections/Products";
import Research from "../Sections/Research";
import "./Home.css";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="home-page">
      <Intro id="intro" />
      <WhatWeDo id="what-we-do" />
      <Services id="services" />
      <Products id="products" />
      <Research id="research" />
    </div>
  );
};

export default Home;
