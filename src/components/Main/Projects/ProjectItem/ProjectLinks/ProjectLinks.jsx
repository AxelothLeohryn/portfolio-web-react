import { Tooltip } from "flowbite-react";
import GitHubIcon from "@mui/icons-material/GitHub";
import ComputerIcon from "@mui/icons-material/Computer";

const ProjectLinks = ({ link, github }) => {
  return (
    <div className="flex justify-start gap-4 w-full pt-6">
      <Tooltip content="Ver código fuente" placement="bottom">
        <a
          className="inline-flex items-center justify-center gap-2 px-3 py-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-gray-500"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
          Código
        </a>
      </Tooltip>
      <Tooltip content="Aplicación desplegada (puede tardar en cargar)" placement="bottom">
        <a
          className="inline-flex items-center justify-center gap-2 px-3 py-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-gray-500"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ComputerIcon />
          Demo
        </a>
      </Tooltip>
    </div>
  );
};

export default ProjectLinks;
