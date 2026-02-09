"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-16 relative overflow-x-hidden"
    >
      {/* Corner Borders */}
      <div className="absolute top-0 left-0 w-6 h-6 sm:w-10 sm:h-10 border-t-4 border-l-4 border-primary rounded-tl-lg"></div>
      <div className="absolute top-0 right-0 w-6 h-6 sm:w-10 sm:h-10 border-t-4 border-r-4 border-primary rounded-tr-lg"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-10 sm:h-10 border-b-4 border-l-4 border-primary rounded-bl-lg"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-10 sm:h-10 border-b-4 border-r-4 border-primary rounded-br-lg"></div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-400 text-center tracking-widest">
        About Me
      </h2>

      {/* Animated gradient underline */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "6rem" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="h-1 mx-auto mb-8 bg-gradient-to-r from-gray-200 to-gray-600 rounded-full"
      />

      <div className="space-y-6 text-justify sm:text-left break-words font-mono">
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
          I&apos;m{" "}
          <span className="font-semibold text-indigo-400 montserrat">
            Jade Andrei Santos
          </span>
          , a passionate{" "}
          <span className="font-semibold text-indigo-400 montserrat">
            software developer
          </span>{" "}
          dedicated to building efficient, scalable, and user-friendly web
          applications. I enjoy bridging design and technology to create
          seamless and meaningful digital experiences.
        </p>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
          I am currently a{" "}
          <span className="font-semibold">2nd-year college student</span> at{" "}
          <span className="font-semibold text-pink-800 montserrat">
            EduCLaaS Lithan Singapore
          </span>{" "}
          and{" "}
          <span className="font-semibold text-indigo-400 montserrat">
            First City Providential College
          </span>
          , pursuing a{" "}
          <span className="font-semibold text-indigo-400 montserrat">
            Bachelor of Science in Information Technology - Software Engineering
          </span>
          . My academic journey continues to strengthen my skills in
          problem-solving, critical thinking, and building systems that make a
          difference.
        </p>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
          Beyond coding, I value{" "}
          <span className="font-semibold">collaboration</span>,{" "}
          <span className="font-semibold">adaptability</span>, and{" "}
          <span className="font-semibold">creative problem-solving</span> —
          qualities that help me grow not only as a developer but also as a
          teammate and innovator.
        </p>
      </div>
    </section>
  );
};

export default About;
