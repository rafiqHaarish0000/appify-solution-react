import { useRef, useEffect, useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

// Background image imports
import bgAiImage from "../assets/robot.jpg";
import bgFullstackImage from "../assets/fullstack.jpg";
import bgCloudImage from "../assets/cloud.jpg";
import bgDataScientist from "../assets/datascience.jpg";
import bgFrontend from "../assets/designer.jpg";
import bgMobile from "../assets/mobileapp.jpg";

export default function Carousel3D() {
  const swiperInstanceRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Slides data array
  const slides = [
    {
      id: 1,
      title: "AI Innovation",
      desc: "Cutting-edge artificial intelligence solutions tailored to your business needs.",
      img: bgAiImage,
    },
    {
      id: 2,
      title: "Fullstack Development",
      desc: "End-to-end web applications with modern architectures and frameworks.",
      img: bgFullstackImage,
    },
    {
      id: 3,
      title: "Cloud Infrastructure",
      desc: "Scalable and secure cloud solutions for enterprise-grade applications.",
      img: bgCloudImage,
    },
    {
      id: 4,
      title: "Data Science Insights",
      desc: "Transform raw data into actionable business intelligence.",
      img: bgDataScientist,
    },
    {
      id: 5,
      title: "Frontend Excellence",
      desc: "Beautiful, performant user interfaces that delight your customers.",
      img: bgFrontend,
    },
    {
      id: 6,
      title: "Mobile Development",
      desc: "Native and cross-platform mobile apps with flawless UX.",
      img: bgMobile,
    },
  ];

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      controls.start("visible");
    }
  }, [inView, controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        mass: 0.5,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.16, 0.77, 0.47, 0.97],
        delay: 0.4,
      },
    },
  };

  const carouselVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.8,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 1.5,
      },
    },
  };

  const slideVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 1 + i * 0.1,
      },
    }),
  };

  return (
    <>
      <ParallaxLayer
        offset={2}
        speed={0.2}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "10vh",
        }}
      >
        {/* Wrap content in a div that can be observed */}
        <div ref={ref} style={{ width: "100%", height: "100%" }}>
          <motion.section
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            style={{ width: "100%" }}
          >
            <div
              className="carousel-container"
              style={{
                position: "relative",
                width: "100%",
                backgroundColor: "white",
                padding: "2px 0",
                maxWidth: "1800px",
                margin: "0 auto",
              }}
            >
              {/* Animated Title */}
              <motion.h1
                variants={titleVariants}
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  color: "#000",
                  textAlign: "start",
                  fontWeight: "900",
                  marginBottom: "1rem",
                }}
              >
                Products
              </motion.h1>

              {/* Animated Divider Line */}
              <motion.div
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                style={{
                  height: "4px",
                  background: "linear-gradient(90deg, #111c95ff, #00e5ff)",
                  margin: "0 auto 3rem auto",
                  borderRadius: "2px",
                  boxShadow: "0 0 15px rgba(0, 229, 255, 0.5)",
                  transformOrigin: "left center", // grow from left
                  width: "120px",
                }}
              />
              {/* 3D Carousel */}
              <motion.div
                variants={carouselVariants}
                style={{ marginTop: "40px", padding: "10px 0" }}
              >
                <Swiper
                  grabCursor={true}
                  centeredSlides={false} // Disable centered mode
                  slidesPerView="auto" // Dynamic width
                  spaceBetween={20} // Adjust gap
                  loop={true}
                  speed={6500} // Slower for smoothness
                  freeMode={true} // Smooth scrolling
                  autoplay={{
                    delay: 0, // Continuous
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  modules={[Autoplay, FreeMode]}
                  className="portfolio-scroller"
                  onSwiper={(swiper) => swiper.autoplay.start()}
                >
                  {slides.map((slide) => (
                    <SwiperSlide key={slide.id} style={{ width: "auto" }}>
                      <motion.div
                        className="slide-content"
                        initial={{
                          // rotateZ: -200,
                          rotateY: -40,
                          rotateX: -25, // Initial right-to-left tilt
                          scale: 1,
                          y: 0,
                        }}
                        style={{
                          height: "400px",
                          width: "300px", // Fixed width for consistency
                          borderRadius: "12px",
                          overflow: "hidden",
                          position: "relative",
                          cursor: "pointer",
                          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                          transform: "perspective(1900px) rotateY(-40deg)", // 3D left tilt
                          transformStyle: "preserve-3d",
                          perspective: "1500px",
                        }}
                        whileHover={{
                          rotateY: 0, // Fully straight on hover
                          scale: 1.05, // Slightly larger
                          y: -10, // "Jumps" upward
                          transition: {
                            type: "spring", // Bouncy animation
                            stiffness: 900,
                            damping: 20,
                          },
                        }}
                      >
                        {/* Background Image */}
                        <div
                          style={{
                            backgroundImage: `url(${slide.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "100%",
                            width: "100%",
                            ransform: "translateZ(40px)",
                          }}
                        />

                        {/* Gradient Overlay */}
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background:
                              "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)",
                          }}
                        />

                        {/* Content */}
                        <div
                          style={{
                            position: "absolute",
                            bottom: "0",
                            left: "0",
                            right: "0",
                            padding: "1.5rem",
                            color: "white",
                          }}
                        >
                          <h3
                            style={{
                              fontSize: "1.5rem",
                              fontWeight: "600",
                              marginBottom: "0.5rem",
                            }}
                          >
                            {slide.title}
                          </h3>
                          <p style={{ fontSize: "0.9rem", opacity: 0.9 }}>
                            {slide.desc}
                          </p>
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>

              {/* Animated Button */}
              <motion.div
                variants={buttonVariants}
                style={{
                  textAlign: "end",
                  marginTop: "3rem",
                  marginRight: "2rem",
                  marginBottom: "2rem",
                }}
              >
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#9fa1fbff", // black on hover
                    color: "#000",
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
                    borderRadius: "60px",
                    border: "none",
                    background: "#000",
                    color: "#fff",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  View All Products{" "}
                  <span style={{ fontSize: "1.9rem" }}>→</span>
                </motion.button>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </ParallaxLayer>
    </>
  );
}
