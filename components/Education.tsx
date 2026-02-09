"use client";

import { motion } from "framer-motion";

const Education = () => {
  const timeline = [
    {
      year: "2024 - PRESENT",
      school: "First City Providential College",
      course:
        "Bachelor of Science in Information Technology - Software Engineering",
    },
    {
      year: "2024 - PRESENT",
      school: "Lithan Academy Singapore",
      course: "Applied Degree in Software Engineering",
    },
    {
      year: "2021 - 2023",
      school: "Lagro High School - Senior High",
      course:
        "Technical-Vocational-Livelihood - Information and Communication Technology",
    },
  ];

  return (
    <section
      id="education"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-16 relative overflow-x-hidden font-mono"
    >
      {/* Heading with gradient border */}
      <div className="inline-block p-[2px] rounded-lg bg-gradient-to-r from-gray-200 to-gray-600 mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-400 text-center bg-background rounded-lg px-4 sm:px-6 py-2 tracking-widest">
          Education
        </h2>
      </div>

      <div className="relative border-l-4 border-border pl-6 sm:pl-10 space-y-8 sm:space-y-10">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative bg-card/60 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-lg border border-border break-words"
          >
            {/* Circle marker */}
            <span className="absolute -left-3 sm:-left-3 top-6 w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-gradient-to-r from-gray-100 to-gray-800 border-2 border-background" />

            <h3 className="text-base sm:text-lg font-bold montserrat tracking-widest text-pink-800">
              {item.year}
            </h3>
            <h4 className="text-lg sm:text-xl font-semibold font-lexend tracking-wider text-gray-300">
              {item.school}
            </h4>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base tracking-wide">
              {item.course}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
