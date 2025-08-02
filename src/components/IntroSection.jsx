import { motion } from "framer-motion";
import "./CubertoLayout.css"; // We'll write styles here
import videoUrl from "../assets/sphere.mp4";

const IntoSection = () => {
  return (
    <section className="cuberto-layout">
      <motion.div
        className="cuberto-image"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.video
          src={videoUrl}
          autoPlay
          //   loop
          muted
          playsInline
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            marginTop: "10px",
            borderRadius: "20px",
            objectFit: "cover",
            marginBottom: "1rem",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            width: "300px", // Set fixed smaller width
            height: "200px", // Set fixed smaller height
            maxWidth: "100%", // Responsive fallback
            display: "block", // For centering
            marginLeft: "auto", // Centering
            marginRight: "auto", // Centering
          }}
        />
      </motion.div>

      <motion.div
        className="cuberto-text"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true }}
      >
        <p>
          Since 2010, we have been helping our clients find exceptional
          solutions for their businesses, creating memorable websites and
          digital products.
        </p>
        <p>
          Cuberto doesn't do cookie-cutter solutions and we build products
          exactly as they were during the design phase, no short cuts or
          simplifications.
        </p>
        <motion.button
          className="cuberto-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          What we do
        </motion.button>
      </motion.div>
    </section>
  );
};

export default IntoSection;
