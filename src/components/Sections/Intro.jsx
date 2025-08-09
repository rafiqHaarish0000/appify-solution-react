import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import "./Section.css";
import sphereVideo from "../../assets/search_card.mp4";
import headerImg from "../../assets/happy_g.jpg";
import feature1 from "../../assets/feature1.jpg"; // Add your images
import feature2 from "../../assets/feature2.jpg";
import feature3 from "../../assets/feature3.jpg";
import { style } from "framer-motion/client";

const Intro = forwardRef((props, ref) => {
  return (
    <motion.section
      id="intro"
      ref={ref}
      className="layout-section intro-layout"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-content">
        {/* Title */}
        <div className="intro-text">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Your next breakthrough,
            <br />
            powered by AI
          </motion.h1>
          <motion.p
            style={{ fontSize: "16px" }}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1.9 }}
          >
            Innovative solutions for the digital age
          </motion.p>
        </div>

        {/* Row */}
        <motion.div
          className="intro-content-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 2 }}
        >
          {/* Video */}
          <motion.div
            className="video-container"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
          >
            <div className="video-wrapper">
              {/* Background image */}
              <div className="video-bg"></div>

              {/* Video */}
              <video
                src={sphereVideo}
                autoPlay
                muted
                playsInline
                loop
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.9)",
                }}
                onCanPlay={(e) => {
                  e.target.playbackRate = 0.5;
                }}
              />

              {/* Caption text */}
              <motion.p
                className="video-caption"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                Experience our cutting-edge 3D technology asdad adadad adadad
              </motion.p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="image-container"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.0, type: "spring" }}
          >
            <motion.image
              className="white-background"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 2, type: "spring" }}
            >
              <div className="white-background">
                <div
                  className="cropped-image"
                  style={{
                    backgroundImage: `url(${headerImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </motion.image>
          </motion.div>
        </motion.div>
        <motion.div
          className="section"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h2 className="section-heading">
            Safe. Flexible. Built for business
          </h2>
          <div className="features-row">
            <div className="cards">
              <img
                src="https://cdn.sanity.io/images/rjtqmwfu/web3-prod/dcdf04a6c8e30bf7d432956f6eaf6a730eb9897f-100x100.svg"
                alt="Secure Payments"
              />
              <h3>Secure Payments</h3>
              <p>Every transaction is encrypted and fully protected.</p>
              <a href="#">Learn more →</a>
            </div>
            <div className="cards">
              <img
                src="https://cdn.sanity.io/images/rjtqmwfu/web3-prod/5fc7c13fbb1203d8393575e3b1af25a00bc768a9-102x102.svg"
                alt="Flexible Plans"
              />
              <h3>Flexible Plans</h3>
              <p>
                Choose plans that fit your needs with flexible upgrade options.
              </p>
              <a href="#">Learn more →</a>
            </div>
            <div className="cards">
              <img
                src="https://cdn.sanity.io/images/rjtqmwfu/web3-prod/1a4deb9b787ba55805eef53f73bb27e916b9299a-100x100.svg"
                alt="Business Support"
              />
              <h3>Business Support</h3>
              <p>Get priority support tailored for your business operations.</p>
              <a href="#">Learn more →</a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
});

export default Intro;
