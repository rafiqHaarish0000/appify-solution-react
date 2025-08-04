import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Cursor from "./components/Cursor";
import Loader from "./components/Loader"; // 👈 Import your loader
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // ⏱ Show loader for 2s
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; // 🌀 Show loader before app starts
  }

  return (
    <Router>
      <Cursor />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
