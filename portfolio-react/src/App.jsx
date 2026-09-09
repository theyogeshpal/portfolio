import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

function ScrollHandler() {
  const location = useLocation();
  useEffect(() => {
    if (window.initPortfolioScript) {
      setTimeout(window.initPortfolioScript, 100);
    }
    if (location.hash) {
        setTimeout(() => {
            const element = document.getElementById(location.hash.slice(1));
            if (element) element.scrollIntoView();
        }, 150);
    } else {
        window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
