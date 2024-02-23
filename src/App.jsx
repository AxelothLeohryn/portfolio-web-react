import React, { useEffect, useContext, useState } from "react";
import { LanguageContext } from "./context/languageContext";
import useSectionObserver from "./hooks/useSectionObserver";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [language, setLanguage] = useState("es");

  //Changing the background color of the body based on the section
  const sections = [
    "#home-sentinel",
    "#experience",
    "#projects",
    "#about",
    "#contact",
  ];
  const activeSection = useSectionObserver(sections, {
    threshold: [0.2, 0.5, 0.8, 1],
  });

  useEffect(() => {
    // Here, you map section IDs to specific body classes
    const sectionToBodyClass = {
      "": "", // default
      home: "bg-home",
      experience: "bg-experience",
      projects: "bg-projects",
      about: "bg-about",
      contact: "bg-contact",
    };

    // Update body class based on the active section
    document.body.className = "";
    if (sectionToBodyClass[activeSection]) {
      document.body.classList.add(sectionToBodyClass[activeSection]);
    }
  }, [activeSection]);

  return (
    <>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Header activeSection={activeSection} />
        <Main />
        <Footer />
      </LanguageContext.Provider>
    </>
  );
}

export default App;
