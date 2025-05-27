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
    navigate('/'); 
    setTimeout(() => scrollToSection(sectionId), 100); 
    setMenuOpen(false); 
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
      <img
          src="public/images/FreeEngineer_logo_grey.png"
          alt="Logo FreeEngineer"
          className="logo"
          onClick={() => handleNavigateAndScroll('inicio')}
          style={{ cursor: 'pointer', height: '40px' }} // ajusta tamaño según necesites
        />

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
