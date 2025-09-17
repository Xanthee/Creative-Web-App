import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false); // for animation timing
  const delays = ['delay-450', 'delay-600', 'delay-750', 'delay-900', 'delay-1050'];
  
  // Scroll-hide header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY <= 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = menuVisible ? 'hidden' : 'auto';
  }, [menuVisible]);

  // Open menu
  const openMenu = () => {
    setMenuVisible(true);
    setTimeout(() => setMenuOpen(true), 10); // trigger animation
  };

  // Close menu
  const closeMenu = () => {
    setMenuOpen(false); // trigger slide-out
    setTimeout(() => setMenuVisible(false), 700); // match transition duration
  };

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-transform duration-300
        ${isVisible ? 'translate-y-0' : '-translate-y-full'} 
        bg-[#ECC1C4] shadow-md p-6 flex justify-between items-center`}
      >
        <h1 className="font-bold text-3xl text-black">X</h1>

        {!menuVisible && (
          <button
            onClick={openMenu}
            className="text-xl text-black font-josefin font-light"
          >
            MENU
          </button>
        )}
      </header>

      {/* Fullscreen Menu Overlay */}
      {menuVisible && (
        <div
          className={`fixed inset-0 z-50 bg-[#ECC1C4] flex flex-col items-center justify-center
          transform transition-transform duration-700
          ${menuOpen ? 'translate-y-0' : '-translate-y-full'}
        `}
        >
          {/* CLOSE button */}
          <button
            onClick={closeMenu}
            className="absolute top-7 right-7 text-xl font-josefin font-light"
            
          >
            CLOSE
          </button>

          {/* Links */}
          <ul className="space-y-10 text-[60px] md:text-[50px] lg:text-[60px] font-light text-[#3C151C] text-right w-1/2">
            {['HOME', 'ABOUT', 'EXPERIENCE', 'CONTACT'].map((text, i) => (
              <li
                key={text}
                className={`transform transition-all duration-1050 ease-out
                  ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} 
                  ${delays[i]}`}
              >
                <Link
                  to={text === 'HOME' ? '/' : `/${text.toLowerCase()}`}
                  onClick={closeMenu}
                  className="relative inline-block group hover:opacity-50 transition-opacity duration-300"
                >
                  {text}
                  <span
                    className={`absolute left-0 -bottom-2 h-[3px] bg-[#7c6a8a] transition-all duration-[1500ms]
                      ${menuOpen ? 'w-full' : 'w-0'}`}
                    style={{ transitionDelay: menuOpen ? delays[i].replace('delay-', '') + 'ms' : '0ms' }}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>

        </div>
      )}
    </>
  );
};

export default Header;
