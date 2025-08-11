import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import "../styles/screens.css";
import bgAiImage from "../assets/robot.jpg";
import bgFullstackImage from "../assets/fullstack.jpg";
import bgCloudImage from "../assets/cloud.jpg";
import bgDataScientist from "../assets/datascience.jpg";
import bgFrontend from "../assets/designer.jpg";
import bgMobile from "../assets/mobileapp.jpg";
import bgWeb from "../assets/consulting.jpg";

const projects = [
  {
    title: "AI Innovation",
    description: "Harnessing artificial intelligence for smarter solutions.",
    image: bgAiImage,
  },
  {
    title: "Fullstack Development",
    description: "Building robust end-to-end web applications.",
    image: bgFullstackImage,
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions for modern enterprises.",
    image: bgCloudImage,
  },
  {
    title: "Data Science Insights",
    description: "Unlocking valuable insights through data analysis.",
    image: bgDataScientist,
  },
  {
    title: "Mobile Experiences",
    description: "Creating seamless and engaging mobile apps.",
    image: bgMobile,
  },
  {
    title: "Frontend Excellence",
    description: "Crafting beautiful and interactive user interfaces.",
    image: bgFrontend,
  },
];

export default function Screen4() {
  const buttonRef = useRef(null);

  return (
    <>
      {/* Background gradient layer */}
      <ParallaxLayer
        offset={3}
        speed={0.2}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.5)",
          zIndex: -1,
        }}
      />

      {/* Title Layer */}
      <ParallaxLayer
        offset={3}
        speed={0.4}
        style={{
          backgroundColor: "#050D21",
          display: "flex",
          height: "200vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <section>
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              color: "#ffff",
              fontSize: "4rem",
              fontWeight: "900",
              letterSpacing: "0.1em",
            }}
          >
            Projects
          </motion.h1>
          <Link
            to="/projects"
            className="contact-button"
            style={{
              fontWeight: "700",
              borderRadius: "9999px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#000")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#9fa1fbff")
            }
          >
            All Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              aria-hidden="true"
              focusable="false"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>

          <div
            style={{
              display: "flex",
              gap: "80px",
              flexWrap: "wrap",
              maxWidth: "1200px",
              margin: "40px auto",
              justifyContent: "center",
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                style={{
                  position: "relative",
                  width: "400px",
                  height: "300px",
                  borderRadius: "12px",
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  cursor: "pointer",
                  border: "2px solid #7375feff",
                  overflow: "hidden",
                }}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                {/* Top title visible by default */}
                <motion.div
                  variants={{
                    rest: { opacity: 1, y: 0 },
                    hover: { opacity: 0, y: -20 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    top: "80%",
                    left: "0%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    fontWeight: "900",
                    fontSize: "1.7rem",
                    color: "#fdfdfdff",
                    textShadow: "0 2px 6px rgba(0,0,0,0.5)",
                    pointerEvents: "none",
                    width: "100%", // ensures text stays centered even if it wraps
                  }}
                >
                  {project.title}
                </motion.div>

                {/* Background dim on hover */}
                <motion.div
                  variants={{
                    rest: { filter: "brightness(1)" },
                    hover: { filter: "brightness(0.2)" },
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "12px",
                    pointerEvents: "none",
                  }}
                />

                {/* Overlay content (description + button) appears on hover */}
                <motion.div
                  variants={{
                    rest: { opacity: 0, y: 20 },
                    hover: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(255,255,255,0.95)",
                    color: "#111",
                    borderRadius: "12px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "24px",
                    textAlign: "center",
                    pointerEvents: "auto",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 20px",
                      color: "#000",
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "1.5rem",
                    }}
                  >
                    {project.description}
                  </p>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#9fa1fbff",
                      color: "black",
                    }}
                    style={{
                      backgroundColor: "#000000ff",
                      border: "none",
                      color: "white",
                      fontWeight: "600",
                      padding: "10px 24px",
                      borderRadius: "9999px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      cursor: "pointer",
                      userSelect: "none",
                      fontSize: "1rem",
                      transition: "background-color 0.3s ease",
                    }}
                  >
                    View Product
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>
      </ParallaxLayer>
    </>
  );
}
