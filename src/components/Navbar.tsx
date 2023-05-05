import { useState, useEffect } from 'react';
import { MdMusicNote, MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false); // Setting up a state variable for the navigation menu
  const [mobileNav, setMobileNav] = useState(false); // Setting up a state variable for the mobile navigation menu
  const [scrollPos, setScrollPos] = useState(0);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav); // Toggling the value of the navigation menu state variable
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > scrollPos) {
        // Scrolling down, makes navbar smaller
        setNav(true);
      } else {
        // Scrolling up, makes navbar bigger
        setNav(false);
      }
      setScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPos]);

  useEffect(() => {
    let timeoutId: number;

    const handleScrollEnd = () => {
      timeoutId = setTimeout(() => {
        setNav(false);
      }, 400);
    };

    const handleScroll = () => {
      clearTimeout(timeoutId);
      handleScrollEnd();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='bg-onwhite'>
      <motion.div
        className={`bg-gray-50 fixed top-0 w-full z-50 shadow-lg ${
          nav ? 'h-16' : 'h-20' 
        } transition-all duration-500 ease-in-out`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <div className="flex justify-between items-center h-full max-w-[1200px] mx-auto px-6">
          <h1 className="w-full text-4xl font-bold mb-1 text-ongray title-font">
            <a href="#home">Openotes</a>
          </h1>
          <ul className=" text-onorange md:flex hidden justify-center">
            <li className="group px-4 text-2xl font-bold transition duration-300">
              <a href="#home">Home</a>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-onorange"></span>
            </li>
            <li className="group px-4 text-2xl font-bold transition duration-300">
              <a href="#home">About</a>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-onorange"></span>
            </li>
            <li className="group px-4 text-2xl font-bold transition duration-300">
              <a href="#home">Contact</a>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-onorange"></span>
            </li>
            <li className="group px-4 text-2xl font-bold transition duration-300">
              <a href="#home">Support</a>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-onorange"></span>
            </li>
          </ul>
          <div className="text-onwhite bg-onorange p-1 rounded-full block md:hidden cursor-pointer" onClick={handleMobileNav}>
            {!mobileNav ? <MdMusicNote size={30} /> : <MdClose size={30} />}
          </div>
          <div className=" z-50 block md:hidden">
            <div
              className={
                !mobileNav
                  ? 'ease-in-out duration-100 fixed left-[-100%] '
                  : 'fixed left-0 top-0 w-[60%] h-full border-r border-r-ongray bg-gray-50 ease-in-out duration-500'
              }
            >
              <h1 className="w-full text-4xl font-bold text-ongray m-5 title-font">
                Openotes
              </h1>
              <ul className="text-onorange font-bold">
                <li className="p-4 text-2xl border-b border-gray-200">
                  <a href="#home">Home</a>
                </li>
                <li className="p-4 text-2xl border-b border-gray-200">
                  <a href="#home">About</a>
                </li>
                <li className="p-4 text-2xl border-b border-gray-200">
                  <a href="#home">Contact</a>
                </li>
                <li className="p-4 text-2xl border-b border-gray-200">
                  <a href="#home">Support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;