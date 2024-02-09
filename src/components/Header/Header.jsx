import React, { useEffect, useState } from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Header = ({activeSection}) => {
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

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: -10,
    });
  };

  const isActive = section => section === activeSection;

  const linkStyles = "py-4 glow-on-hover px-2 lg:px-5";

  return (
    <>
      <header
        className={` w-full mx-auto gap-4 fixedg top-0 z-10 transition duration-300 ${
          isScrolled
            ? "shadow-lg bg-black/50 backdrop-filter backdrop-blur-3xl"
            : ""
        }`}
      >
        <div className="max-w-[1220px] flex justify-center lg:justify-between items-center mx-auto">
          <a href="" onClick={scrollToTop}>
            <img
              className="rounded-full size-10 hidden lg:flex"
              src="/logo.png"
              alt="Logo"
            />
          </a>

          <nav className="flex flex-row text-sm lg:text-lg opacity-80 h-full">
          <a href="" className={`py-4 px-2 lg:px-5 glow-on-hover ${isActive('home') ? "glowing-active" : ''}`} onClick={scrollToTop}>
            Inicio
          </a>
          <a href="#experience" className={`py-4 px-2 lg:px-5 glow-on-hover ${isActive('experience') ? "glowing-active" : ''}`}>
            Experiencia
          </a>
          <a href="#projects" className={`py-4 px-2 lg:px-5 glow-on-hover ${isActive('projects') ? "glowing-active" : ''}`}>
            Proyectos
          </a>
          <a href="#about" className={`py-4 px-2 lg:px-5 glow-on-hover ${isActive('about') ? "glowing-active" : ''}`}>
            Sobre mí
          </a>
          <a href="https://github.com/AxelothLeohryn/portfolio-web-react" className="py-4 px-2 lg:px-5 text-gray-400 flex gap-1 items-center glow-on-hover" target="_blank" rel="noopener noreferrer">
            GitHub <ArrowOutwardIcon fontSize="small"/>
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
