import React, {useState} from "react";
import { Link } from "react-scroll/modules";



function Navbar() {
const [active, setActive] = useState("");

const handleSetActive = (to) => {
  setActive(to)
}

  return (
    <header className="bg-gray-800 bg-opacity-70 backdrop-blur-lg md:sticky top-0 z-20">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0" href="#">
          <a href="#about" className="ml-3 text-xl">
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} onSetActive={handleSetActive}>
          Chimwemwe Masona
        </Link>
            
          </a>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 text-white hover:scale-105 duration-100 ease-in-out">
          <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500} onSetActive={handleSetActive}>
          Past Work
        </Link>
          </a>
          <a href="#skills" className="mr-5 text-white hover:scale-105 duration-100 ease-in-out">
          <Link activeClass="active" to="skills" spy={true} smooth={true} offset={0} duration={500} onSetActive={handleSetActive}>
          Skills
        </Link>
          </a>
          {/* <a
            href="#testimonials"
            className="mr-5 text-white hover:scale-105 duration-100 ease-in-out"
          >
            Testimonials
          </a> */}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center text-white bg-gray-800  border-0 py-1 px-3 focus:outline-none hover:scale-110 ease-in-out hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500} onSetActive={handleSetActive}>
          Hire me
        </Link>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
