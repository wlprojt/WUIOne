"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { title: "Home", href: "#home" },
    { title: "Top Rated", href: "#topproduct" },
    { title: "Kids Wear", href: "#kids" },
    { title: "Men Wear", href: "#men" },
    { title: "Women Wear", href: "#women" },
    { title: "Saari", href: "#saari" },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-md bg-white dark:bg-gray-900 dark:text-white transition-all duration-300">
      
      {/* Top Navbar */}
      <div className="bg-[#fddcad] dark:bg-[#70532b] py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-2xl sm:text-3xl flex items-center gap-2"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            STYLE
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Search */}
            <div className="relative hidden sm:block group">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 bg-white dark:text-white px-4 py-2 pr-10 focus:outline-none"
              />
              <FaSearch className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 group-hover:text-[#fddcad] group-hover:dark:text-[#70532b]" />
            </div>

            {/* Cart */}
            <button className="bg-gradient-to-r from-[#fca826] to-[#ee8c04] text-white py-2 px-5 rounded-full flex items-center gap-3 hover:scale-105 transition-all duration-300">
              <span className="hidden md:block">Order</span>
              <FaShoppingCart className="text-xl" />
            </button>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
                className="text-2xl hover:scale-110 transition-all"
              >
                <Image
                  src={theme === "dark" ? "/dark.png" : "/light.png"}
                  alt="theme"
                  width={52}
                  height={52}
                />
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="sm:hidden text-2xl"
            >
              {mobileMenu ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
<div className="hidden sm:flex justify-center py-4 border-t border-gray-200 dark:border-gray-700 animate-menuScale">
  <ul className="flex items-center gap-8">
    {menuItems.map((item) => (
      <li key={item.title}>
        <a
          href={item.href}
          className="hover:text-[#ee8c04] transition duration-300 font-medium"
        >
          {item.title}
        </a>
      </li>
    ))}

    <li className="relative group">
      <button className="flex items-center gap-2 font-medium">
        Trending
        <FaChevronDown className="group-hover:rotate-180 transition-all duration-300" />
      </button>

      <div className="absolute top-full left-0 mt-2 pb-2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white text-gray-900 shadow-xl rounded-lg w-56 overflow-hidden z-50">
        <a href="#trending" className="block px-4 py-3 mx-2 hover:bg-[#feeed6] rounded-lg">
          Trending Products
        </a>

        <a href="#offer" className="block px-4 py-3 mx-2 hover:bg-[#feeed6] rounded-lg">
          Best Selling
        </a>

        <a href="#topproduct" className="block px-4 py-3 mx-2 hover:bg-[#feeed6] rounded-lg">
          Top Rated
        </a>
      </div>
    </li>
  </ul>
</div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="sm:hidden bg-white dark:bg-gray-900 px-6 pb-6 border-t border-gray-200 dark:border-gray-700">
          
          {/* Mobile Search */}
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white px-4 py-3 pr-10 focus:outline-none"
            />
            <FaSearch className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500" />
          </div>

          <ul className="flex flex-col gap-4 mt-6">
            {menuItems.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className="block py-2 hover:text-pink-500"
                >
                  {item.title}
                </a>
              </li>
            ))}

            <a
              href="#trending"
              onClick={() => setMobileMenu(false)}
              className="py-2 hover:text-pink-500"
            >
              Trending Products
            </a>

            <a
              href="#offer"
              onClick={() => setMobileMenu(false)}
              className="py-2 hover:text-pink-500"
            >
              Best Selling
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}