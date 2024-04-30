import React, { useContext, useRef } from "react";
import ProjectItem from "./ProjectItem";
import { LanguageContext } from "../../../context/languageContext";
import { projectListES, projectListEN } from "../../../data/projects";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const projectList = language === "es" ? projectListES : projectListEN;

  const scrollRef = useRef();

  useGSAP(() => {
    const projectsToAnimate = gsap.utils.toArray(scrollRef.current.children);

    projectsToAnimate.forEach((projectToAnimate, index) => {
      gsap.from(projectToAnimate, {
        opacity: 1,
        scale: 1,
        y: 0,
        x: index % 2 === 0 ? -50 : 50,
        zIndex: index % 2 === 0 ? 1 : 0,
        scrollTrigger: {
          trigger: projectToAnimate,
        },
        delay: 0,
      });
    });
  }, []);

  return (
    <div
      className="project-list grid grid-cols-1 md:grid-cols-2 gap-5"
      ref={scrollRef}
    >
      {projectList.map((project, index) => {
        // Apply different styling for the first project item
        const itemStyle =
          index === 0
            ? "md:col-span-1 transform transition duration-500"
            : "col-span-1 transform transition duration-500";

        // Render the ProjectItem with conditional styling
        return (
          <ProjectItem
            key={project.title}
            project={project}
            // additionalClasses={itemStyle}
          />
        );
      })}
    </div>
  );
};

export default Projects;
