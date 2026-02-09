"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div
      className="
        max-w-6xl mx-auto mt-4 mb-6 md:mb-0
        rounded-2xl p-[2px]
        bg-gradient-to-r
        from-gray-200 via-gray-600 to-gray-800
        shadow-lg relative z-50
      "
    >
      <nav
        className="
          bg-neutral-900 rounded-2xl
          px-6 py-4
          flex items-center justify-between
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-gray-400 tracking-widest font-lexend"
        >
          ANDREI
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                relative text-gray-400 font-medium tracking-widest font-mono
                after:absolute after:-bottom-1 after:left-1/2 after:h-[2px]
                after:w-0
                after:bg-gradient-to-r
                after:from-gray-200 after:via-gray-400 after:to-gray-700
                after:transition-all after:duration-300
                after:origin-center
                hover:after:w-full hover:after:-translate-x-1/2
              "
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile burger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="p-2 rounded-md hover:bg-gray-700 transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile sidebar */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/30 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />

              {/* Sidebar */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="
                  fixed top-0 right-0 h-full w-64
                  bg-background shadow-2xl
                  border-l border-gray-800
                  p-6 flex flex-col z-50
                "
              >
                {/* Close button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="p-2 rounded-md hover:bg-gray-700 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Links */}
                <div className="flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="
                        relative text-foreground text-lg font-medium
                        after:absolute after:-bottom-1 after:left-1/2 after:h-[2px]
                        after:w-0
                        after:bg-gradient-to-r
                        after:from-pink-500 after:via-purple-500 after:to-blue-500
                        after:transition-all after:duration-300
                        after:origin-center
                        hover:after:w-full hover:after:-translate-x-1/2
                      "
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
