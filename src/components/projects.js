import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import Projects_data from "@/data";
import Image from "next/image";

function Projects() {
  return (
    <div className="bg-gray-900  flex flex-col justify-center items-center gap-6 pb-4" id="projects">
      <BsCodeSlash className="text-gray-400 text-5xl" />
      <div className="text-center max-w-2xl flex flex-col gap-6">
        <h2 className="text-white text-5xl">Projects I have built</h2>
        <p className="text-gray-400">
        Here are a few examples of my work:
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 ">
        {Projects_data.map((project, index) => (
          <div key={index}>
            <a
              href={project.link}
              target="_blank"
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <Image
                src={project.src}
                width="300"
                height="300"
                alt="project image"
                className="absolute inset-0 w-full h-full object-none object-center object-fit-none object-position-center"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 duration-500 ease-in-out hover:opacity-100 text-center">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-gray-300">{project.description}</p>
                </div>
              </div>
            </a>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
