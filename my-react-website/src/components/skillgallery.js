import React, { useState } from "react";
import { ArrowSmallLeftIcon, ArrowSmallRightIcon } from "@heroicons/react/24/solid";

const techskillsData = [
  {
    title: "Databases",
    subtitle: "SQL, MongoDB, AWS DynamoDB",
    description: "I have become proficient recently with SQL databases along with NoSQL databases such as MongoDB and AWS DynamoDB. I have used these databases in several projects and have become very comfortable with them.",
  },
  {
    title: "Deep Learning Frameworks",
    subtitle: "PyTorch",
    description: "With the new hype surrounding Chat-GPT and other Deep Learning Frameworks I decided to take courses in focused on these techniques. I am currently working with a friend on solving the game snake using a Reinforcement Learning model.",
  },
  {
    title: "Machine Translation",
    subtitle: "Low-resource Machine Translation, Multilingual Machine Translation",
    description: "My newest interest is with the idea of Machine Translation. This semester I have the opportunity to work as a Research Assistant with a professor who has spent his life in this field. I am currently working on a project to improve the quality of low-resource machine translation.",
  },
  // Add more tech skills here
];

const skillsData = [
  {
    title: "Gymnastics",
    subtitle: "Artistic",
    description: "I grew up doing gymnastics. I have always loved it and is one of my favorite forms of excersize. I love going to the gym and doing any routines that I remember from my childhood. I also love watching gymnastics in the Olympics.",
  },
  {
    title: "Dancing",
    subtitle: "Cha Cha, Waltz, Foxtrot, Quickstep",
    description: "I've taken several dancing classes at BYU and have explored many different styles of dance. I was fortunate enough to take a folk dance class during which I learned about cultures from around the world. I also took a ballroom dance class and learned the basics of Cha Cha, Waltz, Foxtrot, and Quickstep.",
  },
  {
    title: "Portuguese",
    subtitle: "Native Fluency",
    description: "I lived in Brazil for 2 years learning the language and culture. I volunteered to help those with addictions and to teach English. I served as a leader for 1 year and helped train new volunteers. I also organized the visas of all foreign volunteers, working closely with the Brazilian Government.",
  },
  // Add more general skills here
];

export default function SkillGallery({ techornot }) {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  let skillsToUse;
  let title;

  if (techornot === 0) {
    title = "Technologies";
    skillsToUse = techskillsData; // Use general skills data
  } else {
    title = "Hobbies";
    skillsToUse = skillsData; // Use tech skills data
  }

  const nextSkill = () => {
    setCurrentSkillIndex((prevIndex) =>
      prevIndex === skillsToUse.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSkill = () => {
    setCurrentSkillIndex((prevIndex) =>
      prevIndex === 0 ? skillsToUse.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-gray-900 text-white flex flex-col justify-center items-center">
      <div className="container py-10 mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-medium text-blue-500">{title}</h2>
        </div>
        <div className="p-4 mx-auto max-w-xl">
          <div className="text-center">
            <h3 className="text-2xl font-semibold">
              {skillsToUse[currentSkillIndex].title}
            </h3>
            <p className="text-lg text-gray-400">
              {skillsToUse[currentSkillIndex].subtitle}
            </p>
          </div>
          <p className="mt-4">{skillsToUse[currentSkillIndex].description}</p>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={prevSkill}
            className="text-3xl text-gray-400 hover:text-gray-100 mr-4"
          >
            {"<-"}
          </button>
          <button
            onClick={nextSkill}
            className="text-3xl text-gray-400 hover:text-gray-100 ml-4"
          >
            {"->"}
          </button>
        </div>
      </div>
    </section>
  );
}