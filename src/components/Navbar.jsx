// src/components/Navbar.jsx
import { useState } from 'react';
import '../styles/navbar.scss';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="#inicio" className="logo">FreeEngineer</a>

        {/* Menú completo */}
        <ul className={`navbar__menu ${menuOpen ? 'open' : ''}`}>
          <li><a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a></li>
          <li><a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a></li>
          <li><a href="#faqs" onClick={() => setMenuOpen(false)}>Preguntas frecuentes</a></li>
          <li><a href="#sobre-mi" onClick={() => setMenuOpen(false)}>Sobre mí</a></li>
          <li>
            <a href="#contacto" className="cta-button" onClick={() => setMenuOpen(false)}>
              Consulta tu caso
            </a>
          </li>
        </ul>

        {/* Botón hamburguesa solo visible en móvil */}
        <button className="navbar__toggle" onClick={toggleMenu} aria-label="Abrir menú">
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
