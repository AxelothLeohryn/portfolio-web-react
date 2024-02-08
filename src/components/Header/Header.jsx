const Header = () => {
  return (
    <header className="flex justify-between items-center py-3 w-full xl:w-[1120px] mx-auto gap-4">
      <a href="#home">
        <img className="rounded-full size-10" src="/logo.png" alt="Logo" />
      </a>

      <nav className="flex flex-row gap-x-10 opacity-80 ">
        <a href="#home">Inicio</a>
        <a href="#experience">Experiencia</a>
        <a href="#projects">Proyectos</a>
        <a href="#about">Sobre mí</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
