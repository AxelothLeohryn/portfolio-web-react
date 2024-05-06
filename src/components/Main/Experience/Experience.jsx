import React, { useContext, useEffect, useRef } from "react";
import { LanguageContext } from "../../../context/languageContext";
import { experienceListES, experienceListEN } from "../../../data/experience";
import ExperienceItem from "./ExperienceItem";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const { language } = useContext(LanguageContext);
  const ref = useRef(null);

  useGSAP(() => {

    const elements = ref.current.getElementsByClassName("experience-item");
    gsap.from(elements, {
      opacity: 0,
      x: 300,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ref.current,
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <>
      <ol ref={ref} className="relative border-s border-gray-500 ml-3">
        {language === "es" &&
          experienceListES.map((experience) => (
            <li className="experience-item mb-10 ms-4" key={experience.title}>
              <ExperienceItem {...experience} />
            </li>
          ))}
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
