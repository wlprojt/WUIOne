"use client";

import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";

const heroData = [
  {
    id: 1,
    title: "70% off on all\nProducts Sale",
    description:
      "Huge discounts on all products! Stock up on essentials and luxury items alike. Shop the sale before it's gone!",
    image: "/shopping3.png",
  },
  {
    id: 2,
    title: "Upto 50% off on all\nMen's Wear",
    description:
      "Discover premium fashion with exclusive discounts and stylish collections.",
    image: "/shopping.png",
  },
  {
    id: 3,
    title: "30% off on Women's\nCollection",
    description:
      "Shop the latest fashion trends with amazing offers and premium quality.",
    image: "/shopping2.png",
  }
];

export default function Hero() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
  <section
    id="home"
    className="relative overflow-hidden bg-gray-100 dark:bg-slate-950 min-h-[650px]"
  >
    <div className="max-w-7xl mx-auto relative overflow-hidden z-10">
      <Slider {...settings}>
        {heroData.map((item) => (
          <div key={item.id} className="!block">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[650px] gap-10 px-6">

              {/* Image First on Mobile */}
              <motion.div
                key={`image-${item.id}`}
                initial={{ opacity: 0, scale: 0.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="order-1 md:order-2 flex justify-center pt-10 md:pt-0"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={550}
                  height={550}
                  priority
                  className="w-[280px] sm:w-[350px] md:w-[550px] h-auto object-contain"
                />
              </motion.div>

              {/* Text Second on Mobile */}
              <motion.div
                key={`text-${item.id}`}
                initial={{ opacity: 0, x: -80, scale: 1.2 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="order-2 md:order-1 text-center md:text-left"
              >
                <h1 className="text-4xl md:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
                  {item.title}
                </h1>

                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
                    {item.description}
                  </p>

                  <button className="mt-8 bg-gradient-to-r from-[#fca624] to-[#ee8c04] text-white px-8 py-4 mb-4 rounded-full font-semibold">
                    Order Now
                  </button>
                </motion.div>
              </motion.div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  </section>
);
}