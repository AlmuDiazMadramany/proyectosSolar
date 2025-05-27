// src/components/Services.jsx
import '../styles/services.scss';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Certificados de eficiencia energética de viviendas existentes.',
    image: 'images/servicio1.jpg',
    description: 'Realizo el certificado obligatorio para vender o alquilar tu casa, incluyendo visita, análisis y tramitación oficial.',
  },
  {
    id: 2,
    title: 'Certificados de seguridad estructural para instalaciones fotovoltaicas.',
    image: 'images/servicio2.jpg',
    description: 'Evalúo si una cubierta puede soportar paneles solares y emito el certificado necesario para legalizar la instalación.',
  },
  {
    id: 3,
    title: 'Memorias y proyectos técnicos para instalaciones fotovoltaicas.',
    image: 'images/servicio3.jpg',
    description: 'Elaboro la documentación técnica exigida por los ayuntamientos para legalizar instalaciones solares.',
  },
  {
    id: 4,
    title: 'Firma o redacción de documentos técnicos bajo demanda.',
    image: 'images/servicio4.jpg',
    description: 'Si necesitas un documento firmado por un ingeniero, consúltame y vemos si puedo ayudarte.',
  },
];

function Services() {
  return (
    <section className="services" id="servicios">
      <h2 className="services__title">SERVICIOS</h2>
      <div className="services__grid">
        {services.map((service) => (
          <div className="service" key={service.id}>
            <img src={service.image} alt={service.title} className="service__image" />
            <h3 className="service__name">{service.title}</h3>
            <p className="service__description">{service.description}</p>
            <Link to={`/servicio/${service.id}`} className="service__button">
              Más información
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
