import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import { Parallax } from "@react-spring/parallax";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import "./App.css";
import bgImage from './assets/backgroundimg.png';

export default function App() {
  const parallaxRef = useRef();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); // 4 sec loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <Router>
      <div className="app-container">
        <CustomCursor />
        <Header parallaxRef={parallaxRef} />
        <Routes>
          <Route path="/" element={<HomePage parallaxRef={parallaxRef} />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}
