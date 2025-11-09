import { Link } from "react-router-dom"
import React from 'react';
import { motion } from "framer-motion";
import "../index.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdPerson } from "react-icons/md";


export default function ContactPage() {
    
    return (

        <div className="max-w-full w-full mt-[10vh] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-center">
            <div className="w-[90vw] flex flex-col grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col  justify-center items-center">
                    <div className="h-auto w-[90%]">
                        <motion.h1
                            className="font-thin font-josefin text-4xl md:text-6xl lg:text-7xl mb-6 mt-12"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            GET IN TOUCH
                        </motion.h1>

                        <div className="flex flex-row items-center space-y-2 mb-4">
                            <MdPerson size={50} className="text-blue-600 mr-2" />
                            <span className="text-l md:text-xl lg:text-2xl">XANTHE PARSONS</span>
                        </div>

                        <div className="flex flex-row items-center space-y-2 mb-4">
                            <MdEmail size={50} className="text-blue-600 mr-2" />
                            <span className="text-l md:text-xl lg:text-2xl">XANTHE.SNIPS@GMAIL.COM</span>
                        </div>

                        <div className="flex flex-row items-center space-y-2 mb-4">
                            <FaLinkedin size={50} className="text-blue-600 mr-2" />
                            <span className="text-l md:text-xl lg:text-2xl">xanthe-parsons-7b5080223</span>
                        </div>

                        <div className="flex flex-row items-center space-y-2 mb-4">
                            <FaGithub size={50} className="text-blue-600 mr-2" />
                            <span className="text-l md:text-xl lg:text-2xl">XANTHEE</span>
                        </div>

                        <div className="flex flex-row items-center space-y-2 mb-4">
                            <FaInstagram size={50} className="text-blue-600 mr-2" />
                            <span className="text-l md:text-xl lg:text-2xl">X.A.N.T.H.E</span>
                        </div>
                        
                        <div className="flex flex-row items-center space-y-2 mb-4">
                            <MdPhone size={50} className="text-blue-600 mr-2" />
                            <span className="text-l md:text-xl lg:text-2xl">07462 220255</span>
                        </div>

                        <div className="flex flex-row items-center space-y-2 mb-4">
                            <MdLocationOn size={50} className="text-blue-600 mr-2" />
                            <span className="text-l md:text-xl lg:text-2xl">PORTSMOUTH</span>
                        </div>

                    </div>
                </div>
                <div className="flex flex-row w-full max-w-full items-center justify-center mt-10">

                </div>
            </div>
        </div>

    );
}