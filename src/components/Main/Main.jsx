import React from "react";
import SocialBadge from "./SocialBadge";
import GitHubLogo from "../../assets/icons/github.svg";
import LinkedInLogo from "../../assets/icons/linkedin.svg";
import GmailLogo from "../../assets/icons/gmail.svg";
import VSCodeLogo from "../../assets/icons/visualstudiocode.svg";

const Main = () => {
  return (
    <main className="mx-auto lg:w-[900px] px-4">
      <section className="py-44 pb-24">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row items-end gap-x-4 pb:6 lg:pb-10">
          Hello there!👋 Soy Alex
          <a
            className="flex justify-center items-start slide-in-right"
            href="https://www.linkedin.com/in/alejandro-s%C3%A1nchez-sergueev/"
            target=" _blank"
            rel="noopener"
          >
            <img
              className="rounded-full size-[6rem] "
              src="./profile-photo-min.png"
              alt="Foto de perfil"
            />
            <span className="inline-flex items-center bg-green-300 text-green-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full size-6 overflow-hidden dark:bg-blue-900 dark:text-blue-300 hover:w-20 hover:text-green-900 hover:-translate-x-2 hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-out bouncy-slide-up">
              Disponible
            </span>
          </a>
        </h1>
        <h2 className="text-xl lg:text-2xl text-wrap max-w-[700px]">
          <span className="text-cyan-100/90">
            Desarrollador Fullstack Junior
          </span>{" "}
          con background en Ciencias. Apasionado por el mundo del desarrollo, el
          trabajo en equipo y la creación de productos útiles y atractivos.{" "}
          <span className="opacity-80">De Madrid, España.</span>
        </h2>
        <nav className="flex gap-4 mt-8 flex-wrap slide-in-top">
          <SocialBadge
            text={"GitHub"}
            logo={GitHubLogo}
            link={"https://github.com/AxelothLeohryn"}
          />
          <SocialBadge
            text={"LinkedIn"}
            logo={LinkedInLogo}
            link={
              "https://www.linkedin.com/in/alejandro-s%C3%A1nchez-sergueev/"
            }
          />
          <SocialBadge
            text={"alejandro.sanserg@gmail.com"}
            logo={GmailLogo}
            link={"mailto:alejandro.sanserg@gmail.com"}
          />
        </nav>
      </section>
    </main>
  );
};

export default Main;
