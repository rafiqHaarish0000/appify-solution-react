import { ParallaxLayer } from "@react-spring/parallax";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import "../styles/screens.css";
import sampleVideo from "../assets/blackcube.mp4";

export default function Screen2() {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible");
    };
    sequence();
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        mass: 0.5,
        velocity: 0,
      },
    },
  };

  const lineVariants = {
    hidden: {
      scaleX: 0,
      opacity: 0,
    },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        delay: 0.2,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        delay: 0.8,
      },
    },
  };

  return (
    <>
      <ParallaxLayer
        offset={1}
        speed={0.2}
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        {/* Video Background with slow-motion effect */}
        <motion.video
          src={sampleVideo}
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 4, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.5)",
            zIndex: 0,
          }}
        />

        {/* Glass Card with staggered animations */}
        <motion.div
          className="glass-card"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{
            position: "relative",
            zIndex: 1,
            padding: "3rem 2rem",
            maxWidth: "600px",
            textAlign: "center",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Title with dramatic entrance */}
          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: "3rem",
              fontWeight: "900",
              marginBottom: "1rem",
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            What We Do
          </motion.h2>

          {/* Animated gradient line */}
          <motion.div
            variants={lineVariants}
            style={{
              width: "100px",
              height: "4px",
              background: "linear-gradient(90deg, #111c95ff, #00e5ff)",
              borderRadius: "2px",
              marginBottom: "1.5rem",
              transformOrigin: "left center",
              boxShadow: "0 0 15px rgba(0, 229, 255, 0.5)",
            }}
          />

          {/* Text with floating effect */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "1.4rem",
              color: "#d0d4f7",
              marginBottom: "2rem",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            We create innovative digital solutions that transform businesses and
            deliver exceptional user experiences.
          </motion.p>

          {/* Button with delayed entrance */}
          <motion.button
            variants={buttonVariants}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#fff",
              color: "#000",
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "0.75rem 2rem",
              fontSize: "1.2rem",
              fontWeight: "600",
              borderRadius: "30px",
              border: "2px solid #074ADE",
              backgroundColor: "transparent",
              color: "#fff",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </ParallaxLayer>
    </>
  );
}
