import { useState } from "react";
import SocialBadge from "./SocialBadge";
import Experience from "./Experience";
import Projects from "./Projects";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";

const Main = () => {
  // State to track hover status
  const [isPictureHovered, setIsPictureHovered] = useState(false);

  //Cambiar cuando me encuentre trabajando (:D)
  const isAvailable = true;

  return (
    <main className="mx-auto lg:w-[900px] px-4 flex flex-col items-start fade">
      <section id="home" className="py-36 max-w-[1100px]">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row items-end gap-x-4 text-nowrap">
          <span className="wave my-auto lg:my-0">👋</span> Hello there! <br className="lg:hidden" /> Soy Alex.
          <a
            className="flex justify-center items-start slide-in-bottom"
            href="https://www.linkedin.com/in/alejandro-s%C3%A1nchez-sergueev/"
            target=" _blank"
            rel="noopener"
          >
            <img
              className={`rounded-full w-[6rem] ml-4 outline-none hover:outline ${
                isAvailable
                  ? "hover:outline-green-600"
                  : "hover:outline-red-600"
              } hover:outline-green-600 transition duration-300`}
              src="./profile-photo-min.png"
              alt="Foto de perfil"
              onMouseEnter={() => setIsPictureHovered(true)}
              onMouseLeave={() => setIsPictureHovered(false)}
            />

            <span
              className={`inline-flex items-center text-center absolute left-4 top-[4.4rem] justify-center shadow-xl bouncy-slide-up ${
                isAvailable ? "bg-green-400" : "bg-red-400"
              } ${
                isPictureHovered
                  ? isAvailable
                    ? "text-green-900"
                    : "text-red-900"
                  : isAvailable
                  ? "text-green-400"
                  : "text-red-400"
              } text-xs font-medium me-2 px-2.5 py-0.5 rounded-full size-7 overflow-hidden transition-all duration-200 ease-out ${
                isPictureHovered ? "w-24 scale-105" : ""
              }`}
              onMouseEnter={() => setIsPictureHovered(true)}
              onMouseLeave={() => setIsPictureHovered(false)}
            >
              {isAvailable ? "Disponible" : "No disponible"}
            </span>
          </a>
        </h1>
        <h2 className="text-xl lg:text-2xl text-wrap max-w-[700px] mt-8">
          <span className="text-cyan-100/90 fade">
            Desarrollador Fullstack Junior
          </span>{" "}
          con background en Ciencias. Apasionado por el mundo del desarrollo, el
          trabajo en equipo y la creación de productos útiles y atractivos.{" "}
          <span className="opacity-80">De Madrid, España.</span>
        </h2>
        <nav className="flex gap-4 mt-8 flex-wrap slide-in-bottom">
          <SocialBadge
            text={"GitHub"}
            Icon={GitHubIcon}
            link={"https://github.com/AxelothLeohryn"}
          />
          <SocialBadge
            text={"LinkedIn"}
            Icon={LinkedInIcon}
            link={
              "https://www.linkedin.com/in/alejandro-s%C3%A1nchez-sergueev/"
            }
          />
          <SocialBadge
            text={"alejandro.sanserg@gmail.com"}
            Icon={EmailIcon}
            link={"mailto:alejandro.sanserg@gmail.com"}
          />
        </nav>
      </section>
      <section id="experience" className="">
        <h2 className="text-3xl font-semibold mb-6 flex gap-x-4 items-center mt-20">
          <WorkIcon />
          Experiencia y Educación
        </h2>
        <Experience />
      </section>
      <section id="projects" className="mt-20">
        <h2 className="text-3xl font-semibold mb-6 flex gap-x-4 items-center mt-20">
          <CodeIcon />
          Proyectos
        </h2>
        <Projects />
      </section>
    </main>
  );
};

export default Main;
