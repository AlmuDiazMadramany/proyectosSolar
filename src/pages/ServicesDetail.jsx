// src/pages/ServiceDetail.jsx
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { services } from '../data/services';
import { Link } from 'react-router-dom';
import '../styles/servicesDetail.scss';

function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));
  const otherServices = services.filter((s) => s.id !== parseInt(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!service) return <p style={{ padding: '2rem' }}>Servicio no encontrado.</p>;

  return (
    <section className="service-detail">
      <div className="service-detail__container">
        <h2 className="service-detail__title">{service.title}</h2>
        <img
          src={`/${service.image}`}
          alt={service.title}
          className="service-detail__image"
        />

        <div
          className="service-detail__content"
          dangerouslySetInnerHTML={{ __html: service.content }}
        />

        <a href="#contacto" className="cta">
          Quiero solicitar este servicio
        </a>
      </div>

      <h3 className="other-title">OTROS SERVICIOS</h3>
      <div className="other-services">
        {otherServices.map((s) => (
          <div className="service-card" key={s.id}>
            <img src={`/${s.image}`} alt={s.title} />
            <h4>{s.title}</h4>
            <p>{s.shortDescription}</p>
            <Link to={`/servicio/${s.id}`} className="service__button">
              Más información
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceDetail;
