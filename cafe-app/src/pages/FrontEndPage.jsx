import { Link } from "react-router-dom"
import React from 'react';
import "../index.css";
import Tabs from '../components/Tabs.jsx';

export default function FrontEndPage() {
    return (

    <div className="h-[100vh] w-[90%] mt-[10vh] m-10 flex justify-center">
        <Tabs />
    </div>

    );
}