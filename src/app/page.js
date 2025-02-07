"use client";
import SEO from "../components/SEO";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="text-center mt-10">
      <SEO title="Home | My eCommerce Store" description="Buy the best products online!" />

      <motion.h1 
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Welcome to My eCommerce Store
      </motion.h1>

      <p className="text-lg text-gray-600 mb-6">
        Best deals on electronics, fashion, and more.
      </p>

      <motion.a 
        href="/products"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 hover:bg-blue-700"
        whileHover={{ scale: 1.1 }}
      >
        View Products
      </motion.a>
    </div>
  );
}
