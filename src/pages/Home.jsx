import '../styles/App.scss';
import Services from '../components/Services';
import '../styles/services.scss';
import Faqs from '../components/Faqs';
import '../styles/faqs.scss';
import About from '../components/About';
import '../styles/about.scss';
import Cta from '../components/Cta';
import '../styles/cta.scss';
import ScrollTopButton from '../components/ScrollTopButton';
import '../styles/scrollTop.scss';

function Home() {
  return (
    <div id='inicio'>
      <h1 className="webTitle">FreeEngineer</h1>
      <h3 className="webSubTitle">
        Especialista en instalaciones fotovoltaicas, eficiencia energética y certificaciones técnicas
      </h3>

      <section id="servicios">
        <Services />
      </section>

      <section id="faqs">
        <Faqs />
      </section>

      <section id="sobre-mi">
        <About />
      </section>

      <section id="contacto">
        <Cta />
      </section>

      <ScrollTopButton />
    </div>
  );
}

export default Home;
