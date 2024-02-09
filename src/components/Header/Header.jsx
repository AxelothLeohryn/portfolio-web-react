import React, { useEffect, useState } from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Header = () => {
  const [isScrolled, setisScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setisScrolled(true);
      } else {
        setisScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const linkStyles = "py-4 glow-on-hover px-2 lg:px-5";

  return (
    <>
      <header
        className={` w-full mx-auto gap-4 sticky top-0 z-10 transition duration-300 ${
          isScrolled
            ? "shadow-lg bg-black/50 backdrop-filter backdrop-blur-3xl"
            : ""
        }`}
      >
        <div className="max-w-[1220px] flex justify-center lg:justify-between items-center mx-auto">
          <a href="#home">
            <img
              className="rounded-full size-10 hidden lg:flex"
              src="/logo.png"
              alt="Logo"
            />
          </a>

          <nav className="flex flex-row text-sm lg:text-lg opacity-80 h-full">
            <a className={linkStyles} href="#home">
              Inicio
            </a>
            <a className={linkStyles} href="#experience">
              Experiencia
            </a>
            <a className={linkStyles} href="#projects">
              Proyectos
            </a>
            <a className={linkStyles} href="#about">
              Sobre mí
            </a>
            <a className={`${linkStyles} text-gray-400 flex gap-1 items-center`} href="https://github.com/AxelothLeohryn/portfolio-web-react" target="_blank" rel="noopener noreferrer">
              GitHub
              <ArrowOutwardIcon fontSize="small"/>
            </a>
            {/* <a className={linkStyles} href="#contact">
              Contacto
            </a> */}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
