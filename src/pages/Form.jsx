// src/pages/ContactForm.jsx
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/form.scss';
import Footer from '../components/Footer';

function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_pcmyqtu',
      'template_nfndizy',
      form.current,
      'eYfASgs-K91t81Uzs'
    ).then(() => {
      setStatus('success');
      form.current.reset();
    }).catch(() => {
      setStatus('error');
    });

    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <div className="contact-page">
      <section className="contact-form">
        <h2>CONSULTA TU CASO</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>
            Nombre:
            <input type="text" name="name" required />
          </label>

          <label>
            Email:
            <input type="email" name="email" required />
          </label>

          <label>
            Mensaje:
            <textarea name="message" rows="4" required></textarea>
          </label>

          <button type="submit">Enviar consulta</button>

          {status === 'success' && (
            <p className="form-message success">¡Mensaje enviado con éxito!</p>
          )}
          {status === 'error' && (
            <p className="form-message error">Hubo un error al enviar el mensaje.</p>
          )}
        </form>
      </section>
    </div>
  );
}

export default ContactForm;

