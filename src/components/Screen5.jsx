import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import "../styles/screens.css";
import bgWeb from "../assets/lookleft.jpg";
import backbg from "../assets/backgroundimg.png";

const sampleImage = bgWeb;

const cards = [
  {
    id: 1,
    color: "#9fa1fb",
    hoverColor: "#ff7675",
    title: "Innovative Strategies",
    description: "Explore cutting-edge methods to drive your business forward.",
    highlight: "Growth Mindset",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    color: "#74b9ff",
    hoverColor: "#ffeaa7",
    title: "Global Networking",
    description: "Connect with leaders from around the world.",
    highlight: "Collaboration",
    image:
      "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    color: "#55efc4",
    hoverColor: "#fd79a8",
    title: "Sustainable Practices",
    description: "Learn how to balance profit with environmental impact.",
    highlight: "Eco Leadership",
    image:
      "https://plus.unsplash.com/premium_photo-1661602011150-6c6f8b9ba788?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    color: "#fab1a0",
    hoverColor: "#a29bfe",
    title: "Market Analysis",
    description: "Gain insights into industry trends and opportunities.",
    highlight: "Data Driven",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    color: "#81ecec",
    hoverColor: "#dfe6e9",
    title: "Leadership Development",
    description: "Unlock your potential with proven leadership frameworks.",
    highlight: "Lead with Impact",
    image:
      "https://images.unsplash.com/photo-1628125660717-5190c3fdfb86?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    color: "#fdcb6e",
    hoverColor: "#636e72",
    title: "Financial Planning",
    description: "Master budgeting, investment, and risk management.",
    highlight: "Strategic Finance",
    image:
      "https://images.unsplash.com/photo-1672825464619-79acee9f7e29?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function ResearchScreen() {
  const buttonRef = useRef(null);

  return (
    <>
      <ParallaxLayer
        offset={4}
        speed={0}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.5)",
          zIndex: -1,
        }}
      />

      {/* Main content container */}
      <ParallaxLayer
        offset={4}
        speed={0.3}
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 20px",
        }}
      >
        <section
          style={{
            width: "100%",
            minHeight: "100vh",
            overflow: "visible",
            padding: "50px 0",
          }}
        >
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }} // slower entrance
            style={{
              background: "rgba(255 255 255 / 0.2)",
              backdropFilter: "blur(12px)",
              borderRadius: "20px",
              boxShadow: "0 16px 40px rgba(0,0,0,0.1)",
              maxWidth: "1200px",
              width: "100%",
              maxHeight: "650px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              padding: "40px",
              overflow: "visible",
            }}
          >
            {/* Top section stays same */}
            <div
              style={{
                display: "flex",
                gap: "40px",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                overflow: "visible",
              }}
            >
              {/* Left Text */}
              <div style={{ flex: "1 1 350px", minWidth: "280px" }}>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, ease: "easeOut" }} // slow fade-in
                  style={{
                    fontWeight: "900",
                    fontSize: "2.8rem",
                    marginBottom: "16px",
                    color: "#fff",
                  }}
                >
                  Professional Business Education for You
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
                  style={{
                    fontSize: "1.1rem",
                    color: "#b3b4f8ff",
                    marginBottom: "32px",
                    lineHeight: 1.5,
                  }}
                >
                  Our team prepares ambitious leaders with corporate business
                  frameworks from all corners of the world.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.03 }}
                  style={{ display: "inline-block" }}
                >
                  <Link
                    to="/contact"
                    style={{
                      backgroundColor: "#111",
                      color: "#fff",
                      padding: "14px 36px",
                      borderRadius: "9999px",
                      fontWeight: "700",
                      cursor: "none",
                      textDecoration: "none",
                      boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#9fa1fbff";
                      e.currentTarget.style.color = "#111";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#111";
                      e.currentTarget.style.color = "#fff";
                    }}
                  >
                    Reach Us
                  </Link>
                </motion.div>
              </div>

              {/* Right Image */}
              <motion.img
                src={sampleImage}
                alt="Business Education"
                initial={{ opacity: 0, x: 60, rotateY: 25 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 2.2, ease: "easeInOut" }} // slow entrance
                whileHover={{
                  rotateY: 10,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 120 },
                }}
                style={{
                  flex: "1 1 320px",
                  maxWidth: "400px",
                  width: "100%",
                  borderRadius: "20px",
                  objectFit: "cover",
                  boxShadow: "0 16px 30px rgba(0,0,0,0.1)",
                  border: "3px solid #7375feff",
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "120px", opacity: 1 }}
              transition={{ duration: 4, ease: "easeOut", delay: 2 }} // slower line
              style={{
                height: "4px",
                background: "linear-gradient(90deg, #111c95ff, #00e5ff)",
                margin: "0 auto 1.5rem auto",
                borderRadius: "2px",
              }}
            />

            {/* Horizontal Auto Scroll Cards */}
            <div
              style={{
                marginTop: "2px",
                overflow: "visible",
                position: "relative",
                padding: "60px 0",
              }}
            >
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 200, // double the duration for very slow scroll
                }}
                style={{
                  display: "flex",
                  gap: "20px",
                  padding: "0 10px",
                  width: "max-content",
                  alignItems: "center",
                }}
              >
                {[...Array(12)].map((_, i) => {
                  const cardData = cards[i % cards.length];
                  return (
                    <motion.div
                      key={i}
                      initial={{ rotate: -4, backgroundColor: "transparent" }}
                      whileHover={{
                        rotate: 10,
                        backgroundColor: "rgba(0,0,0,0.2)",
                        color: "#fff",
                        scale: 1.05,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 18,
                      }}
                      style={{
                        width: "350px",
                        height: "300px",
                        borderRadius: "16px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
                        border: `2px solid ${cardData.color}`,
                        position: "relative",
                        flexShrink: 0,
                        cursor: "pointer",
                        color: "#fff",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundImage: `url(${cardData.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          zIndex: 0,
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          height: "80%",
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                          zIndex: 1,
                        }}
                      />
                      <div
                        style={{ zIndex: 2, padding: "24px", width: "100%" }}
                      >
                        <h3
                          style={{
                            fontWeight: "800",
                            fontSize: "1.5rem",
                            margin: "0 0 12px 0",
                            lineHeight: "1.2",
                            textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                          }}
                        >
                          {cardData.title}
                        </h3>
                        <p
                          style={{
                            fontSize: "1rem",
                            margin: 0,
                            textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                            lineHeight: "1.4",
                          }}
                        >
                          {cardData.description}
                        </p>
                        {cardData.highlight && (
                          <p
                            style={{
                              fontSize: "1rem",
                              fontWeight: "600",
                              color: cardData.color,
                              marginTop: "12px",
                              textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                            }}
                          >
                            {cardData.highlight}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </section>
      </ParallaxLayer>
    </>
  );
}
