"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLock, FaShippingFast, FaMoneyBillWave, FaGift } from "react-icons/fa";

const features = [
  { title: "Quality Products", icon: <FaLock />, bg: "bg-purple-100", darkbg: "dark:bg-[#a78bfa]" },
  { title: "Fast Delivery", icon: <FaShippingFast />, bg: "bg-orange-100", darkbg: "dark:bg-[#fb923d]" },
  { title: "Easy Payment Methods", icon: <FaMoneyBillWave />, bg: "bg-green-100", darkbg: "dark:bg-[#4ade81]" },
  { title: "Exclusive Offers", icon: <FaGift />, bg: "bg-yellow-100", darkbg: "dark:bg-[#facd14]" },
];

export default function WinterSale() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-20">
        
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/women2.jpg"
            alt="Winter Sale"
            width={500}
            height={350}
            className="w-full max-w-[500px] h-[350px] grid object-cover shadow-[-18px_18px_30px_rgba(0,0,0,0.55)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Winter Sale up to 50% Off
          </h2>

          <p className="mt-6 text-gray-500 max-w-2xl leading-relaxed">
            Discover amazing discounts on our top-quality products this winter!
            Enjoy up to 50% off on selected items. Don&apos;t miss out on these
            fantastic deals!
          </p>

          <div className="mt-8 space-y-6">
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="flex items-center gap-5"
              >
                <div
                  className={`w-12 h-12 rounded-full ${item.bg} ${item.darkbg} flex items-center justify-center dark:text-white text-gray-900`}
                >
                  {item.icon}
                </div>

                <p className="text-lg text-gray-900 dark:text-white">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}