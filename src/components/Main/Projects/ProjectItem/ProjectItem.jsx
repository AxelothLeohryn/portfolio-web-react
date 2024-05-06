import ProjectSlider from "./ProjectSlider";
import ProjectTag from "./ProjectTags/ProjectTag";
import ProjectLinks from "./ProjectLinks";
import { useContext } from "react";
import { LanguageContext } from "../../../../context/languageContext";

const ProjectItem = ({ project, additionalClasses }) => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <article
        className={`flex flex-col justify-between mb-10 bg-neutral-900 rounded-2xl border border-neutral-800 transition hover:shadow-lg backdrop-filter backdrop-blur-3xl overflow-hidden ${additionalClasses}`}
      >
        <div>
          <div className="aspect-video transition">
            <ProjectSlider images={project.images} />
          </div>
          <h3 className="text-2xl font-bold text-slate-300 px-6 py-6 text-pretty">
            {project.title}
          </h3>
          <hr className="h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
          <div className="p-6">
            <div className="flex flex-col justify-between gap-5">
              <section className="w-full">
                <section className="flex gap-2 flex-wrap mb-4">
                  {project.tags.map((tag, id) => (
                    <ProjectTag key={id} tag={tag} />
                  ))}
                </section>

                <p className="text-base font-normal text-gray-400 text-pretty mb-5">
                  {project.description}
                </p>
                {project.items && (
                  <ul className="list-disc pl-5 mb-5">
                    {project.items.map((item, id) => (
                      <li
                        key={id}
                        className="text-base font-normal text-gray-400 text-pretty"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {project.extraDescription && (
                  <p className="text-base font-normal text-gray-400 text-pretty mb-5">
                    {project.extraDescription}
                  </p>
                )}
                {project.accessData && (
                  <span className="text-base font-normal text-neutral-500 text-pretty mb-5">
                    <p>
                      <strong>{language === "en" ? "User:" : "Usuario"}</strong>{" "}
                      {project.accessData.user}
                    </p>
                    <p>
                      <strong>
                        {language === "en" ? "Password:" : "Contraseña"}
                      </strong>{" "}
                      {project.accessData.password}
                    </p>
                  </span>
                )}
              </section>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
          <ProjectLinks link={project.link} github={project.github} />
        </div>
      </article>
    </>
  );
};

export default ProjectItem;
