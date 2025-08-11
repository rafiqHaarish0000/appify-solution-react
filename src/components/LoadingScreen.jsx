import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/loading.css";
import loadingVideo from "../assets/loading.mp4";

export default function LoadingScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof onFinish === "function") {
        onFinish();
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="loading-container"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <video autoPlay loop muted className="loading-video">
        <source src={loadingVideo} type="video/mp4" />
      </video>

      {/* 3D cube */}
      <motion.div
        className="cube"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "linear",
        }}
      >
        <div className="face front" />
        <div className="face back" />
        <div className="face right" />
        <div className="face left" />
        <div className="face top" />
        <div className="face bottom" />
      </motion.div>

      {/* Futuristic loading text */}
      <motion.h1
        className="loading-text"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Code the Future, One Click at a Time
      </motion.h1>
    </motion.div>
  );
}
