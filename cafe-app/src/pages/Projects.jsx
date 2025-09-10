import { Link } from "react-router-dom"
import React from 'react';
import "../index.css";
import Tabs from '../components/Tabs.jsx';

export default function Projects() {
    return (

    <div className="flex flex-col w-auto h-[140vh] items-center mt-[10vh] p-6 m-3">
        <Tabs />
    </div>

    );
}