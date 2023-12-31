import { CodeBracketIcon } from "@heroicons/react/24/solid";
import React from "react";
import { projects } from "./data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            A curated list of some of my favorite projects I've worked on.<br />Hover for more project info.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 brightness-90">
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={project.image}
              className="w-full sm:w-1/2 lg:w-1/3 p-4 relative"
            >
              <div className="h-full flex flex-col relative overflow-hidden group">
                <img
                  alt="gallery"
                  className="flex-shrink-0 w-full object-cover object-center transition-transform transform group-hover:scale-105"
                  src={project.image}
                />
                <div className="flex-grow px-8 py-10 absolute inset-0 w-full h-full border-4 border-gray-800 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
