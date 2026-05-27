"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const products = [
  { title: "Women Ethnic", color: "White", rating: "5", image: "/women1.png" },
  { title: "Women Western", color: "Red", rating: "4.5", image: "/women2.jpg" },
  { title: "Goggles", color: "Brown", rating: "4.7", image: "/women3.jpg" },
  { title: "Printed T-Shirt", color: "Yellow", rating: "4.4", image: "/women4.jpg" },
  { title: "Fashion T-Shirt", color: "Pink", rating: "4.5", image: "/women2.jpg" },
];

export default function ProductsCollection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-[#ff990f] text-sm">
            Top Selling Products for You
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Our Products
          </h2>

          <p className="mt-2 text-gray-400 text-sm">
            Explore our range of top-rated products, specially curated to meet
            your fashion needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-16">
          {products.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group cursor-pointer flex flex-col items-center sm:items-start"
            >
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={250}
                  height={320}
                  className="w-[250] h-[320px] object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <h3 className="mt-4 font-bold text-lg text-gray-900 dark:text-white">
                {item.title}
              </h3>

              <p className="text-gray-500">{item.color}</p>

              <div className="flex items-center gap-1 text-gray-900 dark:text-white">
                <FaStar className="text-yellow-400" />
                <span>{item.rating}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <button className="bg-[#ff990f] hover:bg-[#ee8c04] text-white px-8 py-3 rounded-md transition">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}