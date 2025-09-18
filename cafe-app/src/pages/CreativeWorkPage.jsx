import { Link } from "react-router-dom";
import React from 'react';
import "../index.css";
import Blender from '../assets/3DBlenderModel.mp4';
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';
import Tesla from '../assets/Tesla.png';
import LRIcon1 from '../assets/LRIcon1.png';
import LRIcon2 from '../assets/LRIcon2.png';
import LRIcon3 from '../assets/LRIcon3.png';
import LRIcon4 from '../assets/LRIcon4.png';

export default function CreativeWorkPage() {
    return (
        <div className="h-auto w-full md:w-[90%] mt-[10vh] mx-auto flex flex-col items-center justify-center">
            <motion.h1
                className="font-thin font-josefin text-4xl md:text-6xl lg:text-7xl mb-12 mt-12"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                CREATIVE & VISUAL WORKS
            </motion.h1> 
            
            {/* First Grid: Video and Text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
                <div className="w-full aspect-video">
                    <video
                        className="w-full h-full object-cover rounded-lg"
                        src={Blender}
                        controls
                        autoPlay
                        loop
                        muted
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
                
                <div className="flex flex-col justify-center p-6 h-auto bg-white rounded-lg shadow-md">
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

            {/* Second Grid: Spline Models */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto w-full mb-12">
                <div className="w-full h-full aspect-video bg-[#331C20]/70 rounded-xl">
                    <Spline
                        scene="https://prod.spline.design/QoVOa4-ULSebN3cV/scene.splinecode"
                        className="w-full h-full rounded-lg"
                    />
                </div>
                
                <div className="flex flex-col justify-center bg-white p-6 rounded-lg shadow-md">
                    <h2 className="font-thin font-josefin text-2xl md:text-2xl lg:text-4xl mb-4">3D SPLINE MODELS</h2>
                    <p className="text-lg mb-4">
                        I developed a 3D model of a planet using Spline, a web-based 3D design platform. The planet’s surface was textured with high-quality planet textures sourced online, creating a realistic and visually appealing appearance. In Spline, I crafted the planet’s spherical geometry and applied these textures to enhance its aesthetic. 
                    </p>
                </div>

                <div className="w-full h-full aspect-video bg-[#331C20]/70 rounded-xl">
                    <Spline
                        scene="https://prod.spline.design/LzhVNa1synAwhP-C/scene.splinecode"
                        className="w-full h-full rounded-lg"
                    />
                </div>
            </div>

            {/* Third Grid: Tesla Illustration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mb-12">
                <div className="flex flex-col justify-center items-center">
                    <div className="h-full bg-white p-6 rounded-lg shadow-md">
                        <h2 className="font-thin font-josefin text-2xl md:text-2xl lg:text-4xl mb-4">WORK ILLUSTRATIONS</h2>
                        <p className="text-lg">
                           During my placement at LR Animations, I collaborated with the studio’s manager to design animation and graphic assets. My main contributions included creating a Tesla police car concept and a set of custom social media icons to enhance the studio’s brand presence.                           
                        </p>
                         <p className="text-lg">
                           I researched design inspirations, developed initial sketches, and refined them through feedback. I explored how futuristic aesthetics (Tesla design cues) could merge with functional details (police car styling), while ensuring the icons were visually consistent across platforms.                          
                        </p>
                    </div>
                </div>
                <div className="flex flex-row w-full max-w-full items-center justify-end">
                    <img 
                        src={Tesla} 
                        alt="Tesla" 
                        className=" object-contain rounded-xl"
                    />
                </div>
            </div>

            {/* Fourth Grid: Icons */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <img src={LRIcon1} className="block object-contain rounded-xl" />
                <img src={LRIcon2} className="block object-contain rounded-xl" />
                <img src={LRIcon3} className="block object-contain rounded-xl" />
                <img src={LRIcon4} className="block object-contain rounded-xl" />
            </div>
        </div>
    );
}
