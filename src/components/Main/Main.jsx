import { useState, useContext, useEffect } from "react";
import { LanguageContext } from "../../context/languageContext";

import SocialBadge from "./SocialBadge";
import Experience from "./Experience";
import Projects from "./Projects";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ListAltIcon from '@mui/icons-material/ListAlt';
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import PeopleIcon from "@mui/icons-material/People";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TechStack from "./TechStack";
import About from "./About/About";

const Main = () => {
  const { language } = useContext(LanguageContext);
  // State to track hover status
  const [isPictureHovered, setIsPictureHovered] = useState(false);

  //Cambiar cuando me encuentre trabajando (:D)
  const isAvailable = true;

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1.5, ease: "linear" },
      repeat: -1, // Loop the animation
      yoyo: true, // Reverse the animation
    });

    // Initial colors: 1, 2, 3
    const color1 = "#4FFFB0"; // Color 1
    const color2 = "#7FFFD4"; // Color 2
    const color3 = "#73d9f0"; // Color 3

    // First animation step: colors go to 3, 1, 2
    tl.to(":root", {
      "--gradient-start": color3,
      "--gradient-middle": color1,
      "--gradient-end": color2,
    });

    // Second animation step: colors go to 2, 3, 1
    tl.to(":root", {
      "--gradient-start": color2,
      "--gradient-middle": color3,
      "--gradient-end": color1,
    });

    // Third animation step: colors go to 1, 2, 3
    tl.to(":root", {
      "--gradient-start": color1,
      "--gradient-middle": color2,
      "--gradient-end": color3,
    });

    // The timeline automatically returns to the initial state due to `repeat: -1` and `yoyo: true`
  }, []);

  return (
    <main className="mx-auto lg:w-[1000px] flex flex-col items-start fade overflow-hidden md:overflow-visible">
      <section id="home" className="pt-36 max-w-[1200px] mx-auto px-5 md:pb-28">
        <div id="home-sentinel" className="absolute top-0 h-[1px] w-10"></div>
        <div className="mx-5">
        <div className="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row items-end gap-x-4 text-nowrap wrap">
          <div className="flex flex-wrap w-min md:w-fit">
            <div>
              <span className="wave my-auto lg:my-0">👋</span>{" "}
              <span
                id="hello-there"
                className="bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-middle)] to-[var(--gradient-end)] inline-block text-transparent bg-clip-text"
              >
                Hello there!
              </span>
            </div>
            <span className="ml-5">
              {language === "en" ? "I'm Alex." : "Soy Alex."}
            </span>
          </div>
          <a
            className="flex justify-center items-start slide-in-bottom"
            href="https://www.linkedin.com/in/alejandro-s%C3%A1nchez-sergueev/"
            target=" _blank"
            rel="noopener"
          >
            <img
              className={`rounded-full w-[10rem] ml-4 outline-none hover:outline ${
                isAvailable
                  ? "hover:outline-green-600"
                  : "hover:outline-red-600"
              } hover:outline-green-600 transition duration-300`}
              src="./profile-photo-min.webp"
              alt="Foto de perfil"
              onMouseEnter={() => setIsPictureHovered(true)}
              onMouseLeave={() => setIsPictureHovered(false)}
            />

            <span
              className={`hidden md:inline-flex items-center text-center absolute left-4 top-36 justify-center shadow-xl bouncy-slide-up ${
                isAvailable ? "bg-green-400" : "bg-red-400"
              } ${
                isPictureHovered
                  ? isAvailable
                    ? "text-green-900"
                    : "text-red-900"
                  : isAvailable
                  ? "text-green-400"
                  : "text-red-400"
              } text-xs font-medium me-2 px-2.5 py-0.5 rounded-full size-7 overflow-hidden transition-all duration-200 ease-in ${
                isPictureHovered ? "w-40 scale-105" : ""
              }`}
              onMouseEnter={() => setIsPictureHovered(true)}
              onMouseLeave={() => setIsPictureHovered(false)}
            >
              {language === "en"
                ? `${isAvailable ? "Available" : "Not available"}`
                : `${isAvailable ? "Disponible" : "No disponible"}`}
            </span>
          </a>
        </div>
        <h2 className="text-xl lg:text-2xl text-wrap max-w-[800px] mt-8 text-white">
          <span className="bg-gradient-to-r from-[#50ffbc] to-[#07dbf7] inline-block text-transparent bg-clip-text">
            {language === "en"
              ? "Jr. Fullstack Developer"
              : "Desarrollador Fullstack Jr."}
          </span>{" "}
          {language === "en"
            ? "with a background in Science. Passionate about frontend development and UX/UI design, I enjoy creating complete web applications."
            : "con background en Ciencias. Apasionado por el desarrollo frontend y el diseño de UX/UI, disfruto creando aplicaciones web completas."}{" "}
          <span className="bg-gradient-to-r from-[#a9eeff] to-[#9bedff] inline-block text-transparent bg-clip-text">
            {language === "en" ? "From Madrid, Spain" : "De Madrid, España"}
          </span>
        </h2>
        <nav
          id="socials-nav"
          className="flex flex-col lg:flex-row gap-4 mt-8 flex-wrap"
        >
          <SocialBadge
            text={"GitHub"}
            Icon={GitHubIcon}
            link={"https://github.com/AxelothLeohryn"}
            delay={"0.2s"} // Adjust the delay for the first child
          />
          <SocialBadge
            text={"LinkedIn"}
            Icon={LinkedInIcon}
            link={
              "https://www.linkedin.com/in/alejandro-s%C3%A1nchez-sergueev/"
            }
            delay={"0.4s"} // Adjust the delay for the second child
          />
          <SocialBadge
            text={"alejandro.sanserg@gmail.com"}
            Icon={EmailIcon}
            link={"mailto:alejandro.sanserg@gmail.com"}
            delay={"0.6s"} // Adjust the delay for the third child
          />
          <SocialBadge
            text={"CV"}
            Icon={ListAltIcon}
            link={"https://github.com/AxelothLeohryn/AxelothLeohryn/blob/main/CV%20(ENG)%20-%20Alejandro%20Sanchez%20Sergueev.pdf"}
            delay={"0.6s"} // Adjust the delay for the third child
          />
        </nav>
        </div>
        <TechStack />
      </section>
      <section id="projects" className="mt-20 px-5">
        <h2 className="text-3xl font-semibold mb-6 flex gap-x-4 items-center mt-20 text-white">
          <CodeIcon />
          {language === "en" ? "Projects" : "Proyectos"}
        </h2>
        <Projects />
        <div className="w-full flex justify-center">
          <MoreHorizIcon fontSize="large" />
        </div>
        <p className="mx-auto w-full text-base text-center font-normal text-gray-400 text-pretty mb-5">
          {language === "en"
            ? "Check out my GitHub to see more!"
            : "¡Entra en mi GitHub para ver más!"}
        </p>
      </section>
      <section id="experience" className="px-5">
        <h2 className="text-3xl font-semibold mb-6 flex gap-x-4 items-center mt-20 text-white">
          <WorkIcon />
          {language === "en"
            ? "Experience and Education"
            : "Experiencia y Educación"}
        </h2>
        <Experience />
      </section>
      <section id="about" className="mt-20 px-5">
        <h2 className="text-3xl font-semibold mb-6 flex gap-x-4 items-center mt-20 text-white">
          <PeopleIcon />
          {language === "en" ? "About me" : "Sobre mí"}
        </h2>
       <About language={language}/>
      </section>
    </main>
  );
};

export default Main;
