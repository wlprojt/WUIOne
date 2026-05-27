"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const sarees = [
  {
    title: "Elegant Silk Saree",
    color: "Gold",
    rating: "5",
    image: "/saree1.jpg",
  },
  {
    title: "Traditional Cotton Saree",
    color: "Red",
    rating: "4.5",
    image: "/saree2.jpg",
  },
  {
    title: "Designer Georgette Saree",
    color: "Green",
    rating: "4.7",
    image: "/saree3.jpg",
  },
  {
    title: "Printed Chiffon Saree",
    color: "Blue",
    rating: "4.4",
    image: "/saree4.jpg",
  },
  {
    title: "Casual Wear Saree",
    color: "Pink",
    rating: "4.5",
    image: "/saree2.jpg",
  },
];

export default function SareeCollection() {
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
            Top Selling Sarees for Women
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Our Saree Collection
          </h2>

          <p className="mt-2 text-gray-400 text-sm">
            Explore our range of top-rated sarees, specially curated to add
            elegance and style to your wardrobe.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {sarees.map((item, index) => (
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
                  className="w-[250px] h-[320px] object-cover rounded-lg group-hover:scale-110 transition duration-500"
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
            View All Sarees
          </button>
        </motion.div>

      </div>
    </section>
  );
}