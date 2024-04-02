export const projectListES = [
  {
    title: "Planorant - Valorant Premier Planner",
    description: "Planificador de equipos de Premier de Valorant.",
    items: [
      "Códigos de invitación para cada equipo.",
      "Selección de disponibilidad y agentes para cada día de juego.",
      'Chat en directo, lista de usuarios online, indicador de "Usuario escribiendo."',
      "Sincronización con MongoDB.",
      "Selector de temas y diseño responsive.",
    ],
    extraDescription: "Proyecto en desarrollo, +50 usuarios registrados.",
    link: "https://planorant.com",
    github: "https://github.com/AxelothLeohryn/planorant",
    images: [
      "https://github.com/AxelothLeohryn/planorant/blob/main/client/src/assets/readme-images/mobile3.png?raw=true",
      "https://github.com/AxelothLeohryn/planorant/blob/main/client/src/assets/readme-images/agents.png?raw=true",
      "https://github.com/AxelothLeohryn/planorant/blob/main/client/src/assets/readme-images/jointeam.png?raw=true",
      "https://github.com/AxelothLeohryn/planorant/blob/main/client/src/assets/readme-images/chat.png?raw=true",
      "https://github.com/AxelothLeohryn/planorant/blob/main/client/src/assets/readme-images/desktop-light.png?raw=true",
    ],
    tags: ["REACT", "TAILWINDCSS", "VITE", "NODEJS", "EXPRESS", "MONGODB", "DOCKER"],
  },
  {
    title: "iPhone 15 Pro Landing Page Clone",
    description:
      "Landing page del iPhone 15 pro con diseño responsive, animaciones y modelo 3D.",
    items: [
      "Slider de videos y progreso",
      "GSAP para animaciones.",
      "Modelo 3D con ThreeJS.",
    ],
    link: "https://alejandrosanserg-iphone-landing.netlify.app/",
    github: "https://github.com/AxelothLeohryn/iphone-landing",
    images: [
      "https://github.com/AxelothLeohryn/iphone-landing/blob/main/src/docs/readme-images/highlights.webp?raw=true",
      "https://github.com/AxelothLeohryn/iphone-landing/blob/main/src/docs/readme-images/cover.png?raw=true",
      "https://github.com/AxelothLeohryn/iphone-landing/raw/main/src/docs/readme-images/animations.webp?raw=true",
    ],
    tags: ["REACT", "GSAP", "THREEJS", "TAILWINDCSS"],
  },
  {
    title: "Reallo - Planificador de proyectos y tareas",
    description:
      "Aplicación web fullstack inspirada en Trello. Login y registro; CRUD tableros, listas y tareas; funcionalidad drag and drop. Tests de integración con Cypress. Mobile-first y diseño responsive.",
    // extraDescription:
    //   "Actualmente en fase 2! (añadiendo funcionalidades y mejorando el diseño).",
    accessData: {
      user: "demo@gmail.com",
      password: "Demo123!",
    },
    link: "https://reallo-fullstack.onrender.com/",
    github: "https://github.com/AxelothLeohryn/reallo-fullstack",
    images: [
      "https://github.com/AxelothLeohryn/reallo-fullstack/blob/main/client/src/assets/dnd.png?raw=true",
      "https://github.com/AxelothLeohryn/reallo-fullstack/blob/main/client/src/assets/view.png?raw=true",
      "https://github.com/AxelothLeohryn/reallo-fullstack/blob/main/client/src/assets/login.png?raw=true",
      "https://github.com/AxelothLeohryn/reallo-fullstack/blob/main/client/src/assets/testing.png?raw=true",
      "https://github.com/AxelothLeohryn/reallo-fullstack/blob/main/client/src/assets/docs.png?raw=true",
    ],
    tags: [
      "REACT",
      "VITE",
      "NODEJS",
      "EXPRESS",
      "MONGODB",
      "SASS",
      "CYPRESS",
      "DOCKER",
    ],
  },
  {
    title: "Diseñador de camisetas - 3D & IA",
    description:
      "Aplicación web fullstack para visualizar diseños de camisetas en 3D y obtener diseños de la IA. ",
    extraDescription:
      "Interfaz con colores dinámicos y fluida, adaptada a cualquier dispositivo, con la posibilidad de subir tus propios archivos como logos o texturas. Pregunta a la IA para generar nuevos logos y texturas.",
    accessData: null,
    link: "https://react-ai-shirt-designer.onrender.com/",
    github: "https://github.com/AxelothLeohryn/react-ai-shirt-designer",
    images: [
      "https://github.com/AxelothLeohryn/react-ai-shirt-designer/blob/main/docs/images/751shots_so.png?raw=true",
      "https://github.com/AxelothLeohryn/react-ai-shirt-designer/blob/main/docs/images/512shots_so.png?raw=true",
      "https://github.com/AxelothLeohryn/react-ai-shirt-designer/blob/main/docs/images/305shots_so.png?raw=true",
    ],
    tags: ["REACT", "THREEJS", "OPENAI", "NODEJS", "EXPRESS", "TAILWINDCSS"],
  },

  {
    title: "Dismoviery - Frontend VanillaJS",
    description:
      "Aplicación web construida con VanillaJS conectada a la API externa de TMDB. ",
    items: [
      "Registro y autenticación de usuarios.",
      "Listas de favoritos y 'Ver más tarde'.",
      "Filtrado y búsqueda de películas.",
      'Sección "Discovery".',
      "Diseño responsive.",
    ],
    extraDescription:
      "Registrate o usa los datos de acceso para probar la app!",
    accessData: {
      user: "demo@gmail.com",
      password: "Demo123!",
    },
    link: "https://axelothleohryn.github.io/dismoviery-website/",
    github: "https://github.com/AxelothLeohryn/dismoviery-website",
    images: [
      "https://github.com/AxelothLeohryn/dismoviery-website/blob/main/assets/screenshots/mobile.png?raw=true",
      "https://github.com/AxelothLeohryn/dismoviery-website/raw/main/assets/screenshots/main.png",
      "https://github.com/AxelothLeohryn/dismoviery-website/raw/main/assets/screenshots/desktop.png",
    ],
    tags: ["JAVASCRIPT", "HTML5", "CSS3", "FIREBASE"],
  },
  {
    title: "PokeApp - Pokedex con React",
    description:
      "Aplicación de React que interactúa con la PokeAPI para proporcionar una experiencia interactiva para los fans de Pokémon. Utiliza componentes funcionales de React y hooks como useState(), useEffect(), useContext() y useParams() para gestionar el estado y los efectos secundarios. También permite agregar nuevos pokemons usando react-hook-form y guardarlos en el contexto.",
    items: [
      "SASS para estilos y diseño responsive.",
      "Notificaciones, colores dinámicos según el tipo.",
      "Debouncing.",
      "Tests unitarios con Vitest.",
    ],
    // extraDescription:
    //   "SASS para estilos y diseño responsive. Notificaciones, colores dinámicos según el estado, debouncing, tests unitarios con Vitest y más!",
    accessData: null,
    link: "https://pokeapp-react-axeloth.netlify.app/",
    github: "https://github.com/AxelothLeohryn/pokeapp-react",
    images: [
      "https://github.com/AxelothLeohryn/pokeapp-react/blob/main/src/assets/gifs/mobileview.gif?raw=true",
    ],
    tags: ["REACT", "SASS", "VITE"],
  },
  {
    title: "MixTFT - Audio Mixer for Teamfight Tactics",
    description:
      "Aplicación web que permite a los jugadores de Teamfight Tactics (TFT) mezclar y escuchar las bandas sonoras de las diferentes composiciones del Set 10 del juego. Mobile-first y diseño responsive.",
    extraDescription: "(Prueba a mezclar Pentakill con Maestro 🤘)",
    accessData: null,
    link: "https://axelothleohryn.github.io/MixTFT-web/",
    github: "https://github.com/AxelothLeohryn/MixTFT-web",
    images: [
      "https://github.com/AxelothLeohryn/MixTFT-web/blob/main/assets/tftscreen.png?raw=true",
      "https://github.com/AxelothLeohryn/MixTFT-web/blob/main/assets/tftloading.png?raw=true",
    ],
    tags: ["HTML5", "CSS3", "JAVASCRIPT"],
  },
];

export const projectListEN = [
  {
    title: "Planorant - Valorant Premier Planner",
    description: "Premier Valorant team planner.",
    items: [
      "Invite codes for each team.",
      "Selection of availability and agents for each game day.",
      'Live chat, list of online users, "User typing" indicator.',
      "Synchronization with MongoDB.",
      "Theme selector and responsive design.",
    ],
    extraDescription: "Project in development, +50 registered users.",
    link: "https://planorant.com",
    github: "https://github.com/AxelothLeohryn/planorant",
    images: [
      "https://github.com/AxelothLeohryn/planorant/blob/main/client/src/assets/readme-images/mobile3.png?raw=true",
      "https://github.com/AxelothLeohryn/planorant/blob/main/client/src/assets/readme-images/agents.png?raw=true",
      "https://github.com/AxelothLeohryn/planorant/blob/main/client/src/assets/readme-images/jointeam.png?raw=true",
      "https://github.com/AxelothLeohryn/planorant/blob/main/client/src/assets/readme-images/chat.png?raw=true",
      "https://github.com/AxelothLeohryn/planorant/blob/main/client/src/assets/readme-images/desktop-light.png?raw=true",
    ],
    tags: ["REACT", "TAILWINDCSS", "VITE", "NODEJS", "EXPRESS", "MONGODB", "DOCKER"],
  },
  {
    title: "iPhone 15 Pro Landing Page Clone",
    description:
      "Landing page of the iPhone 15 pro with responsive design, animations and 3D model.",
    items: [
      "Video slider and progress bar.",
      "GSAP for animations.",
      "3D model with ThreeJS.",
    ],
    link: "https://alejandrosanserg-iphone-landing.netlify.app/",
    github: "https://github.com/AxelothLeohryn/iphone-landing",
    images: [
      "https://github.com/AxelothLeohryn/iphone-landing/blob/main/src/docs/readme-images/highlights.webp?raw=true",
      "https://github.com/AxelothLeohryn/iphone-landing/blob/main/src/docs/readme-images/cover.png?raw=true",
      "https://github.com/AxelothLeohryn/iphone-landing/raw/main/src/docs/readme-images/animations.webp?raw=true",
    ],
    tags: ["REACT", "GSAP", "THREEJS", "TAILWINDCSS"],
  },
  {
    title: "Reallo - Project and Task Planner",
    description:
      "Fullstack web application inspired by Trello. Login and registration; CRUD boards, lists, and tasks; drag and drop functionality. Integration tests with Cypress. Mobile-first and responsive design.",
    // extraDescription:
    //   "Currently in phase 2! (adding features and improving design).",
    accessData: {
      user: "demo@gmail.com",
      password: "Demo123!",
    },
    link: "https://reallo-fullstack.onrender.com/",
    github: "https://github.com/AxelothLeohryn/reallo-fullstack",
    images: [
      "https://github.com/AxelothLeohryn/reallo-fullstack/blob/main/client/src/assets/dnd.png?raw=true",
      "https://github.com/AxelothLeohryn/reallo-fullstack/blob/main/client/src/assets/view.png?raw=true",
      "https://github.com/AxelothLeohryn/reallo-fullstack/blob/main/client/src/assets/login.png?raw=true",
      "https://github.com/AxelothLeohryn/reallo-fullstack/blob/main/client/src/assets/testing.png?raw=true",
      "https://github.com/AxelothLeohryn/reallo-fullstack/blob/main/client/src/assets/docs.png?raw=true",
    ],
    tags: [
      "REACT",
      "VITE",
      "NODEJS",
      "EXPRESS",
      "MONGODB",
      "SASS",
      "CYPRESS",
      "DOCKER",
    ],
  },
  {
    title: "T-Shirt Designer - 3D & AI",
    description:
      "Fullstack web application to visualize 3D t-shirt designs and obtain designs from AI.",
    extraDescription:
      "Interface with dynamic and fluid colors, adapted to any device, with the possibility of uploading your own files such as logos or textures. Ask the AI to generate new logos and textures.",
    accessData: null,
    link: "https://react-ai-shirt-designer.onrender.com/",
    github: "https://github.com/AxelothLeohryn/react-ai-shirt-designer",
    images: [
      "https://github.com/AxelothLeohryn/react-ai-shirt-designer/blob/main/docs/images/751shots_so.png?raw=true",
      "https://github.com/AxelothLeohryn/react-ai-shirt-designer/blob/main/docs/images/512shots_so.png?raw=true",
      "https://github.com/AxelothLeohryn/react-ai-shirt-designer/blob/main/docs/images/305shots_so.png?raw=true",
    ],
    tags: ["REACT", "THREEJS", "OPENAI", "NODEJS", "EXPRESS", "TAILWINDCSS"],
  },

  {
    title: "Dismoviery - VanillaJS Frontend",
    description:
      "Web application built with VanillaJS connected to the external TMDB API.",
    items: [
      "User registration and authentication.",
      "Favorites and 'Watch later' lists.",
      "Filtering and searching for movies.",
      "Discovery section.",
      "Responsive design.",
    ],
    extraDescription: "Register or use the access data to try the app!",
    accessData: {
      user: "demo@gmail.com",
      password: "Demo123!",
    },
    link: "https://axelothleohryn.github.io/dismoviery-website/",
    github: "https://github.com/AxelothLeohryn/dismoviery-website",
    images: [
      "https://github.com/AxelothLeohryn/dismoviery-website/blob/main/assets/screenshots/mobile.png?raw=true",
      "https://github.com/AxelothLeohryn/dismoviery-website/raw/main/assets/screenshots/main.png",
      "https://github.com/AxelothLeohryn/dismoviery-website/raw/main/assets/screenshots/desktop.png",
    ],
    tags: ["JAVASCRIPT", "HTML5", "CSS3", "FIREBASE"],
  },
  {
    title: "PokeApp - Pokedex with React",
    description:
      "React application that interacts with the PokeAPI to provide an interactive experience for Pokémon fans. Uses functional components of React and hooks like useState(), useEffect(), useContext(), and useParams() to manage state and side effects. It also allows adding new pokemons using react-hook-form and saving them in the context.",
    items: [
      "SASS for styles and responsive design.",
      "Notifications, dynamic colors based on type.",
      "Debouncing.",
      "Unit tests with Vitest.",
    ],
    // extraDescription:
    //   "SASS for styles and responsive design. Notifications, dynamic colors based on state, debouncing, unit tests with Vitest, and more!",
    accessData: null,
    link: "https://pokeapp-react-axeloth.netlify.app/",
    github: "https://github.com/AxelothLeohryn/pokeapp-react",
    images: [
      "https://github.com/AxelothLeohryn/pokeapp-react/blob/main/src/assets/gifs/mobileview.gif?raw=true",
    ],
    tags: ["REACT", "SASS", "VITE"],
  },
  {
    title: "MixTFT - Audio Mixer for Teamfight Tactics",
    description:
      "Web application that allows Teamfight Tactics (TFT) players to mix and listen to the soundtracks of the different compositions from Set 10 of the game. Mobile-first and responsive design.",
    extraDescription: "(Try mixing Pentakill with Maestro 🤘)",
    accessData: null,
    link: "https://axelothleohryn.github.io/MixTFT-web/",
    github: "https://github.com/AxelothLeohryn/MixTFT-web",
    images: [
      "https://github.com/AxelothLeohryn/MixTFT-web/blob/main/assets/tftscreen.png?raw=true",
      "https://github.com/AxelothLeohryn/MixTFT-web/blob/main/assets/tftloading.png?raw=true",
    ],
    tags: ["HTML5", "CSS3", "JAVASCRIPT"],
  },
];
