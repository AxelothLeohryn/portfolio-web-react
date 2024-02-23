import ProjectItem from "./ProjectItem";
import { LanguageContext } from "../../../context/languageContext";
import { projectListES, projectListEN } from "../../../data/projects";
import { useContext } from "react";

const Projects = () => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      {language === "es" &&
        projectListES.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      {language === "en" &&
        projectListEN.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
    </>
  );
};

export default Projects;
