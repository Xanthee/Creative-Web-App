import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import "../index.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdPerson } from "react-icons/md";

export default function ContactPage() {
  // Animation variants for container and children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between each item
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -30 }, // start slightly above
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="max-w-full flex-grow w-full mt-[10vh] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-center">
      <div className="w-[90vw] grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center items-center">
          <div className="h-auto w-[90%] font-thin">
            <motion.h1
              className="font-thin font-josefin text-4xl md:text-6xl lg:text-7xl mb-6 mt-12"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              GET IN TOUCH
            </motion.h1>

            {/* Parent container controls the staggered timing */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="space-y-4 mb-8"
            >
              {/* Each item fades/slides in from top */}
              <motion.div
                variants={itemVariants}
                className="flex flex-row items-center mb-4"
              >
                <MdPerson size={50} className="text-[#331C20] mr-2" />
                <span className="text-4xl">XANTHE PARSONS</span>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-row items-center mb-4"
              >
                <MdEmail size={50} className="text-[#331C20] mr-2" />
                <span className="text-4xl">XANTHE.SNIPS@GMAIL.COM</span>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-row items-center mb-4"
              >
                <FaLinkedin size={50} className="text-[#331C20] mr-2" />
                <span className="text-4xl">xanthe-parsons-7b5080223</span>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-row items-center mb-4"
              >
                <FaGithub size={50} className="text-[#331C20] mr-2" />
                <span className="text-4xl">XANTHEE</span>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-row items-center mb-4"
              >
                <MdPhone size={50} className="text-[#331C20] mr-2" />
                <span className="text-4xl">07462 220255</span>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-row items-center mb-8"
              >
                <MdLocationOn size={50} className="text-[#331C20] mr-2" />
                <span className="text-4xl">PORTSMOUTH</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-row w-full max-w-full items-center justify-center mt-10"></div>
      </div>
    </div>
  );
}
