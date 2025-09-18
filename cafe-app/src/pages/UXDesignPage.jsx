import { Link } from "react-router-dom"
import React from 'react';
import "../index.css";
import { motion } from "framer-motion";
import FirstUseByDesign from '../assets/FirstUseByDesign.png';
import FinalUseByDesign from '../assets/FinalUseByDesign.png';

export default function UXDesignPage() {
    return (

    <div className="h-auto w-full md:w-[90%] mt-[10vh] mx-auto flex flex-col items-center justify-center">
            <motion.h1
                className="font-thin font-josefin text-4xl md:text-6xl lg:text-7xl mb-12 mt-12"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                UX/ UI DESIGNS
            </motion.h1> 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src={FirstUseByDesign} className="block object-contain rounded-xl" />
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src={FinalUseByDesign} className="block object-contain rounded-xl" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md md:row-span-2">
                    <h2 className="font-thin font-josefin text-2xl md:text-2xl lg:text-4xl mb-4">PROJECT: USEBY</h2>
                    <p className="text-sm md:text-sm lg:text-lg mb-4">
                       In this project, I took on the responsibilities of creating the UX/UI wireframing, front-end development of the app using React Native and the design and implementation of the promotional website. Each role required me to use creative problem solving so we are able to grasp the users' needs based on the target audience. In addition to this, I was also required to use technical execution, to allow these key features to be brought into the app and team collaboration to ensure our final product aligned with both user needs and group’s collective vision.                        
                    </p>
                    <p className="text-sm md:text-sm lg:text-lg mb-4">I was responsible for creating the UX/UI wireframes for our app using other apps such as NoWaste and Fridgely for research as to see what our competitors had and tried to create something more unique using Figma. This process involved continuous communication with my group to ensure the design reflected both our functional requirements and the preferences of our target audience.</p>
                    <p className="text-sm md:text-sm lg:text-lg mb-4">The first was a basic layout focused on establishing our app’s core features and the structure we wanted.</p>
                    <p className="text-sm md:text-sm lg:text-lg mb-4">The second was from gathering team feedback which encouraged me to develop a second vision which was expanded on using the visual hierarchy and user flow.</p>
                    <p className="text-sm md:text-sm lg:text-lg mb-4">These wireframes served as a skeleton for our development, acting as a reference point for both myself and the other developers throughout the building process in React Native.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
                <div className="w-full aspect-video">

                </div>
                
                <div className="flex flex-col justify-center p-6">
                    <h2 className="font-thin font-josefin text-2xl md:text-2xl lg:text-4xl mb-4">3D BLENDER CREATION</h2>
                    <p className="text-lg mb-6">
                        For a class assignment, I created a 3D house model in Blender, focusing on sustainable environmental design around the house while learning the software for the first time. You can read more about this project below.
                    </p>
                    <button
                        className="py-2 w-32 bg-[#331C20] text-[#EEDEE0] rounded"
                        onClick={() => window.open("/3DBlenderModel.pdf", "_blank")}
                    >
                        MORE
                    </button>
                </div>
            </div>            
    </div>

    );
}