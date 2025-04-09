export function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Si aún no existe, reintenta después
      setTimeout(() => scrollToSection(id), 100);
    }
  }