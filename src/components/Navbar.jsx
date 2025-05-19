import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { scrollToSection } from './ScrollToSection';
import '../styles/navbar.scss';
import { Link } from 'react-router-dom';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleNavigateAndScroll = (sectionId) => {
    navigate('/'); // Asegura que estás en Home
    setTimeout(() => scrollToSection(sectionId), 100); // Espera breve para scroll
    setMenuOpen(false); // Cierra el menú móvil si está abierto
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <span
          className="logo"
          onClick={() => handleNavigateAndScroll('inicio')}
          style={{ cursor: 'pointer' }}
        >
          FreeEngineer
        </span>

        <button
          className="navbar__toggle"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        <ul className={`navbar__menu ${menuOpen ? 'open' : ''}`}>
          <li>
            <button onClick={() => handleNavigateAndScroll('inicio')}>
              Inicio
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigateAndScroll('servicios')}>
              Servicios
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigateAndScroll('faqs')}>
              Preguntas frecuentes
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigateAndScroll('sobre-mi')}>
              Sobre mí
            </button>
          </li>
          <li>
          <Link
    to="/contacto"
    className="cta-button"
    onClick={() => setMenuOpen(false)}
  >
    Consulta tu caso
  </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
