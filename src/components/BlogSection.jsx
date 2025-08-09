import React from "react";
import { motion } from "framer-motion";
import "../styles/BlogSection.css";

const blogPosts = [
  {
    title: "Reimagining UX for a Mobile Bank",
    subtitle: "Case Study",
    image:
      "https://plus.unsplash.com/premium_photo-1720025910347-6286f827471d?fm=jpg&q=60&w=3000",
  },
  {
    title: "Building Interactions in 3D",
    subtitle: "Development",
    image:
      "https://images.unsplash.com/photo-1635241161466-541f065683ba?fm=jpg&q=60&w=3000",
  },
  {
    title: "Mastering Micro-Animations",
    subtitle: "Motion Design",
    image:
      "https://plus.unsplash.com/premium_photo-1661962423418-24746c9b0137?fm=jpg&q=60&w=3000",
  },
  {
    title: "How We Design for Delight",
    subtitle: "UX/UI",
    image:
      "https://plus.unsplash.com/premium_photo-1661431150262-e450d0076044?fm=jpg&q=60&w=3000",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="blog-section">
      <h2 className="blog-title">Our Blog</h2>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <motion.div
            className="blog-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="image-wrapper">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-info">
              <span>{post.subtitle}</span>
              <h3>{post.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
