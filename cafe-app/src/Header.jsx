import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const delays = ['delay-450', 'delay-600', 'delay-750', 'delay-900', 'delay-1050'];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY <= 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = menuVisible ? 'hidden' : 'auto';
  }, [menuVisible]);

  const openMenu = () => {
    setMenuVisible(true);
    setTimeout(() => setMenuOpen(true), 10);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setTimeout(() => setMenuVisible(false), 700);
  };

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-transform duration-300
        ${isVisible ? 'translate-y-0' : '-translate-y-full'} 
        bg-[#ECC1C4] shadow-md px-8 py-5 flex justify-between items-center`}
      >
        {/* X logo slightly more right */}
        <h1 className="font-bold text-l md:text-2xl lg:text-3xl text-black pr-3">X</h1>

        {/* Menu button slightly more left */}
        {!menuVisible && (
          <button
            onClick={openMenu}
            className="text-l md:text-2xl lg:text-3xl text-black font-josefin font-light pl-3"
          >
            MENU
          </button>
        )}
      </header>

      {/* Fullscreen Menu */}
      {menuVisible && (
        <div
          className={`fixed inset-0 z-50 bg-[#ECC1C4] flex flex-col items-center justify-center
          transform transition-transform duration-700
          ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}
        >
          {/* Close button slightly more left */}
          <button
            onClick={closeMenu}
            className="absolute top-7 right-10 text-l md:text-2xl lg:text-3xl font-josefin font-light"
          >
            CLOSE
          </button>

          {/* Links */}
          <ul className="space-y-10 text-[50px] md:text-[55px] lg:text-[60px] font-light text-[#3C151C] text-right w-2/3 sm:w-1/2">
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
                    style={{
                      transitionDelay: menuOpen ? delays[i].replace('delay-', '') + 'ms' : '0ms',
                    }}
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
