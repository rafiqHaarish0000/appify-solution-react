import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Intro from './components/Sections/Intro';
import WhatWeDo from './components/Sections/WhatWeDo';
import Services from './components/Sections/Services';
import Products from './components/Sections/Products';
import Research from './components/Sections/Research';
import Contact from './components/Sections/Contact';
import './App.css';

function AppContent() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [activeSection, setActiveSection] = useState('intro');
  const sectionsRef = useRef([]);
  const ticking = useRef(false);
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = useCallback(() => {
    if (location.pathname !== '/') return;
    
    const currentScrollY = window.scrollY;
    
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
        
        sectionsRef.current.forEach((section) => {
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (currentScrollY >= sectionTop - 200 && 
                currentScrollY < sectionTop + sectionHeight - 200) {
              setActiveSection(section.id);
            }
          }
        });
        
        setLastScrollY(currentScrollY);
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [lastScrollY, location.pathname]);

  useEffect(() => {
    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, location.pathname]);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="app">
      <CustomCursor />
      
      <AnimatePresence>
        {showHeader && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 500 }}
          >
            <Header 
              activeSection={activeSection} 
              scrollToSection={scrollToSection} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <Intro ref={addToRefs} />
              <WhatWeDo ref={addToRefs} />
              <Services ref={addToRefs} />
              <Products ref={addToRefs} />
              <Research ref={addToRefs} />
            </>
          } />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;