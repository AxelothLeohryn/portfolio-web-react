import ProjectSlider from "./ProjectSlider";
import ProjectTag from "./ProjectTags/ProjectTag";
import ProjectLinks from "./ProjectLinks";
import { useContext } from "react";
import { LanguageContext } from "../../../../context/languageContext";

const ProjectItem = ({ project, additionalClasses }) => {
const {language} = useContext(LanguageContext);

  return (
    <>
      <article
        className={`flex flex-col mb-10 bg-black/10 rounded border border-black/50 hover:bg-black/50 transition shadow-lg backdrop-filter backdrop-blur-3xl p-4 ${additionalClasses}`}
      >
        <h3 className="text-2xl font-semibold text-slate-300 mb-4">
          {project.title}
        </h3>
        <div className="flex flex-col-reverse justify-between gap-5">
          <section className="w-full">
            <section className="flex gap-2 flex-wrap mb-4">
              {project.tags.map((tag, id) => (
                <ProjectTag key={id} tag={tag} />
              ))}
            </section>
            <p className="text-base font-normal text-gray-300 text-pretty mb-5">
              {project.description}
            </p>
            {project.items && <ul className="list-disc pl-5 mb-5">
              {project.items.map((item, id) => (
                <li key={id} className="text-base font-normal text-gray-300 text-pretty">
                  {item}
                </li>
              ))}
            </ul>}
            {project.extraDescription && (
              <p className="text-base font-normal text-gray-300 text-pretty mb-5">
                {project.extraDescription}
              </p>
            )}
            {project.accessData && (
              <span className="text-base font-normal text-gray-500 text-pretty mb-5">
                <p>
                  <strong>{language === "en" ? "User:" : "Usuario"}</strong> {project.accessData.user}
                </p>
                <p>
                  <strong>{language === "en" ? "Password:" : "Contraseña"}</strong> {project.accessData.password}
                </p>
              </span>
            )}
            <ProjectLinks link={project.link} github={project.github} />
          </section>
          <div className="aspect-video shadow-lg hover:drop-shadow-glow rounded-lg transition">
            <ProjectSlider images={project.images} />
          </div>
        </div>
      </article>
    </>
  );
};

export default ProjectItem;
