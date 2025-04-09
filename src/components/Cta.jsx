// src/components/Cta.jsx
import '../styles/cta.scss';

function Cta() {
  return (
    <section className="cta" id="contacto">
      <h2 className="cta__text">¿Tienes dudas?</h2>
      <a href="https://" className="cta__button" target="_blank" rel="noopener noreferrer">
        Consulta tu caso
      </a>
    </section>
  );
}

export default Cta;
