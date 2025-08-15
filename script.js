/* =========  VARIABLES  ========= */
:root {
  --bg: #7cb9e8;
  --text: #212121;
  --card: #000;
  --accent: #00e1ff;
  --accent-2: #00ffff;
  --btn: #212121;
  --btn-ghost: #ffffff;
  --shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
}

/* =========  RESET  ========= */
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { height: 100%; }
body {
  font-family: 'Segoe UI', system-ui, Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
}

/* =========  TOP-BAR  ========= */
.topbar {
  position: sticky; top: 0; z-index: 50;
  display: flex; justify-content: space-between; align-items: center;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: saturate(140%) blur(6px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
.brand {
  display: flex; align-items: center; gap: 0.5rem; cursor: pointer; font-weight: 700;
}
.brand img { width: 40px; height: 40px; object-fit: contain; }
.nav a {
  color: var(--text); text-decoration: none; margin-left: 0.75rem; padding: 0.35rem 0.6rem; border-radius: 0.5rem;
}
.nav a.activa { background: #000; color: #fff; }

/* =========  PÁGINAS  ========= */
#app { max-width: 1200px; margin: 0 auto; padding: 1rem; }
.page { display: none; animation: fadeIn 0.35s ease both; }
.page.activa { display: block; }
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

/* =========  HERO  ========= */
.hero {
  display: flex; align-items: center; justify-content: space-between; gap: 2rem;
  padding: 2rem 1rem;
}
.text-content { max-width: 620px; }
.text-content h1 { font-size: 2.2rem; margin-bottom: 1rem; }
.text-content p { line-height: 1.6; font-size: 1.05rem; }
.logo-container img { width: 260px; max-width: 100%; }

/* =========  CARD / GRID  ========= */
.cards, .grid {
  display: grid; gap: 22px;
}
.cards { grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); margin: 1rem 0; }
.grid  { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); margin: 1rem 0 2rem; }

.card {
  background: var(--card); color: var(--accent); border-radius: 12px; overflow: hidden;
  box-shadow: var(--shadow); transition: transform 0.25s ease, box-shadow 0.25s ease;
  text-align: center;
}
.card:hover { transform: translateY(-6px); box-shadow: 0 16px 35px rgba(0, 0, 0, 0.25); }
.card img { width: 100%; height: 180px; object-fit: cover; display: block; }
.card h3 { color: var(--accent-2); margin: 0.7rem 0 0.25rem; }
.card p { padding: 0 1rem 0.75rem; margin: 0; }
.info-link {
  margin: 0.25rem 0 1rem; background: transparent; color: var(--accent);
  border: none; text-decoration: underline; cursor: pointer; font-weight: 700;
}

/* Producto claro */
.producto { background: #fff; color: var(--text); }
.producto h3 { color: #111; }
.producto strong { display: inline-block; margin: 0.4rem auto 1rem; font-size: 1.05rem; }

/* =========  OTROS ESTILOS  ========= */
h1, h2, h3 { text-align: center; }
.subtitle { max-width: 760px; margin: 0.25rem auto 1.5rem; text-align: center; opacity: 0.9; }
.imagen-seccion {
  display: block; margin: 1rem auto; width: min(100%, 720px); border-radius: 14px;
  box-shadow: var(--shadow);
}
.contenedor-texto, .bullets {
  max-width: 900px; margin: 0 auto; line-height: 1.65; text-align: justify;
}
.bullets li { margin: 0.4rem 0; }

/* =========  FOOTER  ========= */
.footer {
  text-align: center; padding: 1rem; opacity: 0.8; font-size: 0.95rem;
}

/* =========  RESPONSIVE  ========= */
@media (max-width: 768px) {
  .topbar { padding: 0.5rem 0.75rem; }
  .brand span { font-size: 0.9rem; }
  .nav a { margin-left: 0.25rem; padding: 0.3rem 0.45rem; font-size: 0.85rem; }

  .hero { flex-direction: column; text-align: center; padding: 2rem 1rem; }
  .text-content h1 { font-size: 1.8rem; }
  .text-content p { font-size: 1rem; }
  .logo-container img { width: 200px; }

  .cards, .grid { grid-template-columns: 1fr; gap: 1rem; }
  .card img { height: 160px; }
  .card h3 { font-size: 1.15rem; }
  .card p { font-size: 0.9rem; }
}
