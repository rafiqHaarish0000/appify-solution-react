import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import "./Section.css";

const Products = forwardRef((props, ref) => {
  const products = [
    "Appify Core",
    "Appify Analytics",
    "Appify Connect",
    "Appify AI",
  ];

  return (
    <motion.section
      id="products"
      ref={ref}
      className="layout-section products-layout"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-content">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Our Products
        </motion.h1>
        <div className="products-list">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="product-item"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <h3>{product}</h3>
              <p>Discover the power of our {product.toLowerCase()} solution.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
});

export default Products;
