// src/components/Sections/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Section.css";

const Contact = () => {
  return (
    <motion.section
      className="layout-section contact-layout"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-content">
        <h1>Contact Us</h1>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
          <div className="contact-info">
            <h2>Our Office</h2>
            <p>Email: info@appify.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Tech Street, Silicon Valley</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
