import { useRef } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import bgImage from "../assets/backgroundimg.png";
import bgAiImage from "../assets/robot.jpg";
import bgFullstackImage from "../assets/fullstack.jpg";
import bgCloudImage from "../assets/cloud.jpg";
import bgDataScientist from "../assets/datascience.jpg";
import bgFrontend from "../assets/designer.jpg";
import bgMobile from "../assets/mobileapp.jpg";

export default function Carousel3D() {
  const swiperInstanceRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "AI Innovation",
      desc: "This is the first slide description with more details about the content.",
      img: bgAiImage,
    },
    {
      id: 2,
      title: "Fullstack Development",
      desc: "Full-stack web applications with modern tools and frameworks.",
      img: bgFullstackImage,
    },
    {
      id: 3,
      title: "Cloud Infrastructure",
      desc: "Secure and scalable cloud-based systems tailored for your business.",
      img: bgCloudImage,
    },
    {
      id: 4,
      title: "Data Science Insights",
      desc: "Leveraging data to drive business decisions and innovations.",
      img: bgDataScientist,
    },
    {
      id: 5,
      title: "Frontend Excellence",
      desc: "Stunning, user-friendly interfaces crafted with precision.",
      img: bgFrontend,
    },
    {
      id: 6,
      title: "Mobile Development",
      desc: "Responsive mobile solutions for iOS and Android.",
      img: bgMobile,
    },
  ];

  return (
    <>
      {/* Background Layer */}
      <ParallaxLayer
        offset={2}
        speed={0}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)",
          zIndex: -1,
        }}
      />

      {/* Carousel Layer */}
      <ParallaxLayer
        offset={2}
        speed={0.4}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <section>
          <div
            className="carousel-container"
            style={{
              position: "relative",
              width: "100%",
              padding: "40px 0",
              maxWidth: "1800px",
              margin: "0 auto",
            }}
          >
            {/* Title */}
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                fontSize: "4rem",
                color: "#7375feff",
                textAlign: "center",
                fontWeight: "900",
                letterSpacing: "0.1em",
              }}
            >
              Projects
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "120px", opacity: 1 }}
              transition={{ duration: 3, ease: "easeOut", delay: 2 }}
              style={{
                height: "4px",
                background: "linear-gradient(90deg, #111c95ff, #00e5ff)",
                margin: "0 auto 1.5rem auto",
                borderRadius: "2px",
              }}
            />

            {/* Swiper Carousel */}
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              spaceBetween={80}
              loop={true}
              speed={2500}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 20,
                stretch: -50,
                depth: 300,
                modifier: 1.5,
                slideShadows: true,
              }}
              onSwiper={(swiper) => {
                swiperInstanceRef.current = swiper;
              }}
              modules={[EffectCoverflow, Autoplay]}
              className="mySwiper"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div
                    className="slide-content"
                    style={{
                      height: "500px",
                      borderRadius: "25px",
                      overflow: "hidden",
                      position: "relative",
                      cursor: "pointer",
                      transition: "all 0.5s ease",
                      boxShadow: "0 30px 50px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {/* Background image */}
                    <div
                      className="slide-bg"
                      style={{
                        backgroundImage: `url(${slide.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "100%",
                        width: "100%",
                        transition: "all 0.8s ease",
                      }}
                    ></div>

                    {/* Overlay */}
                    <div
                      className="slide-overlay"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%)",
                        opacity: 0.6,
                        transition: "opacity 0.8s ease",
                      }}
                    ></div>

                    {/* Title */}
                    <div
                      className="slide-title"
                      style={{
                        position: "absolute",
                        bottom: "40px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        color: "#fff",
                        fontSize: "2.2rem",
                        fontWeight: "bold",
                        textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                        transition: "all 0.8s ease",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      {slide.title}
                    </div>
                  </div>

                  {/* Hover styles */}
                  <style>{`
                    .slide-content {
                      perspective: 1000px;
                    }
                    .slide-content:hover .slide-bg {
                      transform: scale(1.08) rotateY(8deg) rotateX(3deg) !important;
                      transition: transform 0.6s ease;
                    }
                    .slide-content:hover .slide-overlay {
                      opacity: 0.9 !important;
                    }
                  `}</style>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* All Projects Button */}
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#9fa1fbff", // black on hover
                  color: "#fff",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", // flex to align arrow
                  alignItems: "center",
                  gap: "0.5rem", // space between text and arrow
                  marginTop: "1.5rem",
                  padding: "0.9rem 2rem",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  borderRadius: "12px",
                  border: "none",
                  background: "#000",
                  color: "#fff",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                View All Products <span style={{ fontSize: "1.9rem" }}>→</span>
              </motion.button>
            </div>
          </div>
        </section>
      </ParallaxLayer>
    </>
  );
}
