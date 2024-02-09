import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import React, { useEffect } from 'react';
import useSectionObserver from './hooks/useSectionObserver';

function App() {
  const sections = ['#home', '#experience', '#projects', '#about', '#contact'];
  const activeSection = useSectionObserver(sections, { threshold: 0.5 });

  useEffect(() => {
    // Here, you map section IDs to specific body classes
    const sectionToBodyClass = {
      '': '', // default
      'home': 'bg-home',
      'experience': 'bg-experience',
      'projects': 'bg-projects',
      'about': 'bg-about',
      'contact': 'bg-contact',
    };

    // Update body class based on the active section
    document.body.className = '';
    if (sectionToBodyClass[activeSection]) {
      document.body.classList.add(sectionToBodyClass[activeSection]);
    }
  }, [activeSection]);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
