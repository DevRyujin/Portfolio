"use client";

import { color, motion, type Transition } from "framer-motion";
import { SiSpringboot } from "react-icons/si";
import {
  Users,
  MessageCircle,
  Brain,
  Clock,
  Lightbulb,
  Target,
  Sparkles,
  Compass,
  BrainCircuit,
} from "lucide-react";

const Skills = () => {
  const cardTransition: Transition = {
    duration: 0.25,
    ease: "easeOut",
  };

  const techs = [
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Next.js", icon: "devicon-nextjs-original-wordmark" },
    { name: "Spring", icon: "devicon-spring-plain colored" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    { name: "HTML5", icon: "devicon-html5-plain colored" },
    { name: "CSS3", icon: "devicon-css3-plain colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "GitHub", icon: "devicon-github-original colored" },
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
    { name: "Java", icon: "devicon-java-plain" },
    { name: "Laravel", icon: "devicon-laravel-original colored" },
    { name: "Generative AI", icon: BrainCircuit, color: "#a855f7" },
  ];

  const softSkills = [
    { name: "Communication", icon: MessageCircle, color: "#22c55e" },
    { name: "Teamwork", icon: Users, color: "#3b82f6" },
    { name: "Problem Solving", icon: Brain, color: "#ef4444" },
    { name: "Adaptability", icon: Compass, color: "#06b6d4" },
    { name: "Time Management", icon: Clock, color: "#f97316" },
    { name: "Critical Thinking", icon: Target, color: "#a855f7" },
    { name: "Creativity", icon: Sparkles, color: "#eab308" },
    { name: "Leadership", icon: Lightbulb, color: "#facc15" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-20 py-16" id="skills">
      <div className="flex justify-end">
        <div className="inline-block p-[2px] rounded-lg bg-gradient-to-r from-gray-200 to-gray-600 mb-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-400 bg-background rounded-lg px-6 py-2 tracking-widest">
            Skills & Technologies
          </h2>
        </div>
      </div>

      {/* Tech Skills Grid */}
      <div>
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 mt-4 tracking-widest montserrat">
          Technical Skills
        </h3>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {techs.map((tech) => (
          <motion.li
            key={tech.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={cardTransition}
            whileHover={{
              scale: 1.1,
              y: -5,
              boxShadow: "0px 0px 25px rgba(168,85,247,0.6)",
            }}
            className="bg-card shadow-md rounded-2xl p-3 flex flex-col items-center justify-center gap-1 text-lg sm:text-xl border border-border hover:shadow-lg transition-all"
          >
            {typeof tech.icon === "string" ? (
              <i className={`${tech.icon} text-6xl`} />
            ) : (
              <tech.icon size={50} color={tech.color || "#000"} />
            )}
            <span className="text-muted-foreground font-medium">
              {tech.name}
            </span>
          </motion.li>
        ))}
      </ul>

      {/* Soft Skills Grid */}
      <div>
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-2 mt-12 tracking-widest montserrat">
          Soft Skills
        </h3>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-4">
        {softSkills.map((skill) => (
          <motion.li
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={cardTransition}
            whileHover={{
              scale: 1.1,
              y: -5,
              boxShadow: "0px 0px 25px rgba(168,85,247,0.8)",
            }}
            className="bg-card shadow-md rounded-2xl p-3 flex flex-col items-center justify-center gap-1 text-lg sm:text-xl border border-border hover:shadow-lg transition-all"
          >
            <div title={skill.name}>
              <skill.icon size={50} color={skill.color} />
            </div>
            <span className="text-muted-foreground font-medium">
              {skill.name}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
