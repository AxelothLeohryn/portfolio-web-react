import { Tooltip } from "flowbite-react";
import GitHubIcon from "@mui/icons-material/GitHub";
import ComputerIcon from "@mui/icons-material/Computer";
import { useContext } from "react";
import { LanguageContext } from "../../../../../context/languageContext";

const ProjectLinks = ({ link, github }) => {
const {language} = useContext(LanguageContext);

  return (
    <div className="mx-auto flex justify-center gap-4 w-full">
      <Tooltip content={language === "en" ? "Github" : "Github"} placement="top">
        <a
          className="rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-base bg-white/5 hover:bg-gradient-to-t from-[#4599bb] to-[#00cee9] transition-all"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
          {language === "en" ? "Source" : "Repositorio"}
        </a>
      </Tooltip>
      <Tooltip content={language === "en" ? "Deployed App (might take a while to load for demo projects)" : "Aplicación desplegada (puede tardar en cargar para projectos de demo)"} placement="top">
        <a
          className="rounded border border-white/10 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-base bg-white/5 hover:bg-gradient-to-t from-[#4599bb] to-[#00cee9] transition-all"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ComputerIcon />
          {language === "en" ? "Web" : "Web"}
        </a>
      </Tooltip>
    </div>
  );
};

export default ProjectLinks;
