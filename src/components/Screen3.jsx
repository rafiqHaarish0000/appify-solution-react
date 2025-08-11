import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import "../styles/screens.css";
import bgImage from "../assets/building2.jpg";

export default function Screen3() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Fixed number of dots (pages)
  const dotsCount = 4;

  // Scroll to selected index (dot/page)
  function scrollToIndex(index) {
    const container = containerRef.current;
    if (!container) return;

    const card = container.firstChild;
    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width + 24; // card width + gap
    container.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
  }

  // Update active dot on scroll
  function onScroll() {
    const container = containerRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const card = container.firstChild;
    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width + 24;
    const newIndex = Math.round(scrollLeft / cardWidth);

    if (newIndex !== activeIndex) setActiveIndex(newIndex);
  }

  const services = [
    {
      title: "Custom Software Development",
      desc: "Tailored software solutions to meet your business needs.",
    },
    {
      title: "Cloud Integration",
      desc: "Seamless migration and management of cloud infrastructure.",
    },
    {
      title: "Mobile App Development",
      desc: "Native and cross-platform apps for iOS and Android.",
    },
    {
      title: "UI/UX Design",
      desc: "Intuitive and modern designs for great user experiences.",
    },
    {
      title: "Maintenance & Support",
      desc: "Reliable support to keep your software running smoothly.",
    },
    {
      title: "Custom Software Development",
      desc: "Tailored software solutions to meet your business needs.",
    },
    {
      title: "Cloud Integration",
      desc: "Seamless migration and management of cloud infrastructure.",
    },
    {
      title: "Mobile App Development",
      desc: "Native and cross-platform apps for iOS and Android.",
    },
    {
      title: "UI/UX Design",
      desc: "Intuitive and modern designs for great user experiences.",
    },
    {
      title: "Maintenance & Support",
      desc: "Reliable support to keep your software running smoothly.",
    },
  ];

  return (
    <>
      {/* Background layer */}
      <ParallaxLayer
        offset={2}
        speed={0}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.5)",
          zIndex: -1,
        }}
      />

      {/* Content layer */}
      <ParallaxLayer
        offset={2}
        speed={0.4}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <section style={{ padding: "3rem 1rem", textAlign: "center" }}>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }} // slower transition with easing
            style={{
              color: "#fff",
              fontSize: "4rem",
              fontWeight: "900",
              letterSpacing: "0.1em",
            }}
          >
            Our Services
          </motion.h2>

          <motion.div style={{ width: "100%", maxWidth: 1200, margin: "auto" }}>
            <div
              ref={containerRef}
              onScroll={onScroll}
              style={{
                display: "flex",
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                gap: "1.5rem",
                paddingBottom: "2rem",
                justifyContent: "center",
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // IE 10+
              }}
              className="services-carousel"
            >
              {services.map(({ title, desc }, i) => (
                <motion.div
                  key={i}
                  whileHover={{ rotateY: 15, rotateX: 10, scale: 1.05 }}
                  style={{
                    width: "400px",
                    height: "320px", // consistent fixed height
                    flexShrink: 0,
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "16px",
                    padding: "1.5rem",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                    scrollSnapAlign: "center",
                    textAlign: "center",
                    cursor: "pointer",
                    color: "#fff",
                    overflow: "hidden", // prevent overflow
                    transformStyle: "preserve-3d",
                    perspective: 1000,
                    transition: "transform 0.4s ease",
                    userSelect: "none",
                    display: "flex", // flex column layout
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{
                      fontSize: "2rem",
                      marginBottom: "1rem",
                      fontFamily: "'Poppins', sans-serif",
                      color: "#38f9d7",
                      flexShrink: 0,
                      wordBreak: "break-word", // wrap long words nicely
                    }}
                  >
                    {title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                    style={{
                      fontSize: "1.15rem",
                      color: "#ccc",
                      fontFamily: "'Poppins', sans-serif",
                      lineHeight: 1.5,
                      textShadow: "0 0 5px rgba(0,0,0,0.15)",
                      overflowY: "auto", // scroll if text is too long
                      flexGrow: 1, // take remaining space
                      wordBreak: "break-word",
                      margin: 0,
                    }}
                  >
                    {desc}
                  </motion.p>
                </motion.div>
              ))}
            </div>

            {/* Dots */}
            <div
              style={{
                textAlign: "center",
                marginTop: "0.5rem",
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              {[...Array(dotsCount)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  style={{
                    width: i === activeIndex ? 18 : 12,
                    height: i === activeIndex ? 18 : 12,
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    background:
                      i === activeIndex ? "#38f9d7" : "rgba(255,255,255,0.3)",
                    transition: "all 0.3s ease",
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </section>
      </ParallaxLayer>
    </>
  );
}
