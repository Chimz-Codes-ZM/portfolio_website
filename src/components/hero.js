import React, {useState} from "react";
import Image from "next/image";
import coding from "../public/coding.svg";
import { Link } from "react-scroll/modules";


function Hero() {
const [active, setActive] = useState("")

const handleSetActive = (to) => {
  setActive(to)
}

  return (
    <div
      className="flex flex-col items-center md:flex-row bg-gray-900 "
      id="about"
    >
      <div className="px-10 py-16 md:py-32 flex flex-col gap-8">
        <div className="text-center md:text-start">
          <h2 className="text-5xl text-white">Hi, I am Chimwemwe.</h2>
          <h2 className="text-5xl text-white">I love to build amazing apps and experiences</h2>
        </div>

      
        <div className="flex gap-6 justify-center md:justify-start">
          <a
            href="#contact"
            className="p-2 px-4 text-white text-lg rounded bg-green-600 hover:bg-green-700"
          >
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500} onSetActive={handleSetActive}>
          Work with me
        </Link>
          </a>
          <a
            href="#projects"
            className="p-2 px-4 text-gray-400 text-lg rounded bg-gray-600 hover:bg-gray-500 hover:text-white"
          >
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500} onSetActive={handleSetActive}>
          See my past work
        </Link>
          </a>
        </div>
      </div>
      <div className="pt-20 pr-10 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image src={coding} alt="Picture of a coder" />
      </div>
    </div>
  );
}

export default Hero;
