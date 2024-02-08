import Astro from "./astro.svg";
import Css3 from "./css3.svg";
import Cypress from "./cypress.svg";
import Docker from "./docker.svg";
import Express from "./express.svg";
import Html5 from "./html5.svg";
import Javascript from "./javascript.svg";
import Jest from "./jest.svg";
import Mongodb from "./mongodb.svg";
import Mongoose from "./mongoose.svg";
import Nodejs from "./nodedotjs.svg";
import Postgresql from "./postgresql.svg";
import ReactIcon from "./react.svg"; // 'React' is reserved keyword, so use 'ReactIcon'
import Sass from "./sass.svg";
import Tailwindcss from "./tailwindcss.svg";
import Vite from "./vite.svg";
import ThreeJs from "./threedotjs.svg";
import OpenAI from "./openai.svg";

// Map of tags to their corresponding SVG components
const tagColors = {
  ASTRO: "#FFD700", // example color for Astro
  CSS3: "#1572B6",
  CYPRESS: "#17202C",
  DOCKER: "#2496ED",
  EXPRESS: "#ffffff",
  HTML5: "#E34F26",
  JAVASCRIPT: "#F7DF1E",
  JEST: "#C21325",
  MONGODB: "#47A248",
  MONGOOSE: "#800000", // example color for Mongoose, change as needed
  NODEJS: "#339933",
  POSTGRESQL: "#336791",
  REACT: "#61DAFB",
  SASS: "#CC6699",
  TAILWINDCSS: "#38B2AC",
  VITE: "#646CFF",
  THREEJS: "#000000", // example color for Three.js, change as needed
  OPENAI: "#412991", // example color for OpenAI, change as needed
};
const tagIcons = {
  ASTRO: { icon: Astro, color: tagColors.ASTRO },
  CSS3: { icon: Css3, color: tagColors.CSS3 },
  CYPRESS: { icon: Cypress, color: tagColors.CYPRESS },
  DOCKER: { icon: Docker, color: tagColors.DOCKER },
  EXPRESS: { icon: Express, color: tagColors.EXPRESS },
  HTML5: { icon: Html5, color: tagColors.HTML5 },
  JAVASCRIPT: { icon: Javascript, color: tagColors.JAVASCRIPT },
  JEST: { icon: Jest, color: tagColors.JEST },
  MONGODB: { icon: Mongodb, color: tagColors.MONGODB },
  MONGOOSE: { icon: Mongoose, color: tagColors.MONGOOSE },
  NODEJS: { icon: Nodejs, color: tagColors.NODEJS },
  POSTGRESQL: { icon: Postgresql, color: tagColors.POSTGRESQL },
  REACT: { icon: ReactIcon, color: tagColors.REACT },
  SASS: { icon: Sass, color: tagColors.SASS },
  TAILWINDCSS: { icon: Tailwindcss, color: tagColors.TAILWINDCSS },
  VITE: { icon: Vite, color: tagColors.VITE },
  THREEJS: { icon: ThreeJs, color: tagColors.THREEJS },
  OPENAI: { icon: OpenAI, color: tagColors.OPENAI },
};

export default tagIcons;
