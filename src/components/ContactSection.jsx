import React from "react";
import { motion, useMotionValue } from "framer-motion";
import "../styles/ContactSection.css";

const ContactSection = () => {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateAmountX = -(y - centerY) / 20;
    const rotateAmountY = (x - centerX) / 20;

    rotateX.set(rotateAmountX);
    rotateY.set(rotateAmountY);
  };

  const resetRotation = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section className="contact-section">
      <motion.div
        className="contact-card"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotation}
      >
        <h2>Let’s Build Something Together</h2>
        <p>
          Got a project in mind or just want to chat? We’re excited to hear from
          you. Drop your message and we’ll reach out soon.
        </p>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 18px rgba(183, 108, 255, 0.6)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
