import { Link } from "react-router-dom"
import Header from "../Header";
import React from 'react';
import coffeeMachineImg from '../assets/coffeeMachine.png';

export default function IndexPage() {
    return (
    <div className="flex place-content-center w-[70rem] h-[22rem] mt-10">
        <div className="flex flex-row bg-green-900 w-4/5 items-center border rounded-lg">
            <img src={coffeeMachineImg} alt="Coffee Machine Image" height={400} width={400} className="ml-5 border border-transparent rounded-lg"/>


            index page here
        </div>
    </div>
    );
}