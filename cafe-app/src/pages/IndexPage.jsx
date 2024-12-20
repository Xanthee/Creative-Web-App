import { Link } from "react-router-dom"
import Header from "../Header";
import React from 'react';
import coffeeMachineImg from '../assets/coffeeMachine.png';
import ReviewSlider from '../components/ReviewSlider.jsx';
import "../index.css";

export default function IndexPage() {
    return (

    <div className="flex flex-col w-auto h-auto p-3">
        <div className="flex justify-center mt-20">

            <div className="flex flex-row bg-green-900 items-center border rounded-lg">
                <img src={coffeeMachineImg} alt="Coffee Machine Image" height={400} width={400} className="border border-transparent p-3 rounded-lg"/>
                <div className="flex flex-col p-4">
                    <span className="text-white text-2xl pb-6">Sign up today and get a free drink on us!</span>
                    <Link to={'/register'} className="text-2xl font-bold text-center text-white underline">Register</Link>
                </div>
            </div>
        </div>

        <div className="flex justify-center mt-5 mb-20">
            <span className="text-2xl font-bold">Say hello to easy ordering, endless choice and - yes, free coffee.</span>
        </div>

        <div className="flex flex-row justify-evenly pb-20" >
                <div className="bg-green-900 border rounded-lg w-full m-2 w-2/6 h-96">
                    <img src={coffeeMachineImg} alt="Coffee Machine Image" height={200} width={200} className="border border-transparent rounded-full m-5"/>  
                    <h1 className="font-semibold text-2xl text-white text-center">Lorem ipsum</h1>
                    <p className="text-center text-white p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className="bg-green-900 border rounded-lg w-full m-2 w-2/6 h-96">
                    <img src={coffeeMachineImg} alt="Coffee Machine Image" height={200} width={200} className="border border-transparent rounded-full m-5"/>
                    <h1 className="font-semibold text-2xl text-white text-center">Lorem ipsum</h1>
                    <p className="text-center text-white p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className="bg-green-900 border rounded-lg w-full m-2 w-2/6 h-96">
                    <img src={coffeeMachineImg} alt="Coffee Machine Image" height={200} width={200} className="border border-transparent rounded-full m-5"/>  
                    <h1 className="font-semibold text-2xl text-white text-center">Lorem ipsum</h1>
                    <p className="text-center text-white p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
        </div>

        <div className="flex row bg-green-900 items-center border rounded-lg w-full mt-10">
            <div className="p-10">
                <h1 className="pb-8 text-white text-5xl">Lorem ipsum</h1>
                <p className="text-white textxl ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <img src={coffeeMachineImg} alt="Coffee Machine Image" height={550} width={550} className="border border-transparent p-3 rounded-lg"/>
        </div>
        
        <div className="flex justify-center mt-5">
            <span className="text-3xl font-bold">Discover what our customers love about us.</span>
        </div>

        <ReviewSlider />

    </div>

    );
}