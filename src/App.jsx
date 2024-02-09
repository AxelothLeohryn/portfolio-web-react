import React, { useEffect } from "react";
import useSectionObserver from "./hooks/useSectionObserver";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  //Changing the background color of the body based on the section
  const sections = ["#home-sentinel", "#experience", "#projects", "#about", "#contact"];
  const activeSection = useSectionObserver(sections, {
    threshold: [0.25],
  });

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isTop = window.scrollY < 0.1; // You can adjust the value as needed
  //     if (isTop) {
  //       document.body.className = "bg-home";
  //     } else if (!isTop && document.body.className === "bg-home") {
  //       // Optionally, reset to default or do nothing, depending on your setup
  //       // document.body.className = '';
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

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
        <Header activeSection={activeSection} />
        <Main />
        <Footer />
    </>
  );
}

export default App;
