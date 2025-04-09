// src/components/ScrollTopButton.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/scrollTop.scss';
import { scrollToSection } from './ScrollToSection';

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    navigate('/');
    window.scrollTo(0, 0); // por si acaso
    setTimeout(() => scrollToSection('inicio'), 300); // espera más para asegurar que Home se montó
  };

  return (
    visible && (
      <button className="scroll-top" onClick={handleClick} aria-label="Volver arriba">
        ↑
      </button>
    )
  );
}

export default ScrollTopButton;
