"use client";

import Image from "next/image";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{
    backgroundImage: "url('/footer.jpg')",
    backgroundPosition: "bottom",
  }}
    >
      <div className="">
         <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="max-w-7xl mx-auto px-6 py-20"
    >
        <div className="max-w-7xl h-220 md:h-100 mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            {/* Logo Section */}
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={45}
                  height={45}
                />
                <h2 className="text-4xl font-bold uppercase">
                  Style
                </h2>
              </div>

              <p className="mt-6 text-gray-200 leading-relaxed text-lg">
                Welcome to Style, your ultimate destination for
                trendy and stylish apparel. From casual wear to formal attire,
                we've got you covered with the latest fashion trends.
              </p>
            </div>

            {/* Important Links */}
            <div>
              <h3 className="text-3xl font-bold mb-6">Important Links</h3>

              <ul className="space-y-4 text-lg">
                <li>
                  <a href="#home" className="hover:text-[#f59e0b] transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#f59e0b] transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#f59e0b] transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-3xl font-bold mb-6">Links</h3>

              <ul className="space-y-4 text-lg">
                <li>
                  <a href="#home" className="hover:text-[#f59e0b] transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#f59e0b] transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#f59e0b] transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="flex gap-5 text-3xl mb-8">
                <a href="#"><FaWhatsapp /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaGithub /></a>
              </div>

              <div className="space-y-5 text-lg">
                <div className="flex items-center gap-3">
                  <FiSend />
                  <span>Jabalpur, Madhya Pradesh</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaPhoneAlt />
                  <span>+91 123456789</span>
                </div>
              </div>
            </div>

          </div>
        </div>
        </motion.div>
      </div>
    </footer>
  );
}