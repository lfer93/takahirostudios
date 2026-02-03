// src/components/layout/MainLayout.jsx
// --------------------------------------------------
// Layout global de la aplicación
// - Header
// - ScrollToTop (resetea scroll al cambiar ruta)
// - Outlet (páginas)
// - Footer
// --------------------------------------------------

import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import Header from './Header.jsx';
import Footer from '../Footer/Footer.jsx';
import ScrollToTop from './ScrollToTop.jsx';

function MainLayout() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* ✅ Se ejecuta en cada cambio de ruta */}
            <ScrollToTop />

            <Header />

            {/* main crece para empujar el footer hacia abajo */}
            <Box component="main" sx={{ flexGrow: 1 }}>
                <Outlet />
            </Box>

            <Footer />
        </Box>
    );
}

export default MainLayout;
