import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import { Parallax } from "@react-spring/parallax";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

export default function App() {
  const parallaxRef = useRef();

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
