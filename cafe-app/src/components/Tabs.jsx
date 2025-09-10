import React, { useState } from 'react';
import StellarSphere from '../assets/StellarSphere.jpeg';
import UseByWebsite from '../assets/UseByWebsite.jpeg';
import LunaCafeWebsite from '../assets/LunaCafeWebsite.jpeg';
import PortfolioWebsite from '../assets/PortfolioWebsite.jpeg';
import BRLSI from '../assets/BRLSI.jpeg';
import SugarWebsite from '../assets/SugarWebsite.jpeg';
import PortfolioDesign from '../assets/PortfolioDesign.jpeg';
import HouseModel from '../assets/3DModel.jpeg';
import Bitsy from '../assets/Bitsy.jpeg';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const tabContent = [
    {
      id: 0,
      title: "REACT",
      projects: [
        {
          title: "Stellar Sphere ",
          image: StellarSphere,
          description: "Creative React website where each click takes you deeper into our solar system."
        },
        {
          title: "Luna Cafe",
          image: LunaCafeWebsite,
          description: "Simple cafe application for booking a table and demonstrating UX designs"
        },
        {
          title: "UseBy",
          image: UseByWebsite,
          description: "A landing page for a mobile app created."
        }
      ]
    },
    {
      id: 1,
      title: "HTML / CSS",
      projects: [
        {
          title: "Portfolio Website",
          image: PortfolioWebsite,
          description: "A responsive portfolio built with HTML and CSS only."
        },
        {
          title: "Bath Royal Literacy and Scientific Institution",
          image: BRLSI,
          description: "A website application used to inform users of different artefacts based in the museum."
        },
        {
          title: "Sugar",
          image: SugarWebsite,
          description: "A fun personal project experimenting the creative side of making a website for a sweet shop."
        }
      ]
    },
    {
      id: 2,
      title: "REACT NATIVE",
      projects: [
        {
          title: "UseBy",
          image: "/images/native1.png",
          description: "A mobile app that stores food products expiry dates and tracks them for you."
        },
        {
          title: "Athena",
          image: "/images/react3.png",
          description: "Mobile application to resell and advertise computing peripherals."
        }
      ]
    },
    {
      id: 3,
      title: "WORDPRESS",
      projects: [
        {
          title: "Accessible Wells",
          image: "/images/wp1.png",
          description: "A website made for a charity."
        }
      ]
    },
    {
      id: 4,
      title: "EXPERIMENTS",
      projects: [
        {
          title: "Portfolio Designs",
          image: PortfolioDesign,
          description: "Testing an idea I had for my HTML portfolio, with interactive scrolling."
        },
        {
          title: "Mouse movement in React",
          image: "/images/wp1.png",
          description: "I drew different layers that moved based on mouse movement"
        },
        {
          title: "Bitsy Game",
          image: Bitsy,
          description: "A small project in Bitsy about doing quests for ghosts."
        },
        {
          title: "3D Modelling environments",
          image: HouseModel,
          description: "Trying Blender and creating an environment from my own skills."
        }
      ]
    }
  ];

  const handleTabClick = (index) => {
    if (index !== activeTab) {
      setTransitioning(true);
      setTimeout(() => {
        setActiveTab(index);
        setTransitioning(false);
      }, 300);
    }
  };

  return (
    <div className="w-full mt-28">
      <div className="flex justify-center mb-6">
        <span className="left-nav-link text-3xl font-bold">PROJECTS</span>
      </div>
      <div className="flex justify-center mb-4">
        {tabContent.map((tab, index) => (
          <button
            key={tab.id}
            className={`px-4 py-2 mx-1 uppercase font-thin text-xl mr-4 transition-colors duration-300 ${
              activeTab === index ? 'bg-[#1b2422] text-[#c1dbce]' : 'text-[#1b2422]'
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-8 text-[#c1dbce] font-josefin font-light rounded-xl">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-300 ${
            transitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {tabContent[activeTab].projects.map((project, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden shadow-md group">
            <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                <h2 className="text-2xl uppercase font-thin text-[#c1dbce]">{project.title}</h2>
                <p className="text-lg text-[#c1dbce]">{project.description}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
