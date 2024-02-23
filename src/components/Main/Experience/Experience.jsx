import React from "react";
import { experienceList } from "../../../data/experience";

import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  return (
    <>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-3">
        {experienceList.map((experience) => (
          <li className="mb-10 ms-4" key={experience.title}>
            <ExperienceItem {...experience} />
          </li>
        ))}
      </ol>
    </>
  );
};

export default Experience;
