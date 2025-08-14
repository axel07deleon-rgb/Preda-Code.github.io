/* ========= Router por hash (#) para simular páginas ========= */

const routes = new Set([
  'inicio',
  'nosotros',
  'servicios',
  'detalle-mantenimiento',
  'detalle-programacion',
  'detalle-instalacion',
  'ventas'
]);

function show(route) {
  // activar sección
  document.querySelectorAll('.page').forEach(sec => sec.classList.remove('activa'));
  const el = document.querySelector(`[data-route="${route}"]`);
  if (el) {
    el.classList.add('activa');
  }

  // activar link del menú
  document.querySelectorAll('.nav a').forEach(a => a.classList.remove('activa'));
  const activeLink = document.querySelector(`.nav a[href="#${route}"]`);
  if (activeLink) activeLink.classList.add('activa');

  // scroll top
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function navigateTo(hash) {
  // asegura formato #ruta
  if (!hash.startsWith('#')) hash = '#' + hash;
  window.location.hash = hash;
}

function handleHashChange() {
  const hash = window.location.hash.replace('#', '');
  const route = routes.has(hash) ? hash : 'inicio';
  show(route);
}

window.addEventListener('hashchange', handleHashChange);
document.addEventListener('DOMContentLoaded', () => {
  // Año en footer
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Enlaces del menú usan hash (por si CodePen los pre-procesa)
  document.querySelectorAll('[data-link]').forEach(a => {
    a.addEventListener('click', (e) => {
      // deja que el hash cambie, el router escucha 'hashchange'
    });
  });

  // Cargar ruta inicial
  handleHashChange();
});