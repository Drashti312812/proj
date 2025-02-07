"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Image 
        src={product.image} 
        alt={product.name} 
        width={300} 
        height={200} 
        className="w-full h-56 object-cover"
      />
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{product.name}</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">${product.price}</p>
        <motion.button 
          className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          whileHover={{ scale: 1.1 }}
        >
          Buy Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
