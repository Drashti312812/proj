"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Sample products
const products = [
  {
    id: 1,
    name: "Premium Sneakers",
    price: "79.99",
    image: "/images/camera.png",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "129.99",
    image: "/images/camera.png",
  },
  {
    id: 3,
    name: "Gaming Headset",
    price: "99.99",
    image: "/images/camera.png",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-900 dark:to-gray-800 text-white px-6">
        <motion.h1
          className="text-5xl font-bold drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Your Ultimate Shopping Experience
        </motion.h1>
        <motion.p
          className="mt-4 text-lg max-w-lg opacity-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Discover the latest fashion, gadgets, and accessories at unbeatable
          prices!
        </motion.p>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            href="/products"
            className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            Shop Now →
          </Link>
        </motion.div>

        {/* Floating Background Elements */}
        <motion.div
          className="absolute top-20 left-10 w-24 h-24 bg-blue-400 rounded-full opacity-30"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 bg-purple-400 rounded-full opacity-30"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        />
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
                {product.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">${product.price}</p>
              <Link
                href="/products"
                className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
