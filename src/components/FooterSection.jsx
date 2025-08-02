// src/components/FooterSection.jsx
import React from "react";

function FooterSection() {
  return (
    <section style={{ textAlign: "center", background: "#f8f8f8" }}>
      <h2 style={{ color: "black" }}>Ready to get started?</h2>
      <p style={{ color: "#000" }}>
        {" "}
        Contact us today to discuss your project.
      </p>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        Contact Us
      </button>
    </section>
  );
}

export default FooterSection;
