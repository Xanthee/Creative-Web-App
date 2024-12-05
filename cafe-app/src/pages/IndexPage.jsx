import { Link } from "react-router-dom"
import Header from "../Header";
import React from 'react';
import coffeeMachineImg from '../assets/coffeeMachine.png';
import "../index.css";
export default function IndexPage() {
    return (

    <div className="flex flex-col w-auto h-auto p-3">
        <div className="flex justify-center mt-10">

            <div className="flex flex-row bg-green-900 items-center border rounded-lg">
                <img src={coffeeMachineImg} alt="Coffee Machine Image" height={400} width={400} className="border border-transparent p-3 rounded-lg"/>
                <div className="flex flex-col p-4">
                    <span className="text-white text-2xl pb-6">Sign up today and get a free drink on us!</span>
                    <Link to={'/register'} className="text-2xl font-bold text-center text-white underline">Register</Link>
                </div>
            </div>
        </div>

        <div className="flex justify-center m-5">
            <span className="text-2xl font-bold">Say hello to easy ordering, endless choice and - yes, free coffee.</span>
        </div>

        <div className="flex flex-row justify-evenly pt-10 pb-10" >
                <div className="m-2">
                    <img src={coffeeMachineImg} alt="Coffee Machine Image" height={120} width={120} className="border border-transparent rounded-full"/>  
                    <h1 className="flex items-center">A</h1>
                    <p>hello world</p>
                </div>
                <div className="m-2">
                    <img src={coffeeMachineImg} alt="Coffee Machine Image" height={120} width={120} className="border border-transparent rounded-full"/>
                    <h1>B</h1>
                    <p>hello world</p>
                </div>
                <div className="m-2">
                    <img src={coffeeMachineImg} alt="Coffee Machine Image" height={120} width={120} className="border border-transparent rounded-full"/>  
                    <h1>C</h1>
                    <p>hello world</p>
                </div>
        </div>



            <div className="flex row bg-green-900 items-center border rounded-lg w-full">
                <div className="p-10">
                    <h1 className="pb-8 text-white text-5xl">Lorem ipsum</h1>
                    <p className="text-white text-2xl ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <img src={coffeeMachineImg} alt="Coffee Machine Image" height={550} width={550} className="border border-transparent p-3 rounded-lg flex flex-row-reverse "/>
            </div>

        


    </div>

    );
}