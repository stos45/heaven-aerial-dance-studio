if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('logo-home').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const revealEls = document.querySelectorAll('.reveal, .section-divider');
revealEls.forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 90}ms`;
});
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach((el) => revealObserver.observe(el));

document.querySelectorAll('.pricing-item, .schedule-day').forEach((item) => {
  const header = item.querySelector('.pricing-item-header, .schedule-day-header');
  header.addEventListener('click', () => {
    const isOpen = item.classList.toggle('open');
    header.setAttribute('aria-expanded', String(isOpen));
  });
});

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = 'Dziękujemy! Wiadomość została przygotowana do wysłania (podłącz backend/formspree, aby faktycznie ją wysyłać).';
  form.reset();
});
