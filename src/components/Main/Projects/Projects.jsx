import ProjectItem from "./ProjectItem";
import { projectList } from "../../../data/projects";

const Projects = () => {

  return (
    <>
      {projectList.map((project) => (
        <ProjectItem key={project.title} project={project} />
      ))}
    </>
  );
};

export default Projects;
