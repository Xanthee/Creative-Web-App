import { Link } from "react-router-dom";
import React from "react";
import "../index.css";
import { motion } from "framer-motion";
import FirstUseByDesign from "../assets/FirstUseByDesign.png";
import FinalUseByDesign from "../assets/FinalUseByDesign.png";
import FirstLunaDesign from "../assets/FirstLunaDesign.png";
import FinalLunaDesign from "../assets/FinalLunaDesign.png";

export default function UXDesignPage() {
  return (
    <div className="h-auto w-full max-w-full mx-auto flex flex-col items-center justify-center overflow-x-hidden box-border mt-[10vh]">
      <motion.h1
        className="font-thin font-josefin text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 mt-12 text-center px-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        UX/UI DESIGNS
      </motion.h1>

      {/* UseBy Project */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-[90%] mx-auto mb-12 px-4">
        <div className="flex flex-col space-y-4 sm:space-y-6">
          <div className="bg-[#886F77] p-4 sm:p-6 rounded-lg shadow-md flex-1 flex items-center justify-center">
            <img
              src={FirstUseByDesign}
              alt="First UseBy Design"
              className="w-full max-w-full h-auto max-h-[250px] sm:max-h-[300px] object-contain rounded-xl"
            />
          </div>
          <div className="bg-[#886F77] p-4 sm:p-6 rounded-lg shadow-md flex-1 flex items-center justify-center">
            <img
              src={FinalUseByDesign}
              alt="Final UseBy Design"
              className="w-full max-w-full h-auto max-h-[250px] sm:max-h-[300px] object-contain rounded-xl"
            />
          </div>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <h2 className="font-thin font-josefin text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">
              PROJECT: USEBY
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4">
              In this project, I took on the responsibilities of creating the UX/UI wireframing, front-end
              development of the app using React Native, and the design and implementation of the promotional
              website. Each role required me to use creative problem-solving to grasp the users' needs based on
              the target audience. In addition, I applied technical execution to bring key features into the app
              and collaborated with the team to ensure our final product aligned with both user needs and the
              group’s collective vision.
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4">
              I was responsible for creating the UX/UI wireframes for our app using tools like Figma, drawing
              inspiration from apps such as NoWaste and Fridgely to research competitors and create a unique
              design. This process involved continuous communication with my team to ensure the design reflected
              both functional requirements and the preferences of our target audience.
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4">
              The first wireframe was a basic layout focused on establishing the app’s core features and
              structure.
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4">
              The second iteration, based on team feedback, expanded on the visual hierarchy and user flow.
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4">
              These wireframes served as a skeleton for our development, acting as a reference point for both
              myself and the other developers throughout the building process in React Native.
            </p>
          </div>
        </div>
      </div>

      {/* Luna Cafe Project */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-[90%] mx-auto px-4 mb-12">
        <div className="flex flex-col space-y-4 sm:space-y-6">

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h2 className="font-thin font-josefin text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">
                PROJECT: LUNA CAFE
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4">
                The three initial prototypes for the website were created with a focus on the target audience and
                their preferences, aiming to deliver a visually appealing and user-friendly experience on the home
                page. Each prototype incorporated different features and layouts to explore what would best align
                with the intended purpose and overall aesthetic of the website.
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4">
                One key design consideration was the inclusion of a side navigation bar. While intuitive, it
                conflicted with the envisioned layout, particularly with the planned footer, as both elements
                would clutter the interface and detract from the simplicity and usability of the design. Another
                priority was achieving a balance between visual engagement and simplicity, ensuring the home page
                featured prominent images and key information while maintaining sufficient whitespace to avoid
                overwhelming the user.
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4">
                The design of the front end for Luna Café draws inspiration from the modern simplicity of sites
                like Starbucks. I aimed to create a bright, eye-catching interface that keeps users engaged. The
                use of colors reflects a nature-inspired aesthetic, with images ensuring important information
                stands out effectively.
              </p>
            </div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex-1 flex items-center justify-center">
            <img
              src={FirstLunaDesign}
              alt="First Luna Design"
              className="w-full max-w-full h-auto max-h-[250px] sm:max-h-full object-contain rounded-xl"
            />
          </div>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex items-center justify-center">
          <img
            src={FinalLunaDesign}
            alt="Final Luna Design"
            className="w-full max-w-full h-auto max-h-[500px] sm:max-h-full object-contain rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}