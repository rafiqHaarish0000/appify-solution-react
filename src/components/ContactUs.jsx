// src/components/ContactUs.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "../styles/ContactUs.css";
import PageTransition from "./PageTransition";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const locations = [
  {
    country: "India",
    address: "Bangalore, Karnataka, India",
    position: [12.9716, 77.5946],
  },
  {
    country: "United States",
    address: "New York, NY, USA",
    position: [40.7128, -74.006],
  },
  {
    country: "Singapore",
    address: "Marina Bay, Singapore",
    position: [1.283, 103.8603],
  },
  {
    country: "Malaysia",
    address: "Kuala Lumpur, Malaysia",
    position: [3.139, 101.6869],
  },
];

const contactActions = [
  {
    title: "Chat with Support",
    description:
      "Our team is available 24/7 to answer your questions via live chat.",
    icon: "💬",
    buttonText: "Start Chat",
    isAction: true,
  },
  {
    title: "Call Us",
    description: "Speak directly with our support team for urgent inquiries.",
    icon: "📞",
    buttonText: "Call Now",
    isAction: true,
  },
  {
    title: "Visit Us",
    description:
      "Stop by one of our offices for face-to-face assistance in person.",
    icon: "📍",
    buttonText: "Book Visit",
    isAction: true,
  },
  {
    title: "Send a Message",
    description:
      "Leave us a message and we'll get back to you within 24 hours.",
    icon: "✉️",
    buttonText: "Send Message",
    isAction: true,
  },
];

const ContactUs = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <PageTransition>
      <div className="contact-page">
        {/* Mobile Hamburger Menu */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
        )}

        <h1>Contact Our Global Teams</h1>
        <p className="subtitle">
          We’re available in 4 countries to serve you better.
        </p>

        <div className="map-wrapper">
          <MapContainer
            center={[20, 0]}
            zoom={2}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="© OpenStreetMap"
            />
            {locations.map((loc) => (
              <Marker
                position={loc.position}
                icon={markerIcon}
                key={loc.country}
              >
                <Popup>
                  <strong>{loc.country}</strong>
                  <br />
                  {loc.address}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div className="card-grid">
          {contactActions.map((action, i) => (
            <motion.div
              className={`location-card ${
                action.isAction ? "action-card" : ""
              }`}
              key={action.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="icon">{action.icon}</div>
              <h3>{action.title}</h3>
              <p>{action.description}</p>
              {action.isAction && (
                <button className="hover-btn">{action.buttonText}</button>
              )}
            </motion.div>
          ))}
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h4>How can I reach your support team?</h4>
              <p>
                You can reach us via the contact form or directly through
                support@example.com.
              </p>
            </div>
            <div className="faq-item">
              <h4>Where are your offices located?</h4>
              <p>We have offices in India, US, Singapore, and Malaysia.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer 24/7 support?</h4>
              <p>Our support is available 9am–6pm local time in each region.</p>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3>We’re here to help you grow globally</h3>
          <p>
            Whether you’re from India, the US, Singapore, or Malaysia — reach
            out to us anytime.
          </p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="footer-copy">© 2025 Appify. All rights reserved.</p>
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactUs;
