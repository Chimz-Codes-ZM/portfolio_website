import React from "react";
import { HiChip } from "react-icons/hi";
import { BsFillPatchCheckFill } from "react-icons/bs";
import skills_data from "@/data/skills";

function Skills() {
  return (
    <div className="bg-gray-900 " id="skills">
      <div className="text-gray-300 gap-6  flex flex-col justify-center items-center p-10 text-center">
        <HiChip className="text-5xl" />
        <div className="flex flex-col gap-6 max-w-2xl">
          <h1 className="text-5xl">Skills & Technologies</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills_data.map((skill, index) => (
            <div key={index} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BsFillPatchCheckFill className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/>
                <h1>{skill}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
