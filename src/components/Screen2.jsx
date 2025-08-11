import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import "../styles/screens.css";
import sampleVideo from "../assets/blackcube.mp4";
import bgImage from "../assets/bgimage.jpg";

export default function Screen2() {
  return (
    <>
      <ParallaxLayer
        offset={1}
        speed={0.2}
        style={{
          backgroundColor: "#050D21",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          height: "100vh",
          width: "100%",
        }}
      >
        <motion.div
          className="content-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            display: "flex",
            maxWidth: "1200px",
            width: "90%",
            margin: "0 auto",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Image Card (Left Side) */}
          <motion.div
            className="image-card"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              flex: 1,
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              aspectRatio: "4/5",
              maxHeight: "600px",
            }}
          >
            <motion.video
              src={sampleVideo}
              autoPlay
              loop
              muted
              playsInline
              initial={{ opacity: 0, scale: 0.95, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 2, duration: 3, ease: "easeOut" }}
              whileHover={{
                transition: { duration: 0.8, ease: "easeInOut" },
              }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "16px",
                cursor: "none",
              }}
            />
          </motion.div>

          {/* Text Content (Right Side) */}
          <motion.div
            className="glass-card"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              flex: 1,
              maxWidth: "500px",
              borderRadius: "20px",
              padding: "2rem",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                fontSize: "3.5rem",
                color: "#7375feff",
                textAlign: "center",
                fontSize: "4rem",
                fontWeight: "900",
                letterSpacing: "0.1em",
              }}
            >
              What We Do
            </h2>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "120px", opacity: 1 }}
              transition={{ duration: 3, ease: "easeOut", delay: 2 }}
              style={{
                height: "4px",
                background: "linear-gradient(90deg, #111c95ff, #00e5ff)",
                margin: "0 auto 1.5rem auto",
                borderRadius: "2px",
              }}
            />
            <p
              style={{
                fontSize: "2.1rem",
                lineHeight: "1.6",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              We create innovative digital solutions that transform businesses
              and deliver exceptional user experiences.
            </p>

            <button
              style={{
                padding: "0.75rem 2rem",
                fontSize: "1.6rem",
                fontWeight: "600",
                borderRadius: "30px",
                border: "2px solid #074ADE",
                backgroundColor: "transparent",
                color: "#fff",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#fff";
                e.currentTarget.style.color = "#000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#fff";
              }}
            >
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </ParallaxLayer>
    </>
  );
}
