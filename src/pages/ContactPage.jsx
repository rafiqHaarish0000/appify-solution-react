import { motion } from "framer-motion";
import contactbg from "../assets/contactbg.jpg";
import personimg from "../assets/contactus.jpg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../styles/contact.css";

// Fix Leaflet marker issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const accentColor = "#7375feff";

export default function ContactPage() {
  // Animation variants
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

  return (
    <div
      className="contact-page"
      style={{
        backgroundImage: `url(${contactbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#eee",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "30px",
          backgroundColor: "#f6f6f6ff",
          padding: "60px 20px",
          borderRadius: "0 0 40px 40px",
          marginBottom: "60px",
          overflow: "hidden",
        }}
      >
        {/* Left - Text */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ flex: "1 1 400px", color: "#000", paddingRight: "20px" }}
        >
          <h1
            style={{
              fontSize: "4rem",
              marginBottom: "20px",
              fontWeight: "bold",
              fontWeight: "900",
              textAlign: "center",
              fontFamily: "'Poppins', sans-serif",
              color: "#474ae6ff",
              letterSpacing: "0.5px",
            }}
          >
            Get In Touch
          </h1>
          <p
            style={{ fontSize: "1.2rem", lineHeight: 1.6, textAlign: "center" }}
          >
            Want to get in touch? We'd love to hear from you.
            <br />
            Here's how you can reach us...
          </p>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
          style={{ flex: "1 1 400px", textAlign: "center" }}
        >
          <img
            src={personimg}
            alt="Support"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
          />
        </motion.div>
      </section>

      {/* MAIN SECTION */}
      <motion.main
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2, delayChildren: 0.5 },
          },
        }}
        style={{ maxWidth: 1200, margin: "auto", padding: "0 20px 60px" }}
      >
        {/* Contact Info Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 24,
            marginBottom: 50,
          }}
        >
          {[
            {
              title: "OUR MAIN OFFICE",
              content: (
                <>
                  SoHo 94 Broadway St
                  <br />
                  New York, NY 1001
                </>
              ),
            },
            {
              title: "PHONE NUMBER",
              content: (
                <>
                  234-9876-5400
                  <br />
                  888-0123-4567 (Toll Free)
                </>
              ),
            },
            { title: "FAX", content: "1-234-567-8900" },
            {
              title: "EMAIL",
              content: (
                <a
                  href="mailto:hello@theme.com"
                  style={{
                    color: accentColor,
                    textDecoration: "underline",
                    fontWeight: "600",
                  }}
                >
                  hello@theme.com
                </a>
              ),
            },
          ].map(({ title, content }, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{
                background: "rgba(0, 0, 0, 0.47)",
                padding: 24,
                borderRadius: 16,
                boxShadow: "0 8px 32px rgb(255 255 255 / 0.05)",
                color: "#000",
                textAlign: "center",
                fontWeight: "900",
                transition: "transform 0.3s ease",
              }}
              whileHover={{ y: -6 }}
            >
              <h4
                style={{
                  color: "white",
                  marginBottom: 12,
                  fontSize: "1.5rem",
                  lineHeight: 1.3,
                }}
              >
                {title}
              </h4>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "1rem",
                  lineHeight: 1.5,
                  color: "white",
                }}
              >
                {content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form + Map */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.3, delayChildren: 0.4 },
            },
          }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 36,
            justifyContent: "center",
          }}
        >
          {/* Contact Form */}
          <motion.form
            variants={fadeRight}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{
              background: "black",
              backdropFilter: "blur(18px)",
              color: "#eee",
              flex: "1 1 360px",
              minWidth: 360,
              padding: 32,
              borderRadius: 20,
              border: `1px solid ${accentColor}`,
              boxShadow: `0 8px 40px ${accentColor}55`,
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! Thank you.");
              e.target.reset();
            }}
          >
            <h2 style={{ fontWeight: "700", fontSize: "1.8rem" }}>
              Send us a message
            </h2>
            {[
              {
                label: "Email",
                type: "email",
                placeholder: "Enter a valid email address",
              },
              { label: "Name", type: "text", placeholder: "Enter your Name" },
            ].map(({ label, type, placeholder }, i) => (
              <label
                key={i}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <span
                  style={{
                    marginBottom: 6,
                    fontWeight: "600",
                    color: accentColor,
                  }}
                >
                  {label}
                </span>
                <input
                  type={type}
                  placeholder={placeholder}
                  required
                  style={{
                    padding: 12,
                    borderRadius: 8,
                    border: `1.5px solid #ffffffff`,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    color: "#eee",
                    fontSize: "1rem",
                  }}
                />
              </label>
            ))}

            <label style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  marginBottom: 6,
                  fontWeight: "600",
                  color: accentColor,
                }}
              >
                Message
              </span>
              <textarea
                placeholder="Enter your message"
                rows={5}
                required
                style={{
                  padding: 12,
                  borderRadius: 8,
                  border: `1.5px solid #ffffffff`,
                  backgroundColor: "rgba(255,255,255,0.05)",
                  color: "#eee",
                  fontSize: "1rem",
                  resize: "vertical",
                }}
              />
            </label>
            <button
              type="submit"
              style={{
                padding: "14px 0",
                fontWeight: "900",
                fontSize: "1.1rem",
                borderRadius: 12,
                border: "none",
                backgroundColor: accentColor,
                color: "#111",
                boxShadow: `0 6px 12px ${accentColor}cc`,
              }}
            >
              SUBMIT
            </button>
          </motion.form>

          {/* Leaflet Map */}
          <motion.div
            variants={fadeLeft}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{
              flex: "1 1 600px",
              minWidth: 360,
              height: 480,
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: `0 12px 40px ${accentColor}bb`,
              border: `2px solid ${accentColor}`,
            }}
          >
            <MapContainer
              center={[20, 70]}
              zoom={2}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />
              <Marker position={[40.7231, -73.9946]}>
                <Popup>Our Main Office - New York, USA</Popup>
              </Marker>
              <Marker position={[28.6139, 77.209]}>
                <Popup>India Office - New Delhi, India</Popup>
              </Marker>
              <Marker position={[1.3521, 103.8198]}>
                <Popup>Singapore Office</Popup>
              </Marker>
            </MapContainer>
          </motion.div>
        </motion.div>
      </motion.main>

      {/* FOOTER / ENDING SECTION */}
      <motion.footer
        role="contentinfo"
        aria-label="Site footer"
        initial={{ opacity: 0, y: 30, scale: 0.995 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeInOut" }} // slow, smooth entrance
        style={{
          textAlign: "center",
          padding: "36px 18px",
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.7), rgba(0,0,0,0.85))",
          color: "#fff",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
          style={{
            margin: 0,
            fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)", // responsive, eye-catching
            fontWeight: 800,
            letterSpacing: "0.6px",
            lineHeight: 1.05,
            color: "#fff",
          }}
        >
          Let’s build something better together.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.35 }}
          style={{
            margin: "12px 0 18px",
            fontSize: "0.96rem",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          © {new Date().getFullYear()} Appify Solution — Crafted with{" "}
          <span style={{ color: accentColor, fontWeight: 700 }}>care</span>.
        </motion.p>

        {/* small CTA — optional, looks professional and eye-catching */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.5 }}
          style={{
            display: "inline-block",
            padding: "10px 18px",
            borderRadius: 10,
            border: `2px solid ${accentColor}`,
            background: "transparent",
            color: accentColor,
            fontWeight: 700,
            textDecoration: "none",
            fontSize: "0.95rem",
            transition: "all 0.28s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#fff";
            e.currentTarget.style.color = "#000";
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = `0 8px 24px ${accentColor}55`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = accentColor;
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Let’s Collaborate
        </motion.a>
      </motion.footer>
    </div>
  );
}
