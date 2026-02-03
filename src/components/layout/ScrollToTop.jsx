// src/layout/ScrollToTop.jsx
// --------------------------------------------------
// ScrollToTop (React Router)
// --------------------------------------------------
// En una SPA (React Router), cambiar de ruta NO reinicia el scroll,
// porque no hay recarga real de la página.
// Este componente detecta cambios de URL (pathname)
// y hace scroll al inicio automáticamente.
// --------------------------------------------------

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    // pathname cambia cuando navegas entre rutas: /, /servicios, /contacto, etc.
    const { pathname } = useLocation();

    useEffect(() => {
        // "auto" = inmediato (recomendado para UX/consistencia)
        // Si quieres estilo más "premium", cambia a behavior: 'smooth'
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [pathname]);

    // No renderiza nada, solo ejecuta el efecto.
    return null;
}
