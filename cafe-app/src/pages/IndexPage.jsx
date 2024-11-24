import { Link } from "react-router-dom"
import Header from "../Header";
import React from 'react';
import coffeeMachineImg from '../assets/coffeeMachine.png';

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


            <div className="flex justify-center">
                <div className="flex flex-row m-6">
                    <div className="m-2">
                        <img src={coffeeMachineImg} alt="Coffee Machine Image" height={120} width={120} className="border border-transparent rounded-full"/>  
                        <h1>A</h1>
                        <p>hello world</p>
                    </div>
                    <div className="m-2">
                        <img src={coffeeMachineImg} alt="Coffee Machine Image" height={120} width={120} className="border border-transparent rounded-full"/>
                        <h1>B</h1>
                        <p>hello world</p>
                    </div>
                    <div className="m-2">
                        <img src={coffeeMachineImg} alt="Coffee Machine Image" height={120} width={120} className="border border-transparent rounded-full"/>  
                        <div className="">
                            <h1>C</h1>
                            <p>hello world</p>
                        </div>
                    </div>
                </div>
            </div>

    </div>

    );
}