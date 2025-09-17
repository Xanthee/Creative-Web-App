import { Link } from "react-router-dom";
import React from 'react';
import "../index.css";
import Blender from '../assets/3DBlenderModel.mp4';
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';
import LRWork from '../assets/LRAnimationsWork.png';

export default function CreativeWorkPage() {
    return (
        <div className="h-auto w-full md:w-[90%] mt-[10vh] mx-auto flex flex-col items-center justify-center space-y-12">
            <motion.h1
                className="font-thin font-josefin text-4xl md:text-6xl lg:text-7xl mb-6 mt-12"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                CREATIVE & VISUAL WORKS
            </motion.h1> 
            
            {/* First Grid: Video and Text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
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
                
                <div className="flex flex-col justify-center p-6">
                    <h2 className="font-thin font-josefin text-2xl md:text-2xl lg:text-4xl mb-4">3D BLENDER CREATION</h2>
                    <p className="text-lg mb-4 text-l md:text-l lg:text-l mb-12">
                        For a class assignment, I created a 3D house model in Blender, focusing on sustainable environmental design around the house while learning the software for the first time. You can read more about this project below.
                    </p>
                    <button
                        className=" py-2 w-32 bg-[#331C20] text-[#EEDEE0] rounded"
                        onClick={() => window.open("/3DBlenderModel.pdf", "_blank")}
                    >
                        MORE
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl h-auto w-full">
                <div className="w-full h-full aspect-video bg-[#331C20]/70 rounded-xl">
                    <Spline
                        scene="https://prod.spline.design/QoVOa4-ULSebN3cV/scene.splinecode"
                        className="w-full h-full rounded-lg"
                    />
                </div>
                
                <div className="flex flex-col justify-center p-6">
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
            <div className="w-auto flex flex-col grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col  justify-center items-center">
                    <div className="h-auto w-[90%]">
                        <h1 className="font-thin font-josefin text-2xl md:text-4xl lg:text-6xl mb-4">WHO AM I</h1>
                        <p className="text-l md:text-l lg:text-l mb-12">I’m a recent Bath Spa University grad passionate about creating user-friendly, visually stunning digital experiences. As a front-end developer, UX/UI designer, and graphic designer, I blend creativity and tech to build impactful websites, interfaces, and designs.</p>              
                    </div>
                </div>
                <div className="flex flex-row w-full max-w-full items-center justify-center mt-10">
                    <div className=" max-w-full">
                        <img 
                            src={LRWork} 
                            className="w-full h-auto object-contain" 
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}