// src/App.jsx
import Navbar from '../components/Navbar';
import '../styles/App.scss'; // Ya existente
import '../styles/navbar.scss'; // Asegúrate de importar también este
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

function App() {
  return (
    <>
      <Navbar />
      <div id='inicio' style={{ paddingTop: '90px' }}>
        <h1 className='webTitle' >FreeEngineer</h1>
        <h3 className='webSubTitle'>Especialista en instalaciones fotovoltaicas, eficiencia energética y certificaciones técnicas</h3>
        <Services />
        <Faqs/>
        <About/>
        <Cta/>
        <ScrollTopButton/>
      </div>
      

    </>
  );
}

export default App;
