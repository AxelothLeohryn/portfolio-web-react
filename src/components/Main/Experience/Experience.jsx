import React from "react";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  const experienceItems = [
    // {
    //   title: "Ampliación de portfolio",
    //   date: "Actualidad...",
    //   description:
    //     "Desarrollo de mi portfolio personal, consolidación de conocimientos en JavaScript y React, además del aprendizaje continuo de nuevas tecnologías y mejores prácticas en el desarrollo web.",
    // },
    {
      title: "Desafío de Tripulaciones - The Bridge & Several Energy",
      date: "Enero 2024",
      description:
        "Desarrollo del Backend (NodeJS, ExpressJS) y Frontend (React) de una aplicación web para empresa de asesoría energética. Trabajo en equipo con departamentos de UX/UI, Data Science, Marketing, Ciberseguridad y Cloud/DevOps. Utilización de metodologías Agile y colaboración con Git. Participación en reuniones con cliente y presentación de resultados.",
      link: "https://github.com/TheBridge-DesafioTripulaciones-Grupo2/DesafioTripulaciones_Sept23_Grupo2_fullstack/tree/develop",
      linkDescription: "Info del proyecto en GitHub",
    },
    {
      title: "Desarrollo Web Fullstack - The Bridge",
      date: "Septiembre 2023 - Enero 2024",
      description:
        "Programa intensivo y práctico (480h) de desarrollo web con HTML5, CSS3 y JavaScript (ES6), desarrollo Backend con NodeJS y ExpressJS, creación de APIs REST, manejo de bases de datos SQL y MongoDB, desarrollo Frontend con React, React Hooks, tests unitarios y E2E, metodologías Agile y DevOps con Docker y CI/CD.",
      link: "https://www.linkedin.com/in/alejandrosanchezsergueev",
      linkDescription: "Ver certificado en LinkedIn",
    },

    {
      title: "HTML, CSS, JavaScript - Codecademy",
      date: "Junio 2022 - Agosto 2022",
      description:
        "Fundamentos del desarrollo web, incluyendo la construcción de páginas web con HTML, el estilo con CSS y la adición de interactividad con JavaScript.",
    },

    {
      title: "Grado en Química - Universidad Complutense de Madrid",
      date: "Septiembre 2017 - Junio 2023",
      description:
        "Durante mi formación en Química, adquirí habilidades analíticas y resolutivas, y aprendí a trabajar en equipo y a comunicar de forma efectiva.",
    },
  ];
  return (
    <>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-3">
        {experienceItems.map((experience) => (
          <li className="mb-10 ms-4" key={experience.title}>
            <ExperienceItem {...experience} />
          </li>
        ))}
      </ol>
    </>
  );
};

export default Experience;
