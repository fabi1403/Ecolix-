import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import ecolixLogo from '/ecolix-logo.svg';
import fbnLogo from '/FBN.png'; // Importar el logo FBN

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={ecolixLogo} alt="EcoLix+ Logo" style={{ height: '50px' }} />
        </Link>
      </div>
      <div className="navbar-fbn-logo">
        <a href="https://www.instagram.com/fabiit14/" target="_blank" rel="noopener noreferrer">
          <img src={fbnLogo} alt="FBN Logo" />
        </a>
      </div>
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Inicio</NavLink></li>
        <li><NavLink to="/shop" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Tienda</NavLink></li>
        <li><NavLink to="/recomendaciones" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Recomendaciones</NavLink></li>
        <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Blog</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;