"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const bestProducts = [
  {
    title: "Casual Wear",
    desc: "Perfect for everyday wear, our casual shirts combine comfort with style. Mad...",
    image: "/shirt1.png",
  },
  {
    title: "Printed Shirt",
    desc: "Stand out with our trendy printed shirts. Featuring unique designs, these shirts...",
    image: "/shirt2.png",
  },
  {
    title: "Women's Shirt",
    desc: "Our women's shirts offer a perfect blend of elegance and comfort. Ideal for both...",
    image: "/shirt3.png",
  },
];

export default function BestProducts() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#ff990f] text-sm">Top Rated Products for You</p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Best Products
          </h2>

          <p className="text-gray-400 text-sm">
            Discover our top-rated products that customers love. Quality and style guaranteed.
          </p>
        </motion.div>

        <div className="mt-30 grid grid-cols-1 md:grid-cols-3 gap-28">
          {bestProducts.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 90, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative group cursor-pointer bg-white dark:bg-gray-800 hover:bg-[#333333] hover:dark:bg-[#ff990f] rounded-2xl shadow-2xl px-8 pt-28 pb-8 text-center"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={190}
                height={190}
                className="absolute -top-24 left-1/2 -translate-x-1/2 w-[180px] h-[180px] object-contain drop-shadow-xl group-hover:scale-110 transition duration-500"
              />

              <div className="flex justify-center gap-1 text-yellow-400">
                {[1, 2, 3, 4].map((star) => (
                  <FaStar key={star} />
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-500 group-hover:text-white">
                {item.desc}
              </p>

              <button className="mt-6 bg-[#ff990f] text-white group-hover:text-[#ff990f] group-hover:bg-white px-7 py-2 rounded-full transition">
                Order Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}