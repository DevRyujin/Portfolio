"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const roles: ReadonlyArray<string> = Object.freeze([
  "Frontend Developer",
  "Backend Developer",
  "Full-Stack Developer",
  "Software Engineer",
]);

const Hero = () => {
  const fullName = "Jade Andrei Santos";

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const pauseTime = 1500;

  useEffect(() => {
    const typingSpeed = deleting ? 50 : 120;

    if (subIndex === roles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pauseTime);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <section className="w-full overflow-x-hidden bg-background min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-20 pt-0 pb-12 gap-8 md:gap-12">
      {/* Image section */}
      <div className="flex-shrink-0 overflow-x-hidden">
        <Image
          src="/prof-pic.png"
          alt="Jade Andrei Santos"
          width={300}
          height={300}
          className="w-40 sm:w-52 md:w-72 rounded-2xl shadow-lg object-cover max-w-full"
          priority
        />
      </div>

      {/* Text content */}
      <div className="text-center md:text-left max-w-full md:max-w-3xl font-sans break-words justify-center md:justify-start">
        {/* Full name */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-montserrat tracking-wide mb-6 bg-gradient-to-r
                  from-gray-200 via-gray-600 to-gray-700 bg-clip-text text-transparent leading-snug break-words 
                  overflow-x-hidden"
        >
          {fullName.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05, duration: 0.02 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* Typewriter role */}
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl justify-center md:justify-start font-medium mb-4 min-h-[2.5rem] flex items-center gap-2 text-muted-foreground font-mono">
          <ChevronLeft className="text-indigo-400 opacity-80" size={28} />
          <span>I&apos;m a</span>

          {/* typed + underline */}
          <div className="relative inline-block">
            <span className="font-semibold text-indigo-400">
              {roles[index].substring(0, subIndex)}
            </span>

            <motion.div
              className="absolute left-0 -bottom-1 h-[2px] bg-indigo-400"
              animate={{
                width: `${(subIndex / roles[index].length) * 100}%`,
              }}
              transition={{ ease: "easeOut", duration: 0.15 }}
            />
          </div>

          <span className="text-indigo-400">/</span>

          <ChevronRight className="text-indigo-400 opacity-80" size={28} />

          <motion.span
            className="inline-block w-px h-6 sm:h-8 md:h-10 bg-foreground ml-1"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
        </div>

        {/* Passionate sentence */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 break-words overflow-x-hidden font-mono">
          Passionate about building modern, responsive, and user-friendly
          applications.
        </p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="/Jade_Andrei_Santos-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3 rounded-2xl bg-gradient-to-r from-gray-200 via-gray-600 to-gray-900 text-gray-200 hover:opacity-90 text-center font-medium shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            View Resume
          </a>
          <a
            href="https://www.youtube.com/watch?v=your-video-id"
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative inline-block rounded-2xl p-[2px]
              bg-gradient-to-r from-gray-200 via-gray-600 to-gray-800
              hover:scale-105 transition-transform duration-300
            "
          >
            <span
              className="
                block rounded-2xl
                bg-background text-gray-200
                px-6 py-3 font-medium shadow-md
                transition-all duration-300
                hover:bg-transparent hover:text-gray-200
              "
            >
              Watch Video Introduction
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
