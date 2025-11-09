import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#331C20] text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        {/* top row */}
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          <div className="w-full sm:w-1/3">
            <span className="block font-light text-sm sm:text-base">
              Designed with curiosity and a lot of coffee
            </span>
          </div>

          <div className="w-full sm:w-2/3 flex flex-col">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">
              {/* Left links */}
              <div className="flex flex-row flex-wrap gap-4">
                <Link to="/experience" className="text-white font-josefin font-light opacity-70 hover:opacity-100 transition-opacity duration-300">EXPERIENCE</Link>
                <Link to="/about" className="text-white opacity-70 hover:opacity-100 transition-opacity duration-300">ABOUT</Link>
                <Link to="/contact" className="text-white opacity-70 hover:opacity-100 transition-opacity duration-300">CONTACT</Link>
              </div>

              {/* Right links */}
              <div className="flex flex-row flex-wrap gap-4">
                <Link to="/frontend" className="text-white opacity-70 hover:opacity-100 transition-opacity duration-300">FRONT-END</Link>
                <Link to="/uxdesign" className="text-white opacity-70 hover:opacity-100 transition-opacity duration-300">UX DESIGN</Link>
              </div>
            </div>

            <div className="mt-4 flex flex-row justify-between items-center">
              <div className="flex items-center gap-3">
                <a href="https://github.com/Xanthee" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-2xl sm:text-3xl text-white transition-transform transition-colors duration-300 hover:text-gray-400 hover:rotate-[20deg] hover:scale-110" />
                </a>
                <a href="https://www.linkedin.com/in/xanthe-parsons-7b5080223/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-2xl sm:text-3xl text-white transition-transform transition-colors duration-300 hover:text-blue-400 hover:rotate-[20deg] hover:scale-110" />
                </a>
              </div>

              <div className="hidden sm:block w-1/3 text-xs text-right">
                <span className="opacity-70">This website was designed and developed by me, using React frameworks. All work, unless credited, is my own.</span>
              </div>
            </div>

            {/* small-screen footer note */}
            <div className="block sm:hidden mt-3 text-xs">
              <span className="opacity-70">This website was designed and developed by me, using React frameworks. All work, unless credited, is my own.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
