import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/header.css";
import bgImage from "../assets/logo.png";

export default function Header({ parallaxRef }) {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(null); // Start with no active link
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();
  const navListRef = useRef(null);
  const rafRef = useRef();
  const lastActiveRef = useRef(null);

  // Only include sections we want indicators for
  const navItems = [
    { name: "What We Do", offset: 0.95, isRoute: false },
    { name: "Services", offset: 1.95, isRoute: false },
    { name: "Product", offset: 2.9, isRoute: false },
    { name: "Research", offset: 4.5, isRoute: false },
    // Contact is included but won't get automatic indicator
    { name: "Contact", offset: 4.95, isRoute: true, noIndicator: true },
  ];

  const moveIndicator = useCallback(
    (index) => {
      if (!navListRef.current || index === null) {
        // Hide indicator if no active section
        controls.start({ opacity: 0 });
        return;
      }

      const items = navListRef.current.querySelectorAll(".nav-item");
      if (!items[index]) return;

      const item = items[index];
      const left = item.offsetLeft;
      const width = item.offsetWidth;

      controls.start({
        x: left,
        width,
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 30 },
      });
    },
    [controls]
  );

  useEffect(() => {
    const index = navItems.findIndex((item) => item.name === activeLink);
    moveIndicator(index);
  }, [activeLink, navItems, moveIndicator]);

  useEffect(() => {
    if (!parallaxRef?.current) return;

    const checkParallaxPosition = () => {
      try {
        setScrolled(window.scrollY > 50);

        const container = parallaxRef.current.container.current;
        if (!container) return;

        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight;
        const clientHeight = container.clientHeight;
        const maxScroll = scrollHeight - clientHeight;
        const currentPos = (scrollTop / maxScroll) * 5.5;

        // Only activate indicators after passing first screen (position > 0.5)
        if (currentPos < 0.5) {
          if (lastActiveRef.current !== null) {
            lastActiveRef.current = null;
            setActiveLink(null);
          }
          rafRef.current = requestAnimationFrame(checkParallaxPosition);
          return;
        }

        let activeItem = null;

        // Find the first section where currentPos has passed its offset
        for (let i = navItems.length - 2; i >= 0; i--) {
          // Skip last item (Contact)
          if (currentPos >= navItems[i].offset - 0.15) {
            activeItem = navItems[i];
            break;
          }
        }

        // Only update if different from last active
        if (activeItem?.name !== lastActiveRef.current) {
          lastActiveRef.current = activeItem?.name || null;
          setActiveLink(activeItem?.name || null);
        }

        rafRef.current = requestAnimationFrame(checkParallaxPosition);
      } catch (error) {
        console.error("Parallax tracking error:", error);
      }
    };

    rafRef.current = requestAnimationFrame(checkParallaxPosition);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [parallaxRef, navItems]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      moveIndicator(null); // Start with no indicator
    }, 100);

    return () => clearTimeout(timeout);
  }, [moveIndicator]);

  const handleNavClick = (item, index) => {
    setActiveLink(item.name);
    if (item.isRoute) {
      navigate("/contact");
    } else if (parallaxRef?.current) {
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
            setActiveLink(null);
            parallaxRef?.current?.scrollTo(0);
          }}
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <img
            src={bgImage}
            alt="Logo"
            style={{ width: "48px", height: "48px" }}
          />
          Zynapase
        </motion.div>

        <nav>
          <ul
            className="nav-list"
            ref={navListRef}
            style={{ position: "relative" }}
          >
            <motion.span
              className="active-indicator"
              initial={{ opacity: 0 }}
              animate={controls}
              style={{
                position: "absolute",
                bottom: 0,
                height: "2px",
                borderRadius: "1px",
                zIndex: 10,
              }}
            />
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                className="nav-item"
                whileHover={!item.isRoute ? { scale: 1.05 } : undefined}
                onClick={() => handleNavClick(item, index)}
                style={{
                  display: "inline-block",
                  padding: item.isRoute ? "0" : "6px 8px", // Remove padding from li for Contact
                  cursor: "none",
                  position: "relative",
                  zIndex: 1,
                  marginLeft: item.isRoute ? "12px" : "0", // Add spacing before Contact button
                }}
              >
                <span
                  className={`nav-link ${
                    activeLink === item.name ? "active" : ""
                  }`}
                >
                  {item.name}
                  {item.isRoute && <span />}
                </span>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
