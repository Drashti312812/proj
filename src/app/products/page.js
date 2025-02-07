"use client";
import SEO from "../../components/SEO";
import ProductCard from "../../components/ProductCard";
import { motion } from "framer-motion";

export default function Products() {
  const products = [
    { id: 1, name: "Laptop", price: 999, image: "/images/laptop.png" },
    { id: 2, name: "Smartphone", price: 599, image: "/images/phone.png" },
    { id: 3, name: "Headphones", price: 199, image: "/images/headphones.png" },
    { id: 4, name: "Smartwatch", price: 299, image: "/images/smartwatch.png" },
    { id: 5, name: "Gaming Console", price: 499, image: "/images/console.png" },
    { id: 6, name: "Camera", price: 899, image: "/images/camera.png" },
  ];

  return (
    <div className="text-center">
      <SEO title="Products | My eCommerce Store" description="Check out our latest products." />

      <motion.h1 
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Our Bestselling Products
      </motion.h1>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>
    </div>
  );
}
