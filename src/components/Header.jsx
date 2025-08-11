import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
    { name: "Intro", offset: 0, isRoute: false },
    { name: "What We Do", offset: 0.8, isRoute: false },
    { name: "Services", offset: 1.9, isRoute: false },
    { name: "Product", offset: 2.9, isRoute: false },
    { name: "Research", offset: 3.9, isRoute: false },
    { name: "Contact", offset: 2, isRoute: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      if (parallaxRef.current) {
        const currentPosition = parallaxRef.current.currentPosition();
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
          controls.start({
            x:
              document.querySelector(
                `.nav-item:nth-child(${
                  navItems.findIndex((i) => i.name === closestItem.name) + 1
                })`
              )?.offsetLeft || 0,
            width:
              document.querySelector(
                `.nav-item:nth-child(${
                  navItems.findIndex((i) => i.name === closestItem.name) + 1
                })`
              )?.offsetWidth || 0,
            transition: { type: "spring", stiffness: 300, damping: 30 },
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [parallaxRef, activeLink]);

  const handleNavigation = (item) => {
    setActiveLink(item.name);
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
          }}
          style={{ display: "flex", alignItems: "center", gap: "8px" }} // keep logo & text aligned
        >
          <img
            src={bgImage} // replace with actual path
            alt="Appify Logo"
            style={{
              width: "90px", // smaller width
              height: "90px", // smaller height
              objectFit: "fit",
            }}
          />
          Appify
        </motion.div>

        <nav>
          <ul className="nav-list">
            <motion.span
              className="active-indicator"
              animate={controls}
              initial={{
                x: 0,
                width:
                  document.querySelector(".nav-item:first-child")
                    ?.offsetWidth || 0,
              }}
            />
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                className="nav-item"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleNavigation(item)}
                ref={index === 0 ? observerRef : null}
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
