import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
