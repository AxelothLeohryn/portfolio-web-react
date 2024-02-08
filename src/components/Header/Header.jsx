import React, { useEffect, useState } from "react";

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

  return (
    <header
      className={`py-3 w-full mx-auto gap-4 p-5 sticky top-0 z-10 transition duration-300 lg:bg-transparent ${
        isScrolled ? "shadow-lg bg-black backdrop-filter backdrop-blur-3xl" : ""
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

        <nav className="flex flex-row text-sm lg:text-lg gap-4 lg:gap-x-10 opacity-80">
          <a href="#home">Inicio</a>
          <a href="#experience">Experiencia</a>
          <a href="#projects">Proyectos</a>
          <a href="#about">Sobre mí</a>
          <a href="#contact">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
