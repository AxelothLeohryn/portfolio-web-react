import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/languageContext";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Header = ({ activeSection }) => {
  const { language, setLanguage } = useContext(LanguageContext);

  const [isScrolled, setisScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 75) {
        setisScrolled(true);
      } else {
        setisScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
    });
  };

  const isActive = (section) => section === activeSection;

  return (
    <>
      <header
        className={`w-[99vw] mx-auto gap-4 fixed top-0 z-10 transition duration-300 ${
          isScrolled
            ? "shadow-lg bg-black/75 backdrop-filter backdrop-blur-xl"
            : ""
        }`}
      >
        <div className="max-w-[1220px] flex justify-center lg:justify-between items-center mx-auto">
          <a href="#home" onClick={scrollToTop}>
            <img
              className="rounded-full size-10 hidden lg:flex"
              src="/logo.webp"
              alt="Logo"
            />
          </a>

          <nav className="flex flex-row text-sm lg:text-lg opacity-80 h-full">
            <a
              href="#home"
              className={`py-4 px-2 lg:px-5 glow-on-hover rounded-b-2xl text-gray-200 ${
                isActive("home") ? "glowing-active" : ""
              }`}
              // onClick={scrollToTop}
            >
              {language === "en" ? "Home" : "Inicio"}
            </a>
            <a
              href="#projects"
              className={`py-4 px-2 lg:px-5 glow-on-hover rounded-b-2xl text-gray-200 ${
                isActive("projects") ? "glowing-active" : ""
              }`}
            >
              {language === "en" ? "Projects" : "Proyectos"}
            </a>
            <a
              href="#experience"
              className={`py-4 px-2 lg:px-5 glow-on-hover rounded-b-2xl text-gray-200 ${
                isActive("experience") ? "glowing-active" : ""
              }`}
            >
              {language === "en" ? "Experience" : "Experiencia"}
            </a>

            <a
              href="#about"
              className={`py-4 px-2 lg:px-5 glow-on-hover rounded-b-2xl text-gray-200 ${
                isActive("about") ? "glowing-active" : ""
              }`}
            >
              {language === "en" ? "About me" : "Sobre mí"}
            </a>
            <a
              href={
                language === "en"
                  ? "/CV%20(ENG)%20-%20Alejandro%20Sanchez%20Sergueev.pdf"
                  : "/CV%20-%20Alejandro%20Sanchez%20Sergueev.pdf"
              }
              className="hidden py-4 px-2 lg:px-5 text-gray-400 lg:flex gap-1 items-center glow-on-hover rounded-b-2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV <ArrowOutwardIcon fontSize="small" />
            </a>
            {/* <a className={linkStyles} href="#contact">
              Contacto
            </a> */}

            <label className="inline-flex items-center cursor-pointer xl:absolute top-5 right-5">
              <span className="mr-1 lg:mr-2 text-xs lg:text-sm font-medium text-gray-300">
                ES
              </span>
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={(event) => {
                  const language = event.target.checked ? "en" : "es";
                  setLanguage(language);
                }}
              />
              <div className="relative w-7 h-5 lg:w-11 lg:h-6 bg-gray-600 rounded-full peer peer-checked:after:translate-x-2 lg:peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:start-1 lg:after:top-[2px] lg:after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 lg:after:h-5 lg:after:w-5 after:transition-all peer-checked:bg-gray-600"></div>
              <span className="ml-1 lg:ml-2 text-xs lg:text-sm font-medium text-gray-300">
                EN
              </span>
            </label>

            {/* <label className="inline-flex items-center cursor-pointer xl:absolute top-5 right-5">
              <span className="mr-2 text-xs lg:text-sm font-medium text-gray-300">
                ES
              </span>
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={(event) => {
                  const language = event.target.checked ? "en" : "es";
                  setLanguage(language);
                }}
              />
              <div className="relative w-8 h-4 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:start-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-gray-600"></div>
              <span className="ml-2 text-xs lg:text-sm font-medium text-gray-300">
                EN
              </span>
            </label> */}
          </nav>
        </div>
        {/* <div className="w-[100vw] absolute left-0 top-0 z-10 pt-0.5 rounded-full bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-middle)] to-[var(--gradient-end)] opacity-70" /> */}
      </header>
    </>
  );
};

export default Header;
