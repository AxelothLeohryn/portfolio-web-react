import React from "react";

const About = ({ language }) => {
  return (
    <article className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10 mx-5">
      <div className="flex flex-col items-center place-content-start md:grid grid-cols-6 grid-rows-2 gap-4 [&>p]:text-pretty [&>p]:text-gray-400">
        <img
          className="col-span-2 p-4 border-t-2 border-t-[var(--gradient-end)] border-l-2 border-l-[var(--gradient-end)] rounded-tl-md w-full aspect-square z-20 mt-4 shadow-lg lg:mt-0 transition duration-300 hover:scale-[1.05] hover:rotate-1 hover:shadow-xl"
          src="/about-me.webp"
          alt="Foto de Alex"
        />
        <p className="p-4 col-span-4 h-full place-content-center font-medium text-xl transition backdrop-filter backdrop-blur-3xl overflow-hidden hover:opacity-95">
          {language === "en"
            ? "🙋‍♂️ My name is Alejandro, although I'm usually called Alex. My passion is creating attractive and functional websites and interfaces, always trying to stay at the forefront of technologies and trends. I employ my Fullstack knowledge to create complete projects that are both visually appealing and user-friendly."
            : "🙋‍♂️ Me llamo Alejandro, aunque me suelen llamar Alex. Mi pasión es crear sitios web e interfaces atractivas y funcionales, intentando ir siempre a la vanguardia de las tecnologías y las tendencias. Empleo mis conocimientos Fullstack para crear proyectos completos que son tanto visualmente atractivos como fáciles de usar."}
        </p>
        <p className="p-4 col-span-3 h-full place-content-center font-medium text-lg md:text-xl transition backdrop-filter backdrop-blur-3xl overflow-hidden hover:opacity-95">
          {language === "en"
            ? "💡 I consider myself a curious, creative, and collaborative person, who enjoys solving all the challenges that arise when facing any project. Above all, I love to learn and incorporate new tools into my development arsenal."
            : "💡 Me considero una persona curiosa, creativa y colaborativa, que disfruta resolviendo todos los retos que se presentan al enfrentarse a cualquier proyecto. Sobre todo, me encanta aprender e incorporar nuevas herramientas a mi arsenal de desarrollo."}
        </p>
        <p className="p-4 col-span-3 h-full place-content-center border-b-2 border-b-[var(--gradient-end)] border-r-2 border-r-[var(--gradient-end)] rounded-br-md font-medium text-lg transition backdrop-filter backdrop-blur-3xl overflow-hidden hover:opacity-95">
          {language === "en"
            ? "🎓 Thanks to my experience at The Bridge bootcamp, I am trained not only in the technical aspects of development but also in project management, teamwork, frustration management, and the ability to learn new frameworks and tools (☝️#1 fan of reading the documentation)."
            : "🎓 Gracias a mi experiencia en el bootcamp de The Bridge, estoy capacitado no solo en los aspectos técnicos del desarrollo, sino también en la gestión de proyectos, el trabajo en equipo, la gestión de la frustración y la capacidad para aprender nuevos frameworks y herramientas (☝️fan nº1 de leer la documentación)."}
        </p>
      </div>
    </article>
  );
};

export default About;
