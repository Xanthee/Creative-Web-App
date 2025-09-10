import { Link } from "react-router-dom"
import { FaLinkedin , FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
    return(
        <footer className="vw-full flex flex-col m-3 p-5 border rounded-lg bg-[#2e2d2b] h-[22vh] text-white">
            <hr className="border-t border-gray-600 my-2" />
            <div className="flex flex-row h-full w-full pl-2 pr-2">
                <span className="text-left font-light text-2xl w-1/4 h-full mr-4 text-base hover:text-3xl hover:tracking-wide font-tech transition-all duration-300"> Designed with curiosity and a lot of coffee</span>
                <div className="flex flex-col h-full w-3/4 justify-between">
                    <div className="flex flex-row text-lg justify-between w-full pl-2 pr-2 mx-auto  ">
                        {/* Left links */}
                        <div className="flex flex-row space-x-6 ">
                            <Link to="/location" className="text-white font-josefin font-light opacity-70 hover:opacity-100 transition-opacity duration-300">WORK</Link>
                            <Link to="/location" className="text-white opacity-70 hover:opacity-100 transition-opacity duration-300">ABOUT</Link>
                            <Link to="/location" className="text-white opacity-70 hover:opacity-100 transition-opacity duration-300">CONTACT</Link>
                        </div>

                        {/* Right links */}
                        <div className="flex flex-row space-x-6">
                            <Link to="/location" className="text-white opacity-70 hover:opacity-100 transition-opacity duration-300">TOOLS</Link>
                            <Link to="/location" className="text-white opacity-70 hover:opacity-100 transition-opacity duration-300">DRAWING</Link>
                        </div>
                    </div>

                    <div className="flex flex-row pl-2 justify-between">
                        <div className="space-x-3 flex flex-row items-end">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaGithub 
                                    className="text-3xl text-white transition-transform transition-colors duration-300 hover:text-gray-400 hover:rotate-[20deg] hover:scale-110" 
                                />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin 
                                    className="text-3xl text-white transition-transform transition-colors duration-300 hover:text-blue-400 hover:rotate-[20deg] hover:scale-110" 
                                />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram 
                                    className="text-3xl text-white transition-transform transition-colors duration-300 hover:text-pink-400 hover:rotate-[20deg] hover:scale-110" 
                                />
                            </a>
                        </div>
                        <div className="w-1/4 text-xs">
                            <span className="opacity-70">This website was designed and developed by me, using React frameworks. All work, unless credited, is my own.</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-t border-gray-600 my-2" />
        </footer>
    );
}