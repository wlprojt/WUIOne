"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaStar,
  FaLock,
  FaShippingFast,
  FaMoneyBillWave,
  FaGift,
} from "react-icons/fa";
import { h2 } from "framer-motion/client";

const heading = [
    {
    title: "Trending Sarees",
    description: "Explore our latest collection of trending sarees. Find the perfect saree for any occasion with exclusive designs and amazing offers."
    }
]

const sarees = [
  {
    title: "Elegant Silk Saree",
    color: "Gold",
    rating: "5",
  },
  {
    title: "Traditional Cotton Saree",
    color: "Red",
    rating: "4.5",
  },
  {
    title: "Designer Georgette Saree",
    color: "Green",
    rating: "4.7",
  },
  {
    title: "Printed Chiffon Saree",
    color: "Blue",
    rating: "4.4",
  },
];

const features = [
  { title: "Quality Products", icon: <FaLock />, bg: "bg-purple-100", darkbg: "dark:bg-[#a78bfa]" },
  { title: "Fast Delivery", icon: <FaShippingFast />, bg: "bg-orange-100", darkbg: "dark:bg-[#fb923d]" },
  { title: "Easy Payment Methods", icon: <FaMoneyBillWave />, bg: "bg-green-100", darkbg: "dark:bg-[#4ade81]" },
  { title: "Exclusive Offers", icon: <FaGift />, bg: "bg-yellow-100", darkbg: "dark:bg-[#facd14]" },
];

export default function TrendingSarees() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* Left Images */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="space-y-6 "
        >
          <Image
            src="/saree1.jpg"
            alt="Saree"
            width={500}
            height={350}
            className="w-full max-w-[500px] h-[350px] object-cover shadow-[-18px_18px_30px_rgba(0,0,0,0.55)]"
          />

          <Image
            src="/saree2.jpg"
            alt="Saree"
            width={500}
            height={350}
            className="w-full max-w-[500px] h-[350px] object-cover shadow-[-18px_18px_30px_rgba(0,0,0,0.55)]"
          />

          <Image
            src="/saree3.jpg"
            alt="Saree"
            width={500}
            height={350}
            className="w-full max-w-[500px] h-[350px] object-cover shadow-[-18px_18px_30px_rgba(0,0,0,0.55)]"
          />

          <Image
            src="/saree4.jpg"
            alt="Saree"
            width={500}
            height={350}
            className="w-full max-w-[500px] h-[350px] object-cover shadow-[-18px_18px_30px_rgba(0,0,0,0.55)]"
          />
        </motion.div>

        {/* Right Content */}
        <div className="mt-10 space-y-6">
            {heading.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: index * 0.12 }}
          className="flex flex-col justify-center h-full"
        >
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
            {item.title}
          </h2>

          <p className="mt-6 text-gray-500 leading-relaxed">
            {item.description}
          </p>

          <div className="mt-10 space-y-6">
            {sarees.map((item, index) => (
                <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className="flex items-center gap-5"
                >
                    <div key={item.title} className="flex gap-4">
                        <FaStar className="text-yellow-400 mt-1 text-2xl" />

                        <div>
                        <h3 className="font-bold text-2xl text-gray-900 dark:text-white">
                            {item.title}
                        </h3>

                        <p className="text-gray-500">{item.color}</p>

                        <div className="flex items-center gap-1">
                            <FaStar className="text-yellow-400" />
                            <span>{item.rating}</span>
                        </div>
                        </div>
                    </div>
                </motion.div>
            ))}
          </div>

          {/* Features */}
          <div className="mt-10 space-y-5">
            {features.map((item, index) => (
                <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className="flex items-center gap-5"
                >
              <div key={item.title} className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full ${item.bg} ${item.darkbg} dark:text-white text-gray-900 flex items-center justify-center`}
                >
                  {item.icon}
                </div>

                <p className="text-xl text-gray-900 dark:text-white">
                  {item.title}
                </p>
              </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        ))}
          </div>

      </div>
    </section>
  );
}