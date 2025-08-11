import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import bgImage from "../assets/backgroundimg.png";
export default function Screen1() {
  return (
    <>
      {/* Background Layer */}
      <ParallaxLayer
        offset={0}
        speed={0.5}
        factor={2}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.5)",
          zIndex: -1,
        }}
      />

      {/* Foreground Content */}
      <ParallaxLayer
        offset={0}
        speed={0}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem", // space between h1 and p
            maxWidth: "600px",
            padding: "0 1rem",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{
              fontSize: "5rem",
              fontWeight: "900",
              color: "#fff",
              userSelect: "none",
              margin: 0,
              textAlign: "center",
            }}
          >
            Zynapse
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1, ease: "easeOut" }}
            style={{
              fontSize: "2.1rem",
              lineHeight: "1.6",
              color: "#F5F5F5", // soft white for better contrast on grey
              margin: 0,
              textAlign: "center",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              textShadow: "0px 2px 6px rgba(0,0,0,0.3)", // improves readability
            }}
          >
            <span style={{ color: "#9fa1fbff" }}>Smart Systems.</span> Seamless
            Decisions.
          </motion.p>
        </div>
      </ParallaxLayer>
    </>
  );
}
