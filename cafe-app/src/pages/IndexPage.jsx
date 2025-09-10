import { Link } from "react-router-dom"
import React from 'react';
import "../index.css";

export default function IndexPage() {
    return (

    <div className="flex flex-col w-auto h-[100vh] items-center bg-[#FF6B6B] mt-[10vh] p-3 m-3">
        <div className="flex flex-col m-10 justify-center h-[20vh] w-[90vw]">
            <h1 className="font-light font-josefin text-xl md:text-2xl lg:text-4xl">HI, IM XANTHE</h1>
            <h1 className="font-thin font-josefin text-4xl md:text-6xl lg:text-7xl mb-6">A WEB DEVELOPER AND UX DESIGNER.</h1>
            <hr className="border border-gray-600 my-2"/>
        </div>
           </div>

    );
}