// src/components/Faq.jsx
import { useState } from 'react';
import '../styles/faqs.scss';

const faqs = [
  {
    question: '¿Trabajas en toda España?',
    answer:
      'Depende del servicio. Para los certificados de eficiencia energética es necesaria una visita presencial, por lo que solo los ofrezco en la Comunidad de Madrid. Para el resto de servicios (como certificados estructurales o proyectos técnicos), sí puedo trabajar a distancia si me facilitas toda la información necesaria.',
  },
  {
    question: '¿Qué información necesito darte para un certificado de seguridad estructural?',
    answer:
      'Para poder valorar la estructura, necesito: Memoria técnica de la instalación fotovoltaica, fichas técnicas de los equipos, dirección del inmueble, nombre y DNI del solicitante y, si es posible, el proyecto original de la vivienda. Si la casa es anterior a 1990, el proyecto estructural es obligatorio.',
  },
  {
    question: '¿Y para un certificado de eficiencia energética?',
    answer:
      'Necesito: plano de la vivienda (si tienes), información de los equipos de climatización (modelo, año de instalación), datos del propietario y dirección. Durante la visita, haré fotos, tomaré medidas y revisaré cerramientos, ventanas y materiales.',
  },
  {
    question: '¿Puedo pedirte una memoria o proyecto técnico aunque ya tenga la instalación hecha?',
    answer:
      'Sí, puedo hacer la memoria a posteriori si tienes todos los datos necesarios de la instalación (ubicación, equipos, dimensionado, etc.). También puedo revisar o adaptar un proyecto anterior si necesitas actualizarlo para presentarlo en el ayuntamiento.',
  },
  {
    question: '¿Cuánto tardas en entregar los documentos?',
    answer:
      'Depende del tipo de servicio y de lo completa que esté la información que me facilites:\n\n- Certificados de eficiencia energética: 2 a 3 días tras la visita\n- Certificados estructurales: 3 a 5 días tras recibir toda la documentación\n- Memorias y proyectos técnicos: entre 4 y 7 días según complejidad',
  },
  {
    question: '¿Puedo consultarte si necesito otro tipo de documento?',
    answer:
      '¡Claro! Si necesitas cualquier otro certificado o documento técnico que requiera la firma de un ingeniero, escríbeme sin compromiso y valoramos si puedo ayudarte.',
  },
  {
    question: '¿Cómo se realiza el pago?',
    answer:
      'Una vez confirmado el servicio y recibida la documentación, te enviaré los detalles para realizar el pago por transferencia bancaria o bizum. Emito factura con IVA.',
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="faq" id="faqs">
      <h2 className="faq__title">PREGUNTAS FRECUENTES</h2>
      <div className="faq__list">
        {faqs.map((item, index) => (
          <div key={index} className={`faq__item ${openIndex === index ? 'open' : ''}`}>
            <button className="faq__question" onClick={() => toggle(index)}>
              <span>{item.question}</span>
              <span className="faq__icon">{openIndex === index ? '▲' : '▼'}</span>
            </button>
            {openIndex === index && (
              <div className="faq__answer">
                {item.answer.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
