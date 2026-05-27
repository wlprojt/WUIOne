"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const mensProducts = [
  {
    title: "Formal Shirt",
    color: "Blue",
    rating: "5",
    image: "/men1.jpg",
  },
  {
    title: "Casual T-Shirt",
    color: "Black",
    rating: "4.5",
    image: "/men2.jpg",
  },
  {
    title: "Denim Jeans",
    color: "Navy Blue",
    rating: "4.7",
    image: "/men3.jpg",
  },
  {
    title: "Leather Jacket",
    color: "Brown",
    rating: "4.4",
    image: "/men4.jpg",
  },
  {
    title: "Sportswear",
    color: "Gray",
    rating: "4.5",
    image: "/men5.jpg",
  },
];

export default function MensCollection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-[#ff990f] text-sm">
            Top Selling Apparel for Men
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
            Our Men&apos;s Collection
          </h2>

          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Discover our range of top-rated men's clothing, specially curated to
            add style and comfort to your wardrobe.
          </p>
        </motion.div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-16">
          {mensProducts.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="group cursor-pointer flex flex-col items-center sm:items-start"
            >
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={250}
                  height={320}
                  className="w-[250px] h-[320px] object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
                {item.title}
              </h3>

              <p className="text-gray-500">{item.color}</p>

              <div className="flex items-center gap-1 mt-1">
                <FaStar className="text-yellow-400" />
                <span className="text-gray-800 dark:text-white">
                  {item.rating}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center mt-14"
        >
          <button className="bg-[#ff990f] hover:bg-[#ee8c04] text-white px-8 py-3 rounded-md transition">
            View All Products
          </button>
        </motion.div>

      </div>
    </section>
  );
}