import React from "react";
import ProjectSlider from "./ProjectSlider";
import ProjectTag from "./ProjectTags/ProjectTag";

const ProjectItem = ({ project }) => {
  return (
    <>
      <article className="flex flex-col mb-10">
        <h3 className="text-2xl font-semibold text-blue-400/90 mb-3">
          {project.title}
        </h3>
        <div className="flex flex-col-reverse lg:flex-row gap-5 ">
          <section className="w-full lg:w-1/2">
            <section className="flex gap-2 flex-wrap mb-4">
              {project.tags.map((tag, id) => (
                <ProjectTag key={id} tag={tag} />
              ))}
            </section>
            <p className="text-base font-normal text-gray-400 dark:text-gray-100 text-pretty mb-5">
              {project.description}
            </p>
          </section>
          <ProjectSlider images={project.images} />
        </div>
      </article>
    </>
  );
};

export default ProjectItem;
