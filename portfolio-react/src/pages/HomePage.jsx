import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
