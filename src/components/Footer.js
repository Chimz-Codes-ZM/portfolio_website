import React from 'react'
import {AiFillGithub} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillTwitterCircle} from "react-icons/ai";
import {SiHashnode} from "react-icons/si";

function Footer() {
  return (
    <div className='bg-gray-900 pb-2'><div className="flex text-2xl gap-4 text-white justify-center">
    <a href="https://github.com/Chimz-Codes-ZM" target="_blank">
      <AiFillGithub />
    </a>
    <a href="https://www.linkedin.com/in/chimwemwe-masona/" target="_blank">
      <AiFillLinkedin />
    </a>
    <a href="https://chimwemwe.hashnode.dev/" target="_blank">
      <SiHashnode />
    </a>
    <a href="https://twitter.com/ChimzCodes" target="_blank">
      <AiFillTwitterCircle />
    </a>
  </div></div>
  )
}

export default Footer