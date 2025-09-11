import { Link } from "react-router-dom"
import React from 'react';
import "../index.css";
import Images from '../components/Images.jsx';
import { motion } from "framer-motion";

export default function IndexPage() {
    return (

    <div className="flex flex-col w-auto h-auto items-center mt-[10vh] p-3 m-10 ">
        <div className="flex flex-col justify-around h-[85vh] w-[90vw]">
            <div className="h-[20%]">
                <motion.h1
                    className="font-thin font-josefin text-xl md:text-2xl lg:text-5xl"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    HI, IM XANTHE
                </motion.h1>

                <motion.h1
                    className="font-light font-josefin text-4xl md:text-6xl lg:text-7xl mb-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    A WEB DEVELOPER AND UX DESIGNER.
                </motion.h1>
                <div className="flex items-center my-2">
                    <motion.div
                        className="flex-grow border-t border-gray-600"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    />
                    <button
                        className="ml-4 px-4 py-2 bg-[#331C20] text-[#EEDEE0] rounded"
                        onClick={() => window.open("/Xanthe_Parsons_CV.pdf", "_blank")}
                    >
                        CV
                    </button>
                </div>

            </div>
            <Images className="" />
        </div>
        <div className="mt-2">
            <h1 className="font-light font-josefin text-xl md:text-2xl lg:text-4xl">MY WORK</h1>
        </div>
    </div>
    

    );
}