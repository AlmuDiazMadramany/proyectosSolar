// src/components/Cta.jsx
import '../styles/cta.scss';
import { Link } from 'react-router-dom';

function Cta() {
  return (
    <section className="cta" id="contacto">
      <h2 className="cta__text">¿Tienes dudas?</h2>
      <Link to="/contacto" className="cta__button">
        Consulta tu caso
      </Link>
    </section>
  );
}

export default Cta;
