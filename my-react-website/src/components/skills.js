import { CheckBadgeIcon, WifiIcon } from "@heroicons/react/24/solid";
import React from "react";
import SkillGallery from "./skillgallery"; // Import the SkillGallery component

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-900">
      <div className="container px-5 py-4 mx-auto">
        <div className="text-center mb-8">
          <WifiIcon className="w-10 inline-block mb-2" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-2">
            Technologies &amp; Hobbies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400">
            I'm always learning new skills and technologies. Here are some of the ones I've learned recently.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-4 -mx-2">
          <div className="w-full sm:w-1/2 px-2 mb-4">
            <SkillGallery techornot={0} />
          </div>
          <div className="w-full sm:w-1/2 px-2 mb-4">
            <SkillGallery techornot={1} />
          </div>
        </div>
      </div>
    </section>
  );
}
