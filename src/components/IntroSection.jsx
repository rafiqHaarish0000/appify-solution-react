import { motion } from "framer-motion";
import "../styles/CubertoLayout.css";
import videoUrl from "../assets/sphere.mp4";

const IntoSection = () => {
  return (
    <section id="company" className="cuberto-layout">
      {/* Video Section with bounce & fade-in */}
      <motion.div
        className="cuberto-image"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 15, duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.video
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0, scale: 0.8, rotate: -5, y: -30 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            borderRadius: "20px",
            objectFit: "cover",
            width: "320px",
            height: "200px",
            maxWidth: "100%",
            display: "block",
            margin: "10px auto 1rem auto",
            transition: "transform 0.4s ease, box-shadow 0.4s ease",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
          }}
          whileHover={{
            scale: 1.05,
            rotate: 1,
          }}
        />
      </motion.div>

      {/* Text Block */}
      <motion.div
        className="cuberto-text"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
        >
          Since 2010, we have been helping our clients find exceptional
          solutions for their businesses, creating memorable websites and
          digital products.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
        >
          Cuberto doesn't do cookie-cutter solutions. We build products exactly
          as envisioned during the design phase — no shortcuts, no compromises.
        </motion.p>

        <motion.button
          className="cuberto-button"
          whileHover={{
            scale: 1.08,
            backgroundColor: "#b76cff",
            color: "#000",
            boxShadow: "0 0 12px #b76cff",
          }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          What we do
        </motion.button>
      </motion.div>
    </section>
  );
};

export default IntoSection;
