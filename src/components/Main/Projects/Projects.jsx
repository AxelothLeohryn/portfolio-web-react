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
        opacity: 0,
        scale: 1,
        // y: window.innerWidth > 900 ? 0 : 100,
        // y: 50,
        x: index !== 0 && index !== 3 ? index % 2 === 0 && window.innerWidth > 900 ? -100 : window.innerWidth > 900 ? 100 : 0 : 0,
        zIndex: index % 2 === 0 ? 1 : 0,
        scrollTrigger: {
          trigger: projectToAnimate,
          toggleActions: "play none none reverse",
        },
        delay: 0,
        ease: "power1",
      });
    });
  }, []);

  return (
    <div
      className="project-list grid grid-cols-1 md:grid-cols-4 gap-5"
      ref={scrollRef}
    >
      {projectList.map((project, index) => {
        // Apply different styling for the first project item
        const itemStyle =
          index === 0 || index === 3
            ? "md:col-span-4 transform transition duration-500"
            : "md:col-span-2 transform transition duration-500";

        // Render the ProjectItem with conditional styling
        return (
          <ProjectItem
            key={project.title}
            project={project}
            additionalClasses={itemStyle}
          />
        );
      })}
    </div>
  );
};

export default Projects;
