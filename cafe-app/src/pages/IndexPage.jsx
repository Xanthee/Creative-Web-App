import { Link } from "react-router-dom"
import React from 'react';
import "../index.css";
import Images from '../components/Images.jsx';
import Xanthe from '../assets/Xanthe.png';
import ParallaxText from "../components/ParallaxText";
import { motion } from "framer-motion";
import { 
  SiFigma, 
  SiReact, 
  SiHtml5, 
  SiJavascript, 
  SiNextdotjs, 
  SiFramer 
} from "react-icons/si";

const icons = [
  { Comp: SiFigma, label: "Figma" },
  { Comp: SiReact, label: "React" },
  { Comp: SiHtml5, label: "HTML5" },
  { Comp: SiJavascript, label: "JavaScript" },
  { Comp: SiNextdotjs, label: "Next.js" },
  { Comp: SiFramer, label: "Framer Motion" },
];

export default function IndexPage() {
  return (
    <div className="flex flex-col w-full h-auto items-center mt-[10vh] px-3 my-10">
      <div className="flex flex-col justify-around h-[85vh] w-[90vw]">
        <div className="h-[20%]">
          <motion.h1
            className="font-thin font-josefin text-xl md:text-2xl lg:text-5xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            HI, I'M XANTHE
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
              onClick={() => window.open("/Xanthe-CV.pdf", "_blank")}
            >
              CV
            </button>
          </div>
        </div>

        <Images />
      </div>

      <div className="mt-12 mb-12 items-center h-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="font-thin font-josefin text-2xl md:text-3xl lg:text-5xl mb-4">ABOUT ME</h1>
            <span className="text-l md:text-xl lg:text-2xl">
              I’m a UI/UX designer and front-end developer who loves bringing ideas to life through clean,
              intuitive design. From wireframes to prototypes, I thrive on crafting experiences that feel
              effortless for users and valuable for businesses. My goal? To turn big challenges into simple,
              meaningful solutions that people actually enjoy using.
            </span>
          </div>

          <div>
            <h1 className="font-thin font-josefin text-2xl md:text-3xl lg:text-5xl mt-8 mb-4">
              TOOLS
            </h1>
            <div className="grid grid-cols-3 gap-6 place-items-start">
              {icons.map(({ Comp, label }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex flex-col group cursor-pointer"
                >
                  <Comp className="text-6xl group-hover:text-blue-500 transition-colors duration-300" />
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-xl font-medium text-gray-700"
                  >
                    {label}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-[60vh] flex items-center justify-center">
          <img 
            src={Xanthe} 
            alt="Xanthe" 
            className="h-full object-contain" 
          />
        </div>
      </div>

      <section className="w-full overflow-hidden my-10 flex flex-col items-center justify-center gap-4 h-auto min-h-[10vh] md:min-h-[15vh] lg:min-h-[20vh]">
        <ParallaxText baseVelocity={-1}>
          NEXTJS REACTJS HTML JAVASCRIPT GSAP CSS
        </ParallaxText>
        <ParallaxText baseVelocity={1}>
          REACT-NATIVE FIGMA NOTION FRAMER-MOTION
        </ParallaxText>
      </section>
    </div>
  );
}
