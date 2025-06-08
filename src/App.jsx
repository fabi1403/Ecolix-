import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import RecommendationsPage from './pages/RecommendationsPage';
import BlogPage from './pages/BlogPage';
import './App.css'; // Import App.css for global styles

function App() {
  const theme = 'dark'; // Default theme is dark

  useEffect(() => {
    document.body.className = theme; // Apply theme class to body
  }, [theme]);

  return (
      <Router>
        <Navbar />
        <div className="app-container dark" style={{ paddingTop: '0px' }}> {/* Apply theme class to app-container */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/recomendaciones" element={<RecommendationsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            {/* Puedes añadir una ruta para páginas no encontradas (404) aquí */}
          </Routes>
        </div>
      </Router>

  );
}

export default App;