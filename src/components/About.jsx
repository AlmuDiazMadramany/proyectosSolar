// src/components/About.jsx
import '../styles/about.scss';

function About() {
  return (
    <section className="about" id="sobre-mi">
      <h2 className="about__title">Sobre mí</h2>
      <div className="about__content">
        <div className="about__text">
          <h3>Álvaro Sepena Zabala</h3>
          <h4>Ingeniero de Proyecto Autoconsumo Fotovoltaico</h4>
          <p>
            Diseñar, o saber construir o arreglar cualquier cosa que se mueva es lo que me llevó a elegir mis estudios, y siempre me parecerá interesante.
            La energía, por su vital importancia en el mundo de hoy, es el camino que he elegido seguir actualmente, especialmente la renovable.
            Siempre tendré la espina clavada de no haber participado en algún proyecto de investigación, quizás me surja la oportunidad algún día.
          </p>
        </div>
        <img
          className="about__image"
          src="/images/alvaro.jpg"
          alt="Álvaro Sepena"
        />
      </div>
    </section>
  );
}

export default About;
