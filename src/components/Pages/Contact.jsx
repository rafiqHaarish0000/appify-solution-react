import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact-page"
    >
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-content">
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
          <div className="contact-info">
            <h2>Our Office</h2>
            <p>123 Appify Street</p>
            <p>Tech City, TC 10001</p>
            <p>Email: info@appify.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
