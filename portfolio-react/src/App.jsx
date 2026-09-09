import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';

function ScrollHandler() {
  const location = useLocation();
  useEffect(() => {
    if (window.initPortfolioScript) {
      // Small timeout to allow React to paint the DOM
      setTimeout(window.initPortfolioScript, 100);
    }
    window.scrollTo(0, 0);
  }, [location.pathname]);
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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
