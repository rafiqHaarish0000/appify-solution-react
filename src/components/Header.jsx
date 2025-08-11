import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/header.css";
import bgImage from "../assets/logo.png";

export default function Header({ parallaxRef }) {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("Intro");
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();
  const observerRef = useRef(null);

  const navItems = [
    { name: "What We Do", offset: 0.8, isRoute: false },
    { name: "Services", offset: 1.9, isRoute: false },
    { name: "Product", offset: 2.6, isRoute: false },
    { name: "Research", offset: 4, isRoute: false },
    { name: "Contact", offset: 2, isRoute: true },
  ];

  // Helper: move indicator to nav item by index
  const moveIndicatorToIndex = useCallback(
    (idx) => {
      const items = Array.from(document.querySelectorAll(".nav-item"));
      const el = items[idx];
      if (!el) return;
      const parentRect = el.parentElement.getBoundingClientRect();
      const left = el.offsetLeft; // relative to parent (ul)
      const width = el.offsetWidth;

      controls.start({
        x: left,
        width,
        transition: { type: "spring", stiffness: 300, damping: 30 },
      });
    },
    [controls]
  );

  // Update indicator based on activeLink name
  const updateIndicatorForName = useCallback(
    (name) => {
      const idx = navItems.findIndex((i) => i.name === name);
      if (idx >= 0) moveIndicatorToIndex(idx);
    },
    [moveIndicatorToIndex]
  );

  // Recompute on resize so widths / positions stay correct
  useEffect(() => {
    const onResize = () => updateIndicatorForName(activeLink);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeLink, updateIndicatorForName]);

  // Initialize indicator once nav items render
  useEffect(() => {
    // small timeout to let DOM paint the nav items
    const t = setTimeout(() => updateIndicatorForName(activeLink), 60);
    return () => clearTimeout(t);
  }, []); // run once on mount

  // Scroll handler: watches parallax position and moves indicator accordingly
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      if (!parallaxRef?.current?.currentPosition) return;

      const currentPosition = parallaxRef.current.currentPosition();
      // find closest nav item
      let closestItem = navItems[0];
      let smallestDiff = Math.abs(navItems[0].offset - currentPosition);

      navItems.forEach((item) => {
        const diff = Math.abs(item.offset - currentPosition);
        if (diff < smallestDiff) {
          smallestDiff = diff;
          closestItem = item;
        }
      });

      if (closestItem.name !== activeLink) {
        setActiveLink(closestItem.name);
        updateIndicatorForName(closestItem.name);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // also call once to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [parallaxRef, activeLink, navItems, updateIndicatorForName]);

  const handleNavigation = (item, index) => {
    setActiveLink(item.name);
    // move indicator immediately on click
    moveIndicatorToIndex(index);

    if (item.isRoute) {
      navigate("/contact");
    } else if (parallaxRef.current) {
      parallaxRef.current.scrollTo(item.offset);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`glass-header ${scrolled ? "scrolled" : ""}`}
    >
      <div className="header-container">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          onClick={() => {
            navigate("/");
            setActiveLink("Intro");
            if (parallaxRef.current) {
              parallaxRef.current.scrollTo(0);
            }
            // move indicator to Intro index (0)
            moveIndicatorToIndex(0);
          }}
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <img
            src={bgImage}
            alt="Appify Logo"
            style={{
              width: "48px",
              height: "48px",
              objectFit: "contain",
            }}
          />
          Zynapase
        </motion.div>

        <nav>
          <ul className="nav-list" style={{ position: "relative" }}>
            {/* active indicator (positioned inside ul) */}
            <motion.span
              className="active-indicator"
              animate={controls}
              initial={{
                x:
                  document.querySelector(".nav-item:first-child")?.offsetLeft ||
                  0,
                width:
                  document.querySelector(".nav-item:first-child")
                    ?.offsetWidth || 0,
              }}
            />
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                className="nav-item"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleNavigation(item, index)}
                ref={index === 0 ? observerRef : null}
                style={{ display: "inline-block", padding: "6px 8px" }}
              >
                <span
                  className={`nav-link ${
                    activeLink === item.name ? "active" : ""
                  }`}
                >
                  {item.name}
                </span>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
