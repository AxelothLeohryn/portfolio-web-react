import React, { useContext } from 'react';
import ProjectItem from "./ProjectItem";
import { LanguageContext } from "../../../context/languageContext";
import { projectListES, projectListEN } from "../../../data/projects";

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const projectList = language === "es" ? projectListES : projectListEN;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projectList.map((project, index) => {
        // Apply different styling for the first project item
        const itemStyle = index === 0 || index === 3
          ? "md:col-span-2 shadow-lg transform transition duration-500"
          : "col-span-1 shadow-md transform transition duration-500";

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

