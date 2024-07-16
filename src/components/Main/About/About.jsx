import React from "react";

const About = ({ language }) => {
  return (
    <article className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10 mx-5 bg-white p-10 rounded-xl bg-opacity-0 backdrop-filter backdrop-blur-lg ">
      <div className="flex flex-col items-center place-content-start md:grid grid-cols-6 grid-rows-2 gap-8 [&>p]:text-pretty [&>p]:text-neutral-900 [&>p]:hover:scale-105 [&>p]:hover:text-slate-400">
        <img
          className="col-span-2 w-2/3 md:w-full rounded-3xl aspect-square z-20 mt-4 lg:mt-0 transition duration-300 hover:scale-[1.05] hover:rotate-1 hover:shadow-xl"
          src="/about-me.webp"
          alt="Foto de Alex"
        />
        <p className=" col-span-4 place-content-center font-medium text-md transition bg-neutral-900 border border-neutral-800 border-t-neutral-950 border-b-neutral-600 p-8 rounded-xl bg-opacity-90 backdrop-filter backdrop-blur-lg  overflow-hidden hover:opacity-95 hover:scale-[1.05] hover:rotate-1">
          {language === "en"
            ? "🙋‍♂️ My name is Alejandro, although I'm usually called Alex. My passion is creating attractive and functional websites and interfaces, always trying to stay at the forefront of technologies and trends. I employ my Fullstack knowledge to create complete projects that are both visually appealing and user-friendly."
            : "🙋‍♂️ Me llamo Alejandro, aunque me suelen llamar Alex. Mi pasión es crear sitios web e interfaces atractivas y funcionales, siempre a la vanguardia de las tecnologías y tendencias. Empleo mis conocimientos Fullstack para desarrollar proyectos completos que son visualmente atractivos y fáciles de usar."}
        </p>
        <p className=" col-span-3 place-content-start font-medium text-md transition bg-neutral-900 border border-neutral-800 border-t-neutral-950 border-b-neutral-600 shadow p-8 rounded-xl bg-opacity-90 backdrop-filter backdrop-blur-lg  overflow-hidden hover:opacity-95 hover:scale-[1.05] hover:rotate-1">
          {language === "en"
            ? "💡 I consider myself a curious, creative, and collaborative person, who enjoys solving all the challenges that arise when facing any project. Above all, I love to learn and incorporate new tools into my development arsenal."
            : "💡 Soy una persona curiosa, creativa y colaborativa, que disfruta resolviendo retos en cada proyecto. Me encanta aprender e incorporar nuevas herramientas a mi arsenal de desarrollo."}
        </p>
        <p className=" col-span-3 place-content-center font-medium text-md transition bg-neutral-900 border border-neutral-800 border-t-neutral-950 border-b-neutral-600 shadow p-8 rounded-xl bg-opacity-90 backdrop-filter backdrop-blur-lg  overflow-hidden hover:opacity-95 hover:scale-[1.05] hover:rotate-1">
          {language === "en"
            ? "🎓 Thanks to my experience at The Bridge bootcamp, I am trained not only in the technical aspects of development but also in project management, teamwork, frustration management, and the ability to learn new frameworks and tools (☝️#1 fan of reading the documentation)."
            : "🎓 Gracias a mi experiencia en el bootcamp de The Bridge, estoy capacitado en aspectos técnicos del desarrollo, gestión de proyectos, trabajo en equipo y la capacidad para aprender nuevos frameworks y herramientas (☝️fan nº1 de leer la documentación)."}
        </p>
      </div>
    </article>
  );
};

export default About;
