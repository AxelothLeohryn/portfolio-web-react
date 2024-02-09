import Astro from "../assets/tag-icons/astro.svg";
import Css3 from "../assets/tag-icons/css3.svg";
import Cypress from "../assets/tag-icons/cypress.svg";
import Docker from "../assets/tag-icons/docker.svg";
import Express from "../assets/tag-icons/express.svg";
import Html5 from "../assets/tag-icons/html5.svg";
import Javascript from "../assets/tag-icons/javascript.svg";
import Jest from "../assets/tag-icons/jest.svg";
import Mongodb from "../assets/tag-icons/mongodb.svg";
import Mongoose from "../assets/tag-icons/mongoose.svg";
import Nodejs from "../assets/tag-icons/nodedotjs.svg";
import Postgresql from "../assets/tag-icons/postgresql.svg";
import ReactIcon from "../assets/tag-icons/react.svg"; // 'React' is reserved keyword, so use 'ReactIcon'
import Sass from "../assets/tag-icons/sass.svg";
import Tailwindcss from "../assets/tag-icons/tailwindcss.svg";
import Vite from "../assets/tag-icons/vite.svg";
import ThreeJs from "../assets/tag-icons/threedotjs.svg";
import OpenAI from "../assets/tag-icons/openai.svg";
import Firebase from "../assets/tag-icons/firebase.svg";

// Map of tags to their corresponding SVG components
const tagColors = {
  ASTRO: "#BC52EE",
  CSS3: "#1572B6",
  CYPRESS: "##69D3A7",
  DOCKER: "#2496ED",
  EXPRESS: "#ffffff",
  HTML5: "#E34F26",
  JAVASCRIPT: "#F7DF1E",
  JEST: "#C21325",
  MONGODB: "#47A248",
  MONGOOSE: "#880000", 
  NODEJS: "#339933",
  POSTGRESQL: "#4169E1",
  REACT: "#61DAFB",
  SASS: "#CC6699",
  TAILWINDCSS: "#06B6D4",
  VITE: "#646CFF",
  THREEJS: "#FFFFFF", 
  OPENAI: "#412991", 
  FIREBASE: "#FFCA28",
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
  FIREBASE: { icon: Firebase, color: tagColors.FIREBASE },
};

export default tagIcons;
