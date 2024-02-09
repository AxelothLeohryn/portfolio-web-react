import ProjectSlider from "./ProjectSlider";
import ProjectTag from "./ProjectTags/ProjectTag";
import ProjectLinks from "./ProjectLinks";

const ProjectItem = ({ project }) => {
  return (
    <>
      <article className="flex flex-col mb-10 bg-black/10 rounded hover:bg-black/50  transition shadow-lg backdrop-filter backdrop-blur-3xl p-4 ">
        <h3 className="text-2xl font-semibold text-slate-300 mb-4">
          {project.title}
        </h3>
        <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-5 ">
          <section className="w-full lg:w-1/2">
            <section className="flex gap-2 flex-wrap mb-4 ">
              {project.tags.map((tag, id) => (
                <ProjectTag key={id} tag={tag} />
              ))}
            </section>
            <p className="text-base font-normal text-gray-400 text-pretty mb-5">
              {project.description}
            </p>
            {project.extraDescription && (
              <p className="text-base font-normal text-gray-400 text-pretty mb-5">
                {project.extraDescription}
              </p>
            )}
            {project.accessData && (
              <span className="text-base font-normal text-gray-500 text-pretty mb-5">
                <p>
                  <strong>Usuario:</strong> {project.accessData.user}
                </p>
                <p>
                  <strong>Contraseña:</strong> {project.accessData.password}
                </p>
              </span>
            )}
            <ProjectLinks link={project.link} github={project.github} />
          </section>
          <div className="max-w-96 lg:w-1/2 h-56 shadow-lg hover:drop-shadow-glow rounded-lg transition">
            <ProjectSlider images={project.images} />
          </div>
        </div>
      </article>
    </>
  );
};

export default ProjectItem;
