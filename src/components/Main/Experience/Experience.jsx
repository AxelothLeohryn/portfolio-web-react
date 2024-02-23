import React, { useContext } from "react";
import { LanguageContext } from "../../../context/languageContext";
import { experienceListES, experienceListEN } from "../../../data/experience";

import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-3">
        {language === "es" &&
          experienceListES.map((experience) => (
            <li className="mb-10 ms-4" key={experience.title}>
              <ExperienceItem {...experience} />
            </li>
          ))}{" "}
        {language === "en" &&
          experienceListEN.map((experience) => (
            <li className="mb-10 ms-4" key={experience.title}>
              <ExperienceItem {...experience} />
            </li>
          ))}
      </ol>
    </>
  );
};

export default Experience;
