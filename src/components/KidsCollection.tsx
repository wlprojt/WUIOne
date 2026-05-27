"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const products = [
  {
    title: "Kids Ethnic Wear",
    color: "White",
    rating: "5",
    image: "/kids1.jpg",
  },
  {
    title: "Kids Western Outfit",
    color: "Red",
    rating: "4.5",
    image: "/kids2.jpg",
  },
  {
    title: "Kids Goggles",
    color: "Brown",
    rating: "4.7",
    image: "/kids3.jpg",
  },
  {
    title: "Kids Printed T-Shirt",
    color: "Yellow",
    rating: "4.4",
    image: "/kids4.jpg",
  },
  {
    title: "Kids Fashion T-Shirt",
    color: "Pink",
    rating: "4.5",
    image: "/kids5.jpg",
  },
];

export default function KidsCollection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-[#ff990f] text-sm">
            Top Selling Products for Kids
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Our Kids Collection
          </h2>

          <p className="mt-2 text-gray-400 text-sm">
            Discover our best-rated kids&apos; products, carefully selected to
            bring joy and comfort to your little ones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-16">
          {products.map((item, index) => (
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
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




