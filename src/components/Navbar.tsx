import { useState, useEffect } from 'react';
import { MdMusicNote, MdClose } from 'react-icons/md';

const Navbar = () => {
  const [nav, setNav] = useState(false);  // Setting up a state variable for the navigation menu

  const handleNav = () => {
    setNav(!nav);  // Toggling the value of the navigation menu state variable
  };

  useEffect(() => {
    const handleLinkClick = (event) => {  // Defining a function to handle click events on the navigation menu links
      event.preventDefault();
      const target = event.target.hash;
      const element = document.querySelector(target);
      if (element) {
        const topOffset = element.offsetTop;
        window.scrollTo({  // Scrolling the window to the target element
          top: topOffset,
          behavior: 'smooth',
        });
      }
    };
    const links = document.querySelectorAll('a[href^="#"]');  // Selecting all the navigation menu links with the href attribute starting with "#"
    links.forEach((link) => {
      link.addEventListener('click', handleLinkClick);  // Adding the event listener to each link
    });
    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleLinkClick);  // Removing the event listener from each link on component unmount
      });
    };
  }, []);
  
  return (
    <div className=" bg-gray-50 fixed top-0 w-full z-50 shadow-lg">
      <div className="flex justify-between items-center h-20 max-w-[1200px] mx-auto px-6">
        <h1 className="w-full text-4xl font-bold  text-ongray title-font">
          <a href="#home">Openotes</a>
        </h1>
        <ul className=" text-onorange md:flex hidden justify-center">
          <li className="group px-4 mt-1 text-2xl font-bold transition duration-300">
            <a href="#home">Home</a>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-onorange"></span>
          </li>
          <li className=" px-4 mt-1 text-2xl font-bold transition duration-300">
            <a href="#home">Home</a>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-onorange"></span>
          </li>
          <li className="group px-4 mt-1 text-2xl font-bold transition duration-300">
            <a href="#home">Home</a>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-onorange"></span>
          </li>
          <li className="group px-4 mt-1 text-2xl font-bold transition duration-300">
            <a href="#home">Home</a>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-onorange"></span>
          </li>
        </ul>
        <div className="text-onorange block md:hidden" onClick={handleNav}>
          {!nav ? <MdMusicNote size={30} /> : <MdClose size={36} />}
        </div>
        <div className=" z-50">
          <div
            className={
              !nav
                ? 'ease-in-out duration-100 fixed left-[-100%]'
                : 'fixed left-0 top-0 w-[60%] h-full border-r border-r-ongray bg-gray-50 ease-in-out duration-500'
            }
          >
            <h1 className="w-full text-4xl font-bold text-ongray m-5 title-font">
              Openotes
            </h1>
            <ul className="text-onorange font-bold">
              <li className="p-4 text-2xl border-b border-gray-100">
                <a href="#home">Home</a>
              </li>
              <li className="p-4 text-2xl border-b border-gray-100">
                <a href="#menu">Menu</a>
              </li>
              <li className="p-4 text-2xl border-b border-gray-100">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar