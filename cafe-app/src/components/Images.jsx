import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import StellarSphere from '../assets/StellarSphere.jpeg';
import UseByWebsite from '../assets/UseByWebsite.jpeg';
import LunaCafeWebsite from '../assets/LunaCafeWebsite.jpeg';
import PortfolioWebsite from '../assets/PortfolioWebsite.jpeg';
import UseByDesign from '../assets/UseByDesign.jpeg';
import MouseExperiment from '../assets/MouseExperiment.jpeg';

const images = [
    StellarSphere,
    LunaCafeWebsite,
    UseByDesign,
    PortfolioWebsite,
    UseByWebsite,
    MouseExperiment,
];

export default function ContinuousCarousel() {
  const containerRef = useRef(null);
  const [totalWidth, setTotalWidth] = useState(0);

  // Duplicate images for seamless looping
  const loopedImages = [...images, ...images];

  // Calculate total pixel width of one set including gaps
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    let width = 0;
    const children = Array.from(container.children).slice(0, images.length);
    children.forEach((child) => {
      width += child.offsetWidth;
      const style = window.getComputedStyle(child);
      width += parseFloat(style.marginRight); // account for gap
    });
    setTotalWidth(width);
  }, []);

  return (
    <div className="overflow-hidden w-full h-80 rounded-xl">
      <motion.div
        ref={containerRef}
        className="flex gap-4"
        animate={{ x: [0, -totalWidth] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 40, // adjust speed
        }}
      >
        {loopedImages.map((src, i) => (
            <div key={i} className="flex-shrink-0 w-[49vw] h-80">
            <img
                src={src}
                alt=""
                className="w-full h-full object-cover rounded-xl"
            />
            </div>
        ))}
      </motion.div>
    </div>
  );
}
