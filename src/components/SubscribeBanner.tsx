"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SubscribeBanner() {
  return (
    <motion.section
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="relative py-14 overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/orange.jpg"
        alt="Banner Background"
        fill
        priority
        className="object-cover scale-y-125"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Get Notified About New Products
        </h2>

        <form className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-[520px] px-5 py-4 rounded-full bg-white dark:bg-gray-900 outline-none text-gray-700 dark:text-gray-100"
          />

          <button
            type="submit"
            className="px-8 py-4 rounded-full bg-[#f99705] text-white hover:bg-[#ee8c04] transition"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </motion.section>
  );
}