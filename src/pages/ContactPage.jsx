import { motion } from "framer-motion";
import contactbg from "../assets/contactbg.jpg";
import React, { useState, useRef, useEffect } from "react";
import Globe from "react-globe.gl";
import markerimg from "../assets/placeholder.png";

const accentColor = "#7375feff";

const markers = [
  {
    lat: 37.0902,
    lng: -95.7129,
    label: "USA Office - New York, USA",
    address: "New York, USA",
  },
  {
    lat: 56.1304,
    lng: -106.3468,
    label: "Canada Office - Toronto, Canada",
    address: "Toronto, Canada",
  },
  {
    lat: 20.5937,
    lng: 78.9629,
    label: "India Office - New Delhi, India",
    address: "New Delhi, India",
  },
];

export default function ContactPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  };

  const [hoverD, setHoverD] = useState(null);
  const [ready, setReady] = useState(false);
  const globeEl = useRef();

  useEffect(() => {
    if (globeEl.current) {
      const controls = globeEl.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.3;

      // Set globe canvas background color to white
      const renderer = globeEl.current.renderer();
      renderer.setClearColor("#ffffff");

      // Center globe view on all markers
      const lats = markers.map((m) => m.lat);
      const lngs = markers.map((m) => m.lng);
      const centerLat = lats.reduce((a, b) => a + b, 0) / lats.length;
      const centerLng = lngs.reduce((a, b) => a + b, 0) / lngs.length;

      globeEl.current.pointOfView(
        { lat: centerLat, lng: centerLng, altitude: 2.5 },
        1000
      );
    }
    setTimeout(() => setReady(true), 100);
  }, []);

  return (
    <div
      className="contact-page"
      style={{
        backgroundImage: `url(${contactbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#111",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <section>
        <motion.main
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2, delayChildren: 0.5 },
            },
          }}
          style={{
            maxWidth: 1200,
            margin: "auto",
            marginTop: "100px",
            padding: "0 20px 60px",
          }}
        >
          <div style={{ overflow: "hidden" }}>
            {/* Animated Background Particles */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
                background: "linear-gradient(135deg, #0f0f15 0%, #1a1a2e 100%)",
              }}
            >
              {Array.from({ length: 50 }).map((_, i) => (
                <motion.div
                  key={i}
                  style={{
                    position: "absolute",
                    width: `${Math.random() * 5 + 2}px`,
                    height: `${Math.random() * 5 + 2}px`,
                    background: `rgba(255, 255, 255, ${
                      Math.random() * 0.3 + 0.1
                    })`,
                    borderRadius: "50%",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, (Math.random() - 0.5) * 100],
                    x: [0, (Math.random() - 0.5) * 100],
                    opacity: [0.1, 0.8, 0.1],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </div>

            {/* Main Content */}
            <div
              style={{
                maxWidth: "1400px",
                margin: "0 auto",
                padding: "40px 20px",
              }}
            >
              {/* Hero Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: "center", marginBottom: "80px" }}
              >
                <h1
                  style={{
                    fontSize: "4.5rem",
                    fontWeight: 800,
                    background: "linear-gradient(90deg, #fff 0%, #a5b4fc 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "20px",
                    lineHeight: 1.2,
                  }}
                >
                  Let's Create <br />
                  Something{" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      textDecorationColor: accentColor,
                    }}
                  >
                    Extraordinary
                  </span>
                </h1>

                <p
                  style={{
                    fontSize: "1.5rem",
                    color: "#d1d5db",
                    maxWidth: "800px",
                    margin: "0 auto",
                    lineHeight: 1.6,
                  }}
                >
                  We're not just building products—we're crafting experiences.
                  Share your vision with us and let's make magic happen.
                </p>
              </motion.div>

              {/* Contact Form + Globe Section */}
              <motion.div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "40px",
                  justifyContent: "center",
                  marginBottom: "100px",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {/* Glass Morphism Form */}
                <motion.div
                  style={{
                    flex: "1 1 500px",
                    minWidth: "350px",
                    backdropFilter: "blur(16px)",
                    backgroundColor: "rgba(15, 15, 25, 0.7)",
                    borderRadius: "24px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)`,
                    padding: "40px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  whileHover={{ boxShadow: `0 8px 40px ${accentColor}40` }}
                >
                  {/* Form Decorative Elements */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-100px",
                      right: "-100px",
                      width: "300px",
                      height: "300px",
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${accentColor}20 0%, transparent 70%)`,
                      zIndex: -1,
                    }}
                  />

                  <h2
                    style={{
                      fontSize: "2.2rem",
                      fontWeight: 700,
                      marginBottom: "30px",
                      color: "#fff",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: "-20px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "8px",
                        height: "40px",
                        background: accentColor,
                        borderRadius: "4px",
                      }}
                    />
                    Send Us Your Vision
                  </h2>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Message sent! We'll be in touch soon.");
                      e.target.reset();
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "25px",
                      }}
                    >
                      {[
                        { label: "Your Name", type: "text", icon: "👤" },
                        { label: "Email Address", type: "email", icon: "✉️" },
                        {
                          label: "Company (Optional)",
                          type: "text",
                          icon: "🏢",
                        },
                      ].map((field, i) => (
                        <motion.div
                          key={i}
                          whileFocus={{ scale: 1.02 }}
                          style={{ position: "relative" }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              left: "15px",
                              top: "15px",
                              fontSize: "1.2rem",
                            }}
                          >
                            {field.icon}
                          </span>
                          <input
                            type={field.type}
                            placeholder={field.label}
                            required={
                              field.type !== "text" ||
                              field.label === "Your Name"
                            }
                            style={{
                              width: "100%",
                              padding: "15px 15px 15px 50px",
                              borderRadius: "12px",
                              border: "1px solid rgba(255, 255, 255, 0.1)",
                              backgroundColor: "rgba(255, 255, 255, 0.05)",
                              color: "#fff",
                              fontSize: "1rem",
                              transition: "all 0.3s ease",
                            }}
                          />
                        </motion.div>
                      ))}

                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <textarea
                          placeholder="Tell us about your project..."
                          rows={5}
                          required
                          style={{
                            width: "100%",
                            padding: "20px",
                            borderRadius: "12px",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            color: "#fff",
                            fontSize: "1rem",
                            resize: "vertical",
                          }}
                        />
                      </motion.div>

                      <motion.button
                        type="submit"
                        style={{
                          padding: "18px 0",
                          fontWeight: 700,
                          fontSize: "1.8rem",
                          borderRadius: "12px",
                          border: "none",
                          background: `linear-gradient(45deg, ${accentColor}, #8b5cf6)`,
                          color: "#111",
                          cursor: "pointer",
                          marginTop: "10px",
                          position: "relative",
                          overflow: "hidden",
                        }}
                        whileHover={{
                          scale: 1.02,
                          boxShadow: `0 0 20px ${accentColor}80`,
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span style={{ position: "relative", zIndex: 2 }}>
                          Launch Project
                        </span>
                        <motion.span
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: `linear-gradient(45deg, #8b5cf6, ${accentColor})`,
                            opacity: 0,
                            zIndex: 1,
                          }}
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                      </motion.button>
                    </div>
                  </form>
                </motion.div>

                {/* Interactive Globe Section */}
                <motion.div
                  style={{
                    flex: "1 1 900px",
                    minWidth: "350px",
                    height: "500px",
                    borderRadius: "24px",
                    overflow: "none",
                    position: "relative",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                  }}
                  whileHover={{ boxShadow: `0 8px 40px ${accentColor}40` }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                      zIndex: -1,
                    }}
                  />

                  <Globe
                    ref={globeEl}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                    htmlElementsData={ready ? markers : []}
                    htmlElement={(d) => {
                      const el = document.createElement("div");
                      el.innerHTML = `
              <div style="
                width: 30px;
                height: 30px;
                background: ${accentColor};
                border-radius: 50%;
                border: 2px solid white;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 12px;
                cursor: pointer;
                transform: scale(1);
                transition: transform 0.2s ease;
              ">
                📍
              </div>
            `;
                      el.style.position = "absolute";
                      el.style.transformOrigin = "center center";

                      el.addEventListener("pointerover", () => {
                        setHoverD(d);
                        el.style.transform = "scale(1.5)";
                      });
                      el.addEventListener("pointerout", () => {
                        setHoverD(null);
                        el.style.transform = "scale(1)";
                      });

                      return el;
                    }}
                    htmlElementLat={(d) => d.lat}
                    htmlElementLng={(d) => d.lng}
                    backgroundColor="rgba(0,0,0,0)"
                    width={1200}
                    height={600}
                  />

                  {hoverD && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        position: "absolute",
                        bottom: "40px",
                        left: "40px",
                        background: "rgba(15, 15, 25, 0.8)",
                        backdropFilter: "blur(10px)",
                        color: "#fff",
                        padding: "20px",
                        borderRadius: "12px",
                        maxWidth: "300px",
                        border: `1px solid ${accentColor}40`,
                        boxShadow: `0 5px 15px rgba(0,0,0,0.3)`,
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "1.3rem",
                          marginBottom: "10px",
                          color: accentColor,
                        }}
                      >
                        {hoverD.label}
                      </h3>
                      <p style={{ margin: "5px 0", fontSize: "0.95rem" }}>
                        <strong>📍</strong>{" "}
                        {hoverD.address ||
                          `${hoverD.lat.toFixed(4)}, ${hoverD.lng.toFixed(4)}`}
                      </p>
                      <p style={{ margin: "5px 0", fontSize: "0.95rem" }}>
                        <strong>📞</strong>{" "}
                        {hoverD.phone || "+1 (555) 123-4567"}
                      </p>
                      <p style={{ margin: "5px 0", fontSize: "0.95rem" }}>
                        <strong>✉️</strong>{" "}
                        {hoverD.email || "contact@example.com"}
                      </p>
                    </motion.div>
                  )}

                  <div
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      background: "rgba(15, 15, 25, 0.7)",
                      backdropFilter: "blur(10px)",
                      padding: "10px 15px",
                      borderRadius: "8px",
                      color: "#fff",
                      fontSize: "0.9rem",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    Our Global Presence
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Cards Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                style={{ marginBottom: "100px" }}
              >
                <h2
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    textAlign: "center",
                    marginBottom: "60px",
                    color: "#fff",
                    position: "relative",
                    display: "inline-block",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-10px",
                      left: "0",
                      width: "100%",
                      height: "4px",
                      background: accentColor,
                      borderRadius: "2px",
                    }}
                  />
                  Our Global Offices
                </h2>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "30px",
                    padding: "0 20px",
                  }}
                >
                  {[
                    {
                      image:
                        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                      location: "Zynapase New York",
                      address: "45 W 34th St, New York, NY 10001",
                      phone: "+1 (212) 555-7890",
                      email: "ny@company.com",
                    },
                    {
                      image:
                        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                      location: "Zynapase Cannada Innovative Hub",
                      address: "11871 Hammersmith Way, British Columbia",
                      phone: "+44 20 7946 0958",
                      email: "london@company.com",
                    },
                    {
                      image:
                        "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      location: "Zynapase India",
                      address: "24 Gandhi Nagar,Chandni Chowk , Delhi",
                      phone: "+91 87-90-8769-97",
                      email: "india@company.com",
                    },
                  ].map((office, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -10,
                        boxShadow: `0 20px 40px ${accentColor}20`,
                      }}
                      style={{
                        borderRadius: "16px",
                        overflow: "hidden",
                        background: "rgba(15, 15, 25, 0.7)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <div
                        style={{
                          height: "200px",
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={office.image}
                          alt={office.location}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            filter: "brightness(0.8)",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            bottom: "0",
                            left: "0",
                            right: "0",
                            padding: "20px",
                            background:
                              "linear-gradient(transparent, rgba(0,0,0,0.8))",
                          }}
                        >
                          <h3
                            style={{
                              fontSize: "1.5rem",
                              fontWeight: 600,
                              color: "#fff",
                              margin: 0,
                            }}
                          >
                            {office.location}
                          </h3>
                        </div>
                      </div>

                      <div style={{ padding: "25px" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "15px",
                            color: "#d1d5db",
                          }}
                        >
                          <div
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              background: "rgba(255,255,255,0.1)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginRight: "15px",
                              flexShrink: 0,
                            }}
                          >
                            📍
                          </div>
                          <div>
                            <div
                              style={{ fontSize: "0.9rem", color: accentColor }}
                            >
                              Location
                            </div>
                            <div>{office.address}</div>
                          </div>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "15px",
                            color: "#d1d5db",
                          }}
                        >
                          <div
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              background: "rgba(255,255,255,0.1)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginRight: "15px",
                              flexShrink: 0,
                            }}
                          >
                            📞
                          </div>
                          <div>
                            <div
                              style={{ fontSize: "0.9rem", color: accentColor }}
                            >
                              Phone
                            </div>
                            <div>{office.phone}</div>
                          </div>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            color: "#d1d5db",
                          }}
                        >
                          <div
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              background: "rgba(255,255,255,0.1)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginRight: "15px",
                              flexShrink: 0,
                            }}
                          >
                            ✉️
                          </div>
                          <div>
                            <div
                              style={{ fontSize: "0.9rem", color: accentColor }}
                            >
                              Email
                            </div>
                            <div>{office.email}</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                style={{
                  background: `linear-gradient(135deg, rgba(15, 15, 25, 0.8) 0%, rgba(30, 30, 60, 0.9) 100%)`,
                  borderRadius: "24px",
                  padding: "80px 40px",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: `0 20px 50px ${accentColor}20`,
                  marginBottom: "60px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Decorative Elements */}
                <div
                  style={{
                    position: "absolute",
                    top: "-100px",
                    right: "-100px",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${accentColor}20 0%, transparent 70%)`,
                    zIndex: -1,
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    bottom: "-150px",
                    left: "-150px",
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${accentColor}10 0%, transparent 70%)`,
                    zIndex: -1,
                  }}
                />

                <h2
                  style={{
                    fontSize: "3rem",
                    fontWeight: 800,
                    marginBottom: "20px",
                    background: "linear-gradient(90deg, #fff 0%, #a5b4fc 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Ready to Transform Your Vision?
                </h2>

                <p
                  style={{
                    fontSize: "1.3rem",
                    color: "#d1d5db",
                    maxWidth: "800px",
                    margin: "0 auto 40px",
                    lineHeight: 1.6,
                  }}
                >
                  Whether you're looking to launch a new product or
                  revolutionize your industry, our team is ready to collaborate
                  with you.
                </p>

                <motion.button
                  style={{
                    padding: "18px 36px",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    borderRadius: "50px",
                    border: "none",
                    background: `linear-gradient(45deg, ${accentColor}, #8b5cf6)`,
                    color: "#111",
                    cursor: "pointer",
                    boxShadow: `0 5px 20px ${accentColor}50`,
                    position: "relative",
                    overflow: "hidden",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 8px 30px ${accentColor}80`,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span style={{ position: "relative", zIndex: 2 }}>
                    Start Your Project Today
                  </span>
                  <motion.span
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: `linear-gradient(45deg, #8b5cf6, ${accentColor})`,
                      opacity: 0,
                      zIndex: 1,
                    }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.main>
      </section>
    </div>
  );
}
