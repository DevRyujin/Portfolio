"use client";

import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiStackshareLine } from "react-icons/ri";
import { MdWifiCalling3, MdLocationOn } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "success" | "error" | null;

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [cardVisible, setCardVisible] = useState(false);
  const [status, setStatus] = useState<Status>(null);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const contactItems = [
    {
      icon: <MdLocationOn size={22} className="text-blue-500" />,
      title: "Address",
      info: "867 Saint Paul st. Barracks II Tala, Caloocan City, Philippines",
    },
    {
      icon: <MdWifiCalling3 size={22} className="text-green-500" />,
      title: "Phone",
      info: "+63 999 564 3658",
    },
    {
      icon: <HiOutlineMail size={22} className="text-red-500" />,
      title: "Email",
      info: "santosjade212@gmail.com",
    },
    {
      icon: <RiStackshareLine size={22} className="text-purple-500" />,
      title: "Social",
      info: (
        <div className="flex gap-5 flex-wrap">
          <a
            href="https://web.facebook.com/santosandrei"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition transform hover:scale-110"
          >
            <FaFacebook size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/jade-andrei-santos/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 transition transform hover:scale-110"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://github.com/DevRyujin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition transform hover:scale-110"
          >
            <IoLogoGithub size={32} />
          </a>
        </div>
      ),
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mgvldbwj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmittedData(formData);
        setStatus("success");
        setCardVisible(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setCardVisible(true);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setCardVisible(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-16"
    >
      <div className="relative mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-400 tracking-widest">
          Connect with Me
        </h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-1 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-700 mx-auto mt-2 rounded"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          {contactItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-background/80 backdrop-blur-md rounded-xl border border-gray-700 p-5 flex items-start gap-4 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-transform cursor-pointer overflow-visible"
            >
              <span className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-gradient-to-tr from-gray-100 to-gray-800 z-10"></span>
              <div className="flex-shrink-0 z-10 mt-1">{item.icon}</div>
              <div className="flex flex-col justify-center z-10">
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                {typeof item.info === "string" ? (
                  <p className="text-sm text-muted-foreground break-words">
                    {item.info}
                  </p>
                ) : (
                  <div className="text-sm text-muted-foreground">
                    {item.info}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-background/80 backdrop-blur-md rounded-xl border border-gray-700 p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-transform"
        >
          <h3 className="text-2xl font-bold mb-2 text-foreground">
            Send a Message
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 rounded-lg bg-black/30 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 rounded-lg bg-black/30 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
              />
            </div>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject / About"
              className="w-full px-4 py-2 rounded-lg bg-black/30 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="w-full h-32 px-4 py-2 rounded-lg bg-black/30 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none transition"
            />

            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-gradient-to-r from-gray-200 via-gray-600 to-gray-900 text-white font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* Popup Card */}
      <AnimatePresence>
        {cardVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4"
          >
            <div className="bg-background p-4 sm:p-6 rounded-xl shadow-2xl border border-gray-700 max-w-md w-full relative overflow-auto">
              {/* Close button */}
              <button
                onClick={() => setCardVisible(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-white"
              >
                ✖
              </button>

              <h3 className="text-xl font-bold mb-3">
                {status === "success" ? "Message Sent ✅" : "Failed to Send ❌"}
              </h3>

              {status === "success" && submittedData ? (
                <div className="text-sm text-gray-300 space-y-2 break-words">
                  <p>
                    <strong>Name:</strong> {submittedData.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {submittedData.email}
                  </p>
                  <p>
                    <strong>Subject:</strong> {submittedData.subject}
                  </p>
                  <p>
                    <strong>Message:</strong> {submittedData.message}
                  </p>
                </div>
              ) : null}

              {status === "error" && (
                <p className="text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="
        fixed bottom-6 right-6
        p-3 rounded-full
        bg-gradient-to-r from-gray-200 via-gray-600 to-gray-900
        text-white shadow-xl
        z-50
      "
          >
            <ChevronUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactForm;
