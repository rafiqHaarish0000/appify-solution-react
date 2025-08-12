import { ParallaxLayer } from "@react-spring/parallax";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import "../styles/screens.css";
import bgAiImage from "../assets/robot.jpg";
import bgFullstackImage from "../assets/fullstack.jpg";
import bgCloudImage from "../assets/cloud.jpg";
import bgDataScientist from "../assets/datascience.jpg";

const services = [
  {
    title: "AI Innovation",
    image: bgAiImage,
    description:
      "Cutting-edge artificial intelligence solutions tailored to your business needs",
    color: "rgba(106, 17, 203, 0.9)",
  },
  {
    title: "Fullstack Development",
    image: bgFullstackImage,
    description:
      "End-to-end web and mobile applications with modern architectures",
    color: "rgba(21, 101, 192, 0.9)",
  },
  {
    title: "Cloud Infrastructure",
    image: bgCloudImage,
    description:
      "Scalable and secure cloud solutions for enterprises of all sizes",
    color: "rgba(191, 54, 12, 0.9)",
  },
  {
    title: "Data Science Insights",
    image: bgDataScientist,
    description: "Transform your data into actionable business intelligence",
    color: "rgba(56, 142, 60, 0.9)",
  },
];

export default function Screen4() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardBaseStyle = {
    width: "380px",
    height: "220px",
    borderRadius: "18px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "absolute",
    overflow: "hidden",
    zIndex: 1,
    cursor: "pointer",
  };

  const transforms = [
    {
      x: useTransform(scrollYProgress, [0, 1], [-400, 0]),
      y: useTransform(scrollYProgress, [0, 1], [-300, 0]),
      rotate: useTransform(scrollYProgress, [0, 1], [-35, -5]),
      zIndex: useTransform(scrollYProgress, [0, 0.5, 1], [1, 4, 1]),
      scale: useTransform(scrollYProgress, [0, 0.3, 1], [0.8, 0.95, 1]),
    },
    {
      x: useTransform(scrollYProgress, [0, 1], [400, 0]),
      y: useTransform(scrollYProgress, [0, 1], [-250, 50]),
      rotate: useTransform(scrollYProgress, [0, 1], [35, 5]),
      zIndex: useTransform(scrollYProgress, [0, 0.6, 1], [1, 4, 1]),
      scale: useTransform(scrollYProgress, [0, 0.3, 1], [0.8, 0.95, 1]),
    },
    {
      x: useTransform(scrollYProgress, [0, 1], [-350, 0]),
      y: useTransform(scrollYProgress, [0, 1], [300, 0]),
      rotate: useTransform(scrollYProgress, [0, 1], [25, -5]),
      zIndex: useTransform(scrollYProgress, [0, 0.4, 1], [1, 4, 1]),
      scale: useTransform(scrollYProgress, [0, 0.3, 1], [0.8, 0.95, 1]),
    },
    {
      x: useTransform(scrollYProgress, [0, 1], [350, 0]),
      y: useTransform(scrollYProgress, [0, 1], [250, 0]),
      rotate: useTransform(scrollYProgress, [0, 1], [-25, 5]),
      zIndex: useTransform(scrollYProgress, [0, 0.7, 1], [1, 4, 1]),
      scale: useTransform(scrollYProgress, [0, 0.3, 1], [0.8, 0.95, 1]),
    },
  ];

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <>
      <ParallaxLayer
        offset={3}
        speed={0.2}
        style={{
          background: "linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)",
          zIndex: -1,
        }}
      />

      <ParallaxLayer offset={3} speed={0.5}>
        <section
          ref={sectionRef}
          style={{
            minHeight: "100vh",
            background: "#fff",
            borderRadius: "20px",
            padding: "4rem 2rem",
            maxWidth: "1400px",
            margin: "0 auto",
            position: "relative",
            boxShadow: "0 10px 50px rgba(0,0,0,0.15)",
            overflow: "hidden",
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(45deg, #f3f4f6, #e5e7eb)",
              scale: bgScale,
              zIndex: 0,
            }}
          />

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "auto",
            }}
          >
            {services.map((card, i) => {
              const isHovered = hoveredCard === i;
              return (
                <motion.div
                  key={i}
                  style={{
                    ...cardBaseStyle,
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url(${card.image})`,
                    top: i < 2 ? "28%" : "49%",
                    left: i % 2 === 0 ? "20%" : "55%",
                    x: transforms[i].x,
                    y: transforms[i].y,
                  }}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  animate={{
                    rotate: isHovered ? 0 : transforms[i].rotate.get(),
                    scale: isHovered ? 1.15 : transforms[i].scale.get(),
                    zIndex: isHovered ? 30 : transforms[i].zIndex.get(),
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <motion.div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "1.5rem",
                      color: "white",
                      background: `linear-gradient(to top, ${card.color}, transparent)`,
                    }}
                    animate={{
                      opacity: isHovered ? 1 : 0.9,
                      padding: isHovered ? "2rem" : "1.5rem",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        marginBottom: "0.5rem",
                        textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        opacity: 0.9,
                        textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                      }}
                    >
                      {card.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Center Heading & Buttons */}
          <div
            style={{
              textAlign: "center",
              marginTop: "35vh",
              position: "relative",
              zIndex: 2,
            }}
          >
            <motion.h2
              style={{
                fontSize: "3.5rem",
                fontWeight: "800",
                color: "#111",
                marginBottom: "1rem",
                textShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our{" "}
              <span style={{ color: "var(--primary-color)" }}>Services</span>
            </motion.h2>
            <motion.p
              style={{
                fontSize: "1.2rem",
                color: "#444",
                maxWidth: "700px",
                margin: "1.5rem auto",
                lineHeight: "1.6",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              We offer a comprehensive suite of digital solutions designed to
              propel your business into the future with cutting-edge technology.
            </motion.p>
            {/* New Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#9fa1fbff", // black on hover
                color: "#fff",
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex", // flex to align arrow
                alignItems: "center",
                gap: "0.5rem", // space between text and arrow
                marginTop: "1.5rem",
                padding: "0.9rem 2rem",
                fontSize: "1.1rem",
                fontWeight: "600",
                borderRadius: "12px",
                border: "none",
                background: "#000",
                color: "#fff",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Explore Services <span style={{ fontSize: "1.9rem" }}>→</span>
            </motion.button>
          </div>
        </section>
      </ParallaxLayer>
    </>
  );
}
