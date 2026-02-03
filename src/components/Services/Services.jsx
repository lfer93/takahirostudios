// src/components/Services/Services.jsx
// --------------------------------------------------
// Sección de Servicios de Takahiro Studios
// Objetivo:
// - Mostrar claramente qué servicios ofrecemos
// - Mantener un diseño premium y limpio
// - Usar animaciones suaves (Framer Motion)
// - Estructura escalable (fácil agregar/quitar servicios)
// --------------------------------------------------

// Importamos componentes base de Material UI
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    Stack,
} from '@mui/material';

// Framer Motion para animaciones
import { motion } from 'framer-motion';

// RouterLink para navegar al contacto
import { Link as RouterLink } from 'react-router-dom';

// Iconos de Material UI (visuales, refuerzan cada servicio)
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import WebRoundedIcon from '@mui/icons-material/WebRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import PaletteRoundedIcon from '@mui/icons-material/PaletteRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';


// --------------------------------------------------
// VARIANTES DE ANIMACIÓN (Framer Motion)
// --------------------------------------------------

// Contenedor general: sirve para hacer stagger (uno después del otro)
const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // cada hijo aparece con pequeño delay
        },
    },
};

// Cada item (card, texto, etc.)
const itemVariant = {
    hidden: { opacity: 0, y: 18 }, // inicia invisible y abajo
    visible: { opacity: 1, y: 0 }, // aparece subiendo suavemente
};


// --------------------------------------------------
// DATA DE SERVICIOS
// --------------------------------------------------
// Tener los servicios en un arreglo permite:
// - Reutilizar el mismo diseño
// - Escalar fácil
// - No repetir código
// - Mantener orden y claridad
const services = [
    {
        title: 'Landing Pages',
        description:
            'Páginas enfocadas en conversión: mensaje claro, CTA fuerte, velocidad y diseño premium.',
        icon: <LanguageRoundedIcon />,
        highlight: 'Ideal para campañas y lanzamientos',
    },
    {
        title: 'Sitios Multipágina',
        description:
            'Estructura completa para marcas y negocios: servicios, portafolio, contacto y contenido.',
        icon: <WebRoundedIcon />,
        highlight: 'Perfecto para posicionamiento',
    },
    {
        title: 'Web Corporativa',
        description:
            'Presencia institucional con enfoque profesional: confianza, claridad y credibilidad.',
        icon: <ApartmentRoundedIcon />,
        highlight: 'Para empresas y B2B',
    },
    {
        title: 'Marketing Digital',
        description:
            'Estrategias para crecer en redes: contenido, campañas, pauta y dirección creativa.',
        icon: <CampaignRoundedIcon />,
        highlight: 'Crece tu alcance y ventas',
    },
    {
        title: 'Branding & Identidad',
        description:
            'Logo, paleta, tipografía y sistema visual que haga tu marca memorable y consistente.',
        icon: <PaletteRoundedIcon />,
        highlight: 'Construye una marca sólida',
    },
    {
        title: 'Estrategia de Contenido',
        description:
            'Contenido con intención: mensajes, tono de marca, hooks y estructura para conectar.',
        icon: <InsightsRoundedIcon />,
        highlight: 'Conecta con emociones',
    },
];


// --------------------------------------------------
// COMPONENTE PRINCIPAL
// --------------------------------------------------
function Services() {
    return (
        // Sección completa
        <Box
            component="section"
            sx={{
                py: { xs: 7, md: 10 }, // padding vertical responsive
            }}
        >
            <Container maxWidth="lg">

                {/* -------------------------------------------- */}
                {/* ENCABEZADO DE LA SECCIÓN */}
                {/* -------------------------------------------- */}
                <motion.div
                    initial="hidden"
                    whileInView="visible" // se anima al entrar en viewport
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariant}
                >
                    {/* Título pequeño */}
                    <motion.div variants={itemVariant}>
                        <Typography
                            variant="overline"
                            sx={{
                                letterSpacing: '0.12em',
                                color: 'primary.main',
                                fontWeight: 700,
                            }}
                        >
                            Servicios
                        </Typography>
                    </motion.div>

                    {/* Título principal */}
                    <motion.div variants={itemVariant}>
                        <Typography
                            variant="h3"
                            sx={{
                                mt: 1,
                                fontWeight: 850,
                                fontSize: { xs: '1.8rem', md: '2.2rem' },
                                lineHeight: 1.15,
                            }}
                        >
                            Todo lo que necesitas para una presencia digital premium
                        </Typography>
                    </motion.div>

                    {/* Texto descriptivo */}
                    <motion.div variants={itemVariant}>
                        <Typography
                            variant="body1"
                            sx={{
                                mt: 2,
                                color: 'text.secondary',
                                maxWidth: 780,
                            }}
                        >
                            Diseñamos y construimos experiencias digitales con intención:
                            estética, estrategia y resultados.
                        </Typography>
                    </motion.div>
                </motion.div>


                {/* -------------------------------------------- */}
                {/* GRID DE SERVICIOS */}
                {/* -------------------------------------------- */}
                <Box sx={{ mt: { xs: 4, md: 6 } }}>
                    <Grid container spacing={{ xs: 2, md: 3 }}>
                        {services.map((service) => (
                            <Grid key={service.title} size={{ xs: 12, sm: 6, md: 4 }}>
                                {/* Animación por card */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.25 }}
                                    variants={itemVariant}
                                >
                                    {/* Card del servicio */}
                                    <Card
                                        sx={{
                                            height: '100%',
                                            borderRadius: 4,
                                            backgroundColor: 'rgba(255,255,255,0.04)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            boxShadow: '0 18px 60px rgba(0,0,0,0.35)',
                                            transition: 'transform 220ms ease, border-color 220ms ease',
                                            '&:hover': {
                                                transform: 'translateY(-6px)', // efecto hover
                                                borderColor: 'rgba(229,57,53,0.45)',
                                            },
                                        }}
                                    >
                                        <CardContent sx={{ p: 3 }}>

                                            {/* Icono */}
                                            <Box
                                                sx={{
                                                    width: 44,
                                                    height: 44,
                                                    borderRadius: 3,
                                                    display: 'grid',
                                                    placeItems: 'center',
                                                    mb: 2,
                                                    color: 'primary.main',
                                                    background: 'rgba(229,57,53,0.12)',
                                                    border: '1px solid rgba(229,57,53,0.22)',
                                                    '& svg': { fontSize: 24 },
                                                }}
                                            >
                                                {service.icon}
                                            </Box>

                                            {/* Título del servicio */}
                                            <Typography variant="h6" sx={{ fontWeight: 800 }}>
                                                {service.title}
                                            </Typography>

                                            {/* Descripción */}
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    mt: 1.2,
                                                    color: 'text.secondary',
                                                    lineHeight: 1.6,
                                                }}
                                            >
                                                {service.description}
                                            </Typography>

                                            {/* Etiqueta highlight */}
                                            <Box
                                                sx={{
                                                    mt: 2,
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: 1,
                                                    px: 1.25,
                                                    py: 0.6,
                                                    borderRadius: 999,
                                                    fontSize: '0.78rem',
                                                    backgroundColor: 'rgba(0,0,0,0.35)',
                                                    border: '1px solid rgba(255,255,255,0.10)',
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 7,
                                                        height: 7,
                                                        borderRadius: 999,
                                                        bgcolor: 'primary.main',
                                                    }}
                                                />
                                                <span>{service.highlight}</span>
                                            </Box>

                                        </CardContent>
                                    </Card>
                                </motion.div>
                                
                            </Grid>
                        ))}
                    </Grid>
                </Box>


                {/* -------------------------------------------- */}
                {/* CTA FINAL */}
                {/* -------------------------------------------- */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariant}
                >
                    <motion.div variants={itemVariant}>
                        <Box
                            sx={{
                                mt: { xs: 5, md: 7 },
                                p: { xs: 3, md: 4 },
                                borderRadius: 5,
                                border: '1px solid rgba(255,255,255,0.10)',
                                background:
                                    'linear-gradient(135deg, rgba(229,57,53,0.14) 0%, rgba(255,255,255,0.03) 40%, rgba(0,0,0,0.15) 100%)',
                            }}
                        >
                            <Stack
                                direction={{ xs: 'column', md: 'row' }}
                                spacing={2}
                                justifyContent="space-between"
                            >
                                <Box>
                                    <Typography variant="h5" sx={{ fontWeight: 850 }}>
                                        ¿Listo para construir algo que se vea y se sienta profesional?
                                    </Typography>
                                    <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                                        Cuéntanos tu idea y la convertimos en una experiencia digital premium.
                                    </Typography>
                                </Box>

                                <Button
                                    variant="contained"
                                    size="large"
                                    component={RouterLink}
                                    to="/contacto"
                                    sx={{ fontWeight: 700, px: 3.5 }}
                                >
                                    Hablemos de tu idea
                                </Button>
                            </Stack>
                        </Box>
                    </motion.div>
                </motion.div>

            </Container>
        </Box>
    );
}

export default Services;
