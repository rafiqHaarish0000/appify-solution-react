import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import "../styles/screens.css";
import bgAiImage from "../assets/aiimage.jpeg";
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
        speed={0}
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
          display: "flex",
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
              color: "#fff",
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
              backgroundColor: "#000", // black bg
              padding: "14px 32px",
              color: "white", // white text
              fontWeight: "700",
              borderRadius: "9999px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#222")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#000")
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
              gap: "24px",
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
                  width: "320px",
                  height: "500px",
                  borderRadius: "12px",
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  cursor: "pointer",
                  overflow: "hidden",
                }}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                {/* Background dim on hover */}
                <motion.div
                  variants={{
                    rest: { filter: "brightness(1)" },
                    hover: { filter: "brightness(0.5)" },
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "12px",
                    pointerEvents: "none",
                  }}
                />

                {/* Overlay content */}
                <motion.div
                  variants={{
                    rest: { opacity: 0, y: 20 },
                    hover: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
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
                  <h3
                    style={{
                      margin: "0 0 12px",
                      fontWeight: "700",
                      fontSize: "1.5rem",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p style={{ margin: "0 0 20px", color: "#555" }}>
                    {project.description}
                  </p>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#38f9d7",
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
