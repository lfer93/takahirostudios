// React hooks
import { useState } from 'react';
// Para saber en qué ruta estamos y marcar el link activo
import { Link as RouterLink, useLocation } from 'react-router-dom';

// Componentes de Material UI
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Box,
    Container,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
} from '@mui/material';

// Ícono del menú hamburguesa
import MenuIcon from '@mui/icons-material/Menu';

// -------------------------------
// Lista de enlaces de navegación
// -------------------------------
const navLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Servicios', path: '/servicios' },
    { label: 'Portafolio', path: '/portafolio' },
    { label: 'Nosotros', path: '/nosotros' },
    { label: 'Contacto', path: '/contacto' },
];

function Header() {
    // Estado para abrir/cerrar el menú lateral en móvil
    const [mobileOpen, setMobileOpen] = useState(false);

    // Hook que nos dice en qué ruta estamos actualmente
    const location = useLocation();

    // Alterna el Drawer
    const handleToggleDrawer = () => {
        setMobileOpen((prev) => !prev);
    };

    // Función para saber si un enlace es el actual
    const isActive = (path) => location.pathname === path;

    // -----------------------------------
    //   CONTENIDO DEL MENÚ EN MÓVIL
    // -----------------------------------
    const drawer = (
        <Box sx={{ width: 260, p: 2 }}>
            {/* Logo o nombre dentro del drawer */}
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                Takahiro Studios
            </Typography>

            {/* Lista de enlaces */}
            <List>
                {navLinks.map((item) => (
                    <ListItemButton
                        key={item.path}
                        component={RouterLink}   // convierte el botón en un enlace
                        to={item.path}           // ruta destino
                        selected={isActive(item.path)} // si coincide con la ruta actual, se marca activo
                        onClick={handleToggleDrawer}   // al dar clic cerramos el menú
                    >
                        <ListItemText primary={item.label} />
                    </ListItemButton>
                ))}
            </List>

            {/* CTA dentro del menú móvil */}
            <Box sx={{ mt: 2 }}>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    component={RouterLink}
                    to="/contacto"
                >
                    Agenda tu proyecto
                </Button>
            </Box>
        </Box>
    );

    // -------------------------
    //       HEADER DESKTOP
    // -------------------------
    return (
        <>
            {/* AppBar fija arriba, con estilos personalizados */}
            <AppBar
                position="sticky"
                elevation={0} // sin sombra para estilo minimal
                sx={{
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    background:
                        'linear-gradient(to right, rgba(5,5,9,0.95), rgba(11,11,15,0.98))',
                }}
            >
                <Container maxWidth="lg">
                    {/* Toolbar contiene el contenido del header */}
                    <Toolbar disableGutters sx={{ minHeight: 72 }}>

                        {/* LOGO / NOMBRE DEL SITIO */}
                        <Typography
                            variant="h6"
                            component={RouterLink}
                            to="/"
                            sx={{
                                mr: 4,
                                fontWeight: 800,
                                letterSpacing: '.12em',
                                textDecoration: 'none',
                                color: 'primary.main',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            TAKAHIRO
                            <Box
                                component="span"
                                sx={{
                                    ml: 1,
                                    fontWeight: 500,
                                    fontSize: '0.75rem',
                                    color: 'text.secondary',
                                }}
                            >
                                STUDIOS
                            </Box>
                        </Typography>

                        {/* ---------------------------------------
                NAVEGACIÓN EN ESCRITORIO (≥ 900px)
               --------------------------------------- */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' }, // oculto en móvil
                                gap: 2,
                            }}
                        >
                            {navLinks.map((item) => (
                                <Button
                                    key={item.path}
                                    component={RouterLink}
                                    to={item.path}
                                    size="small"
                                    sx={{
                                        // Enlace activo: rojo y más fuerte
                                        fontWeight: isActive(item.path) ? 700 : 500,
                                        color: isActive(item.path)
                                            ? 'primary.main'
                                            : 'text.secondary',

                                        // Hover
                                        '&:hover': {
                                            color: 'primary.main',
                                            backgroundColor: 'rgba(255,255,255,0.04)',
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>

                        {/* CTA en escritorio */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                variant="contained"
                                color="primary"
                                component={RouterLink}
                                to="/contacto"
                            >
                                Agenda tu proyecto
                            </Button>
                        </Box>

                        {/* ---------------------------------------
                MENÚ HAMBURGUESA (solo móvil)
               --------------------------------------- */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
                            <IconButton
                                color="inherit"
                                edge="end"
                                aria-label="menu"
                                onClick={handleToggleDrawer} // abre el Drawer
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* ---------------------------------------
        DRAWER: menú lateral para móvil
         --------------------------------------- */}
            <Drawer
                anchor="right"            // aparece desde la derecha
                open={mobileOpen}         // depende del estado
                onClose={handleToggleDrawer}
                PaperProps={{
                    sx: {
                        backgroundColor: 'background.paper',
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
}

export default Header;
