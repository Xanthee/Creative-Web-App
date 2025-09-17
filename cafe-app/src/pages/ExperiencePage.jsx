import { Link } from "react-router-dom";
import React from 'react';
import "../index.css";
import { motion } from "framer-motion";
import WebDev from '../assets/WebDev.png';

export default function ExperiencePage() {
    return (
        <div className="flex flex-col w-auto h-auto mt-[10vh] m-10">
            <motion.h1
                className="font-thin font-josefin text-4xl md:text-6xl lg:text-7xl mb-6 mt-12"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                SELECT WORKS
            </motion.h1>
            <motion.div
                className="flex-grow border-t border-gray-600 mb-10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group text-white flex flex-col h-[55vh] rounded-3xl overflow-hidden">
                    <Link to="/frontend" className="h-[75%] w-full overflow-hidden block cursor-pointer">
                        <img
                            src={WebDev}
                            alt="Front-End Development"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </Link>
                    <div className="h-[25%] bg-[#331C20]/70 p-4 flex flex-col">
                        <h1 className="text-2xl uppercase font-thin text-[#EEDEE0]">Front-End Development</h1>
                        <span className="text-lg md:text-lg lg:text-lg mb-12">
                            Where my ideas become interactive, functional websites.
                        </span>
                    </div>
                </div>

                <div className="text-white flex flex-col h-[55vh] rounded-3xl overflow-hidden">
                    <Link to="/uxdesign" className="h-[75%] w-full overflow-hidden block cursor-pointer">
                        <img
                            src={WebDev}
                            alt="UX/UI Design"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </Link>
                    <div className="h-[25%] bg-[#331C20]/70 p-4 flex flex-col">
                        <h1 className="text-2xl uppercase font-thin text-[#EEDEE0]">UX/UI Design</h1>
                        <span className="text-sm font-light text-[#EEDEE0]">From wireframes to polished designs.</span>
                    </div>
                </div>

                <div className="text-white flex flex-col h-[55vh] rounded-3xl overflow-hidden">
                    <Link to="/uxresearch" className="h-[75%] w-full overflow-hidden block cursor-pointer">
                        <img
                            src={WebDev}
                            alt="UX Research & Strategy"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </Link>
                    <div className="h-[25%] bg-[#331C20]/70 p-4 flex flex-col">
                        <h1 className="text-xl uppercase font-thin text-[#EEDEE0]">UX Research & Strategy</h1>
                        <span className="text-sm font-light text-[#EEDEE0]">Research, strategy, and data-driven approaches to problem solving.</span>
                    </div>
                </div>

                <div className="text-white flex flex-col h-[55vh] rounded-3xl overflow-hidden">
                    <Link to="/creativework" className="h-[75%] w-full overflow-hidden block cursor-pointer">
                        <img
                            src={WebDev}
                            alt="Visual & Creative Work"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </Link>
                    <div className="h-[25%] bg-[#331C20]/70 p-4 flex flex-col">
                        <h1 className="text-xl uppercase font-thin text-[#EEDEE0]">Visual & Creative Work</h1>
                        <span className="text-sm font-light text-[#EEDEE0]">Exploring creativity through 3D, illustration, and digital art.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}