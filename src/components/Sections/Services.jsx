import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    title: "Running Wild with Bear Grylls",
    img: "https://your-image-link1.jpg",
    btnText: "Watch Now",
  },
  {
    title: "The Incredible Dr...",
    img: "https://your-image-link2.jpg",
    btnText: "Watch Now",
  },
  {
    title: "Unknown Title",
    img: "https://your-image-link3.jpg",
    btnText: "Watch Now",
  },
  {
    title: "More Adventures",
    img: "https://your-image-link4.jpg",
    btnText: "Watch Now",
  },
  {
    title: "Final Card",
    img: "https://your-image-link5.jpg",
    btnText: "Watch Now",
  },
];

export default function StackedCarousel() {
  const [activeIndex, setActiveIndex] = useState(Math.floor(cards.length / 2));
  const cardCount = cards.length;

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + cardCount) % cardCount);
  };
  const next = () => {
    setActiveIndex((prev) => (prev + 1) % cardCount);
  };

  const getCardStyle = (index) => {
    const offset = index - activeIndex;

    if (offset === 0) {
      return {
        zIndex: 10,
        scale: 1,
        x: 0,
        opacity: 1,
        filter: "brightness(1)",
        pointerEvents: "auto",
      };
    }

    if (offset < 0) {
      const absOffset = Math.abs(offset);
      return {
        zIndex: 10 - absOffset,
        scale: 1 - 0.15 * absOffset,
        x: -180 * absOffset,
        opacity: 1 - 0.3 * absOffset,
        filter: "brightness(0.7)",
        pointerEvents: "none",
      };
    }

    if (offset > 0) {
      return {
        zIndex: 10 - offset,
        scale: 1 - 0.15 * offset,
        x: 180 * offset,
        opacity: 1 - 0.3 * offset,
        filter: "brightness(0.7)",
        pointerEvents: "none",
      };
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "700px",
        height: "420px",
        margin: "0 auto",
        perspective: 1500,
        overflow: "visible",
        userSelect: "none",
      }}
    >
      {/* Our Services Text */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          padding: "10px 20px",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "#fff",
          borderRadius: "8px",
          fontWeight: "bold",
          zIndex: 1000,
        }}
      >
        Our Services
      </div>

      {/* Cards container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {cards.map((card, index) => {
          const style = getCardStyle(index);
          return (
            <motion.div
              key={index}
              initial={false}
              animate={{
                x: style.x,
                scale: style.scale,
                opacity: style.opacity,
                filter: style.filter,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                position: "absolute",
                width: "320px",
                height: "400px",
                borderRadius: "12px",
                backgroundImage: `url(${card.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                cursor: style.pointerEvents === "auto" ? "pointer" : "default",
                zIndex: style.zIndex,
                top: 0,
                left: "50%",
                marginLeft: "-160px",
                userSelect: "none",
              }}
              onClick={() => {
                if (index !== activeIndex) setActiveIndex(index);
              }}
            >
              {/* Overlay for text */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  right: "20px",
                  color: "#fff",
                  textShadow: "0 0 8px rgba(0,0,0,0.7)",
                  fontWeight: "700",
                }}
              >
                <h2 style={{ marginBottom: "12px", fontSize: "1.5rem" }}>
                  {card.title}
                </h2>
                <button
                  style={{
                    backgroundColor: "#ffd500",
                    border: "none",
                    borderRadius: "6px",
                    padding: "10px 20px",
                    fontWeight: "700",
                    cursor: "pointer",
                    color: "#000",
                    fontSize: "1rem",
                    transition: "background-color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#ffde47")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#ffd500")
                  }
                >
                  {card.btnText}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation */}
      <button
        onClick={prev}
        style={{
          position: "absolute",
          top: "50%",
          left: "-60px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          border: "none",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          cursor: "pointer",
          color: "#fff",
          fontSize: "2rem",
          userSelect: "none",
        }}
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={next}
        style={{
          position: "absolute",
          top: "50%",
          right: "-60px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          border: "none",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          cursor: "pointer",
          color: "#fff",
          fontSize: "2rem",
          userSelect: "none",
        }}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}
