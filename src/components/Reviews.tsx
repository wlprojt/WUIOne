"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";

const reviews = [
  {
    name: "Victor",
    image: "/rev1.jpg",
    text: "The quality of the products is outstanding! I have been a regular customer and I've never been disappointed. Highly recommend!",
  },
  {
    name: "Satya Nadella",
    image: "/rev2.jpg",
    text: "Excellent service and fantastic clothing. The variety and style options are amazing. I'll definitely keep coming back for more!",
  },
  {
    name: "Virat Kohli",
    image: "/rev3.jpg",
    text: "Great shopping experience! The website is easy to navigate and the products are exactly as described. Fast shipping too!",
  },
  {
    name: "Sachin Tendulkar",
    image: "/rev4.jpg",
    text: "Amazing support and premium quality products. I strongly recommend this store. I've never been disappointed. Highly recommend!",
  },
];

export default function Reviews() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-[#ff990f] text-sm">
            What our customers are saying
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Reviews
          </h2>

          <p className="mt-2 text-gray-400 text-sm">
            Hear from our satisfied customers about their shopping experiences.
          </p>
        </motion.div>

        <div className="overflow-hidden mt-16" ref={emblaRef}>
          <div className="flex">
            {reviews.map((item) => (
              <div
                key={item.name}
                className="min-w-full md:min-w-[33.333%] px-4"
              >
                <div className="bg-[#fff8ee] dark:bg-gray-800 rounded-2xl shadow-md p-8 relative min-h-[250px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover"
                  />

                  <FaQuoteRight className="absolute top-20 right-8 text-6xl text-gray-300" />

                  <p className="mt-8 text-gray-500 leading-relaxed text-sm">
                    {item.text}
                  </p>

                  <h3 className="mt-6 text-2xl font-bold text-gray-800 dark:text-white">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-4 mt-10">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                selectedIndex === index
                  ? "bg-gray-900 scale-125"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



