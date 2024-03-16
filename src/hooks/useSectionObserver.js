import { useEffect, useState } from "react";
import { debounce } from "lodash";

const useSectionObserver = (sections, options) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      debounce((entries) => {
        entries.forEach((entry) => {
          if(window.scrollY === 0) setActiveSection("home");
          if (entry.isIntersecting) {
            // Check if the sentinel is intersecting
            if (entry.target.id === "home") {
              setActiveSection("home");
            } else {
              setActiveSection(entry.target.id);
            }
          }
        });
      }, 1),
      options
    );

    sections.forEach((section) => {
      const sectionEl = document.querySelector(section);
      if (sectionEl) observer.observe(sectionEl);
    });

    return () => {
      sections.forEach((section) => {
        const sectionEl = document.querySelector(section);
        if (sectionEl) observer.unobserve(sectionEl);
      });
    };
  }, [sections, options]);

  return activeSection;
};

export default useSectionObserver;
