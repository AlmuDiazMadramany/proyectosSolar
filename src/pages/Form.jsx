// src/pages/ContactForm.jsx
import '../styles/form.scss';

function ContactForm() {
  return (
    <section className="contact-form">
      <h2>Consulta tu caso</h2>
      <form onSubmit={(e) => e.preventDefault()}>
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
      </form>
    </section>
  );
}

export default ContactForm;
