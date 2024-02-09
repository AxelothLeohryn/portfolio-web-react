import { useEffect, useState } from 'react';

const useSectionObserver = (sections, options) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(section => {
      const sectionEl = document.querySelector(section);
      if (sectionEl) observer.observe(sectionEl);
    });

    return () => {
      sections.forEach(section => {
        const sectionEl = document.querySelector(section);
        if (sectionEl) observer.unobserve(sectionEl);
      });
    };
  }, [sections, options]);

  return activeSection;
};

export default useSectionObserver;
