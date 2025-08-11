import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import "../styles/screens.css";
import bgWeb from "../assets/lookleft.jpg";

const sampleImage = bgWeb;

const cards = [
  {
    title: "Marketing & Management Online Courses",
    description: "Learn strategies to boost your business success.",
  },
  {
    title: "Learn From the Recognized Experts of Business",
    description: "Get insights and mentorship from industry leaders.",
  },
  {
    title: "Perfect for Improving Your Business Skills",
    description: "Enhance your professional skills with hands-on training.",
  },
];

export default function ResearchScreen() {
  const buttonRef = useRef(null);

  return (
    <>
      {/* Background gradient layer */}
      <ParallaxLayer
        offset={4}
        speed={0}
        style={{
          background: "linear-gradient(135deg, #080808ff 0%, #050505ff 100%)",
          zIndex: -1,
        }}
      />

      {/* Main content container */}
      <ParallaxLayer
        offset={4.2}
        speed={0.3}
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 20px",
        }}
      >
        <section style={{ width: "100%" }}>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }} // slower
            style={{
              background: "rgba(255 255 255 / 0.8)",
              backdropFilter: "blur(12px)",
              borderRadius: "20px",
              boxShadow: "0 16px 40px rgba(0,0,0,0.1)",
              maxWidth: "1200px",
              width: "100%",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              padding: "40px",
            }}
          >
            {/* Top section */}
            <div
              style={{
                display: "flex",
                gap: "40px",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Left Text */}
              <div style={{ flex: "1 1 350px", minWidth: "280px" }}>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.6, ease: "easeOut" }}
                  style={{
                    fontWeight: "900",
                    fontSize: "2.8rem",
                    marginBottom: "16px",
                    color: "#111",
                  }}
                >
                  Professional Business Education for You
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.6, delay: 0.2, ease: "easeOut" }}
                  style={{
                    fontSize: "1.1rem",
                    color: "#444",
                    marginBottom: "32px",
                    lineHeight: 1.5,
                  }}
                >
                  Business school prepares ambitious leaders with corporate
                  business frameworks from all corners of the world.
                </motion.p>
                <motion.div
                  ref={buttonRef}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
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
                      textDecoration: "none",
                      boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
                      transition: "background-color 0.3s ease, color 0.3s ease",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#38f9d7";
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
                initial={{ opacity: 0, x: 50, rotateY: 20 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
                whileHover={{
                  rotateY: 10,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 150 },
                }}
                style={{
                  flex: "1 1 320px",
                  maxWidth: "400px",
                  width: "100%",
                  borderRadius: "20px",
                  objectFit: "cover",
                  boxShadow: "0 16px 30px rgba(0,0,0,0.1)",
                  border: "3px solid #38f9d7",
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>

            {/* Bottom Cards */}
            <div
              style={{
                marginTop: "48px",
                display: "flex",
                gap: "24px",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {cards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.4 * i,
                    duration: 1.4,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
                  }}
                  style={{
                    background: "rgba(255 255 255 / 0.85)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "16px",
                    padding: "24px",
                    flex: "1 1 280px",
                    boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
                    cursor: "default",
                    color: "#222",
                  }}
                >
                  <h3 style={{ fontWeight: "700", marginBottom: "12px" }}>
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.4,
                      color: "#555",
                    }}
                  >
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </ParallaxLayer>
    </>
  );
}
