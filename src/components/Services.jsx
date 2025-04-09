// src/components/Services.jsx
import '../styles/services.scss';

const services = [
  {
    title: 'Certificados de eficiencia energética de viviendas existentes.',
    image: 'images/servicio1.jpg',
    url: 'https://otraweb.com/servicio1',
    description: 'Realizo el certificado obligatorio para vender o alquilar tu casa, incluyendo visita, análisis y tramitación oficial.',
  },
  {
    title: 'Certificados de seguridad estructural para instalaciones fotovoltaicas.',
    image: 'images/servicio2.jpg',
    url: 'https://otraweb.com/servicio2',
    description: 'Evalúo si una cubierta puede soportar paneles solares y emito el certificado necesario para legalizar la instalación.',
  },
  {
    title: 'Memorias y proyectos técnicos para instalaciones fotovoltaicas.',
    image: 'images/servicio3.jpg',
    url: 'https://otraweb.com/servicio3',
    description: 'Elaboro la documentación técnica exigida por los ayuntamientos para legalizar instalaciones solares.',
  },
  {
    title: 'Firma o redacción de documentos técnicos bajo demanda.',
    image: 'images/servicio2.jpg',
    url: 'https://otraweb.com/servicio4',
    description: 'Si necesitas un documento firmado por un ingeniero, consúltame y vemos si puedo ayudarte.',
  },
];

function Services() {
  return (
    <section className="services" id="servicios">
      <h2 className="services__title">Servicios</h2>
      <div className="services__grid">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <img src={service.image} alt={service.title} className="service__image" />
            <h3 className="service__name">{service.title}</h3>
            <p className="service__description">{service.description}</p>
            <a href={service.url} target="_blank" rel="noopener noreferrer" className="service__button">
              Más información
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
