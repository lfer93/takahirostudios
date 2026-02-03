// src/App.jsx
// ==================================================
// APP ROUTES (con Layout global)
// ==================================================
// Usamos MainLayout para:
// - Header global
// - Footer global
// - ScrollToTop global
// - Outlet para renderizar páginas
// ==================================================

import { Routes, Route } from 'react-router-dom';

// ✅ Layout global
import MainLayout from './components/layout/MainLayout.jsx';

// Páginas
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <Routes>
      {/* Ruta "padre" que envuelve todas las páginas en el layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/portafolio" element={<Portfolio />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
