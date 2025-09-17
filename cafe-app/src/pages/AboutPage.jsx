import { Link } from "react-router-dom"
import React from 'react';
import AboutMeCollage from '../assets/AboutMeCollage.png';
import "../index.css";

export default function AboutPage() {
    return (

    <div className="h-[120vh] w-[90%] mt-[10vh] m-10 flex items-center justify-center">
        <div className="w-[90vw] flex flex-col grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col  justify-center items-center">
                <div className="h-auto w-[90%]">
                    <h1 className="font-thin font-josefin text-2xl md:text-4xl lg:text-6xl mb-4">WHO AM I</h1>
                    <p className="text-l md:text-l lg:text-l mb-12">I’m a recent Bath Spa University grad passionate about creating user-friendly, visually stunning digital experiences. As a front-end developer, UX/UI designer, and graphic designer, I blend creativity and tech to build impactful websites, interfaces, and designs.</p>
                    <h1 className="font-light font-josefin text-xl md:text-2xl lg:text-4xl mb-4">MY SKILLS</h1>   
                    <p className="text-l md:text-l lg:text-l mb-12">I code responsive websites (HTML, CSS, JavaScript), design intuitive interfaces (Figma, Adobe Creative Suite), and build custom WordPress sites. I’ve also worked on UX research, branding, and marketing projects, balancing aesthetics with functionality. I’m always learning new tools and techniques!</p>                
                    <h1 className="font-light font-josefin text-xl md:text-2xl lg:text-4xl mb-4">MY APPROACH</h1>
                    <p className="text-l md:text-l lg:text-l mb-12">I focus on understanding users to create clean, accessible, and engaging solutions, whether I’m coding a site, designing a logo, or testing user flows.</p>
                    <h1 className="font-light font-josefin text-xl md:text-2xl lg:text-4xl mb-4">BEYOND WORK</h1>
                    <p className="text-l md:text-l lg:text-l mb-12">When I’m not working, you’ll find me illustrating, diving into horror movies, or battling it out in competitive games (maybe a bit too much!). Offline, I enjoy being with friends, playing backgammon, hitting the ski slopes, and prioritizing self-care. My creative and curious nature fuels my work, and I’m excited to collaborate on projects that blend design, tech, and user focus.</p>
                </div>
            </div>
            <div className="flex flex-row w-[100%] justify-around">
                <div className="h-auto">
                    <img 
                        src={AboutMeCollage} 
                        alt="Xanthe" 
                        className="h-full object-contain" 
                    />
                </div>
            </div>
        </div>
    </div>

    );
}