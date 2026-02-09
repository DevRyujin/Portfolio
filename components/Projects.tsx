"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const projects = [
  {
    title: "Meals On Wheels",
    description:
      "Meals on Wheels is a community-focused food service that ensures reliable access to meals, using an API to calculate distance between users and community kitchens, delivering hot meals within 10 km and frozen meals beyond.",
    tech: ["Spring Boot", "MySQL", "React", "Tailwind", "Google Maps API"],
    image: "/mow.png",
    link: "https://github.com/DevRyujin/mealsonwheels-project",
  },
  {
    title: "Enomy Finances",
    description:
      "Enomy-Finances is a platform that streamlines financial services with currency exchange, savings and investment tools, and secure data management through a simple and user-friendly interface.",
    tech: ["Spring", "MySQL", "Thymeleaf", "Tailwind", "CurrencyAPI"],
    image: "/enomy.png",
    link: "#",
  },
  {
    title: "DoBu Martial Arts",
    description:
      "DoBu Martial Arts is a training center that offers diverse martial arts and fitness programs. The new website enhances its online presence, promotes services, and provides an intuitive platform for members and visitors.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/dobu.png",
    link: "https://github.com/DevRyujin/DoBu-Martial-Art",
  },
  {
    title: "Jumpstart",
    description:
      "Jumpstart is a fashion e-commerce website that delivers a seamless shopping experience with trendy clothing and accessories. An AI-powered system helps users discover products tailored to their style and preferences.",
    tech: ["Spring Boot", "MySQL", "React", "Tailwind", "FastAPI"],
    image: "/jumpstart.png",
    link: "https://github.com/DevRyujin/Jumpstart-Capstone",
  },
  {
    title: "North Sussex Judo",
    description:
      "A calculator in Java language. This application provides efficient and accurate arithmetic computations while showcasing core programming principles in Java.",
    tech: ["Java"],
    image: "/nsj.png",
    link: "https://github.com/DevRyujin/North-Sussex-Judo-Calculator",
  },
  {
    title: "Prototype Design - Boutiqa | Axure",
    description:
      "A prototype design using Axure to enhance UI/UX skills. This project focuses on creating intuitive user interfaces, optimizing user flows, and demonstrating best practices in interactive design.",
    tech: ["Axure"],
    image: "/boutiqa.png",
    link: "#projects",
  },
];

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % projects.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + projects.length) % projects.length);
    }
  };

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-16 overflow-x-hidden"
    >
      {/* Section Title */}
      <div className="flex mb-12">
        <div className="inline-block p-[2px] rounded-lg bg-gradient-to-r from-gray-200 to-gray-600">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-400 bg-background rounded-lg px-4 sm:px-6 py-2 tracking-widest">
            Projects
          </h2>
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between rounded-2xl bg-card p-4 sm:p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-transform overflow-hidden"
          >
            {/* Image with corner lines */}
            <div
              className="relative w-full h-48 mb-4 rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <span className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-white"></span>
              <span className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-white"></span>
              <span className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-white"></span>
              <span className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-white"></span>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 tracking-widest montserrat">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-xs sm:text-sm font-semibold montserrat uppercase tracking-wide mb-2">
                  Technology
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-muted text-foreground montserrat shadow-sm"
                    >
                      {tech}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Button */}
            <a
              href={project.link}
              className="inline-block px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-gray-200 via-gray-600 to-gray-900 text-white hover:opacity-90 transition text-center"
            >
              View Source Code
            </a>
          </motion.div>
        ))}
      </div>

      {/* Image Modal (Lightbox) */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Background click closes modal */}
            <div
              className="absolute inset-0"
              onClick={() => setSelectedIndex(null)}
            />

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90%] max-w-3xl h-[70%] z-10 flex items-center"
            >
              <Image
                src={projects[selectedIndex].image}
                alt="Expanded view"
                fill
                className="object-contain rounded-lg"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 transition rounded-full w-10 h-10 flex items-center justify-center z-20"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 transition rounded-full w-10 h-10 flex items-center justify-center z-20"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 transition rounded-full w-10 h-10 flex items-center justify-center z-20"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
