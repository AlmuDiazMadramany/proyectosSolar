// src/components/ScrollTopButton.jsx
import { useEffect, useState } from 'react';
import '../styles/scrollTop.scss';

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    visible && (
      <a href="#inicio" className="scroll-top" aria-label="Volver arriba">
        ↑
      </a>
    )
  );
}

export default ScrollTopButton;
