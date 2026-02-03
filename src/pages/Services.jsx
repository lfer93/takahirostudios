// src/pages/Services.jsx
// ==================================================
// PÁGINA: SERVICIOS — Takahiro Studios
// ==================================================
// Objetivo:
// - Explicar qué vendemos (claridad = confianza)
// - Mostrar “entregables” concretos (reduce dudas)
// - Guiar a contacto con CTA
//
// Estructura:
// 1) Hero (mensaje + CTA)
// 2) Grid de servicios (cards)
// 3) Qué incluye (entregables)
// 4) Proceso resumido
// 5) CTA final
// ==================================================

import { Box, Container, Typography, Grid, Stack, Button, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

// Íconos para servicios (Material Icons)
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import BrushRoundedIcon from '@mui/icons-material/BrushRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';

// Componente reutilizable de tarjeta
import ServiceCard from '../components/Services/ServiceCard.jsx';

import Packages from '../components/Services/Packages.jsx';
import AddOns from '../components/Services/AddOns.jsx';
// --------------------------------------------------
// Animaciones
// --------------------------------------------------
const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariant = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
};

// --------------------------------------------------
// Data: lista de servicios (EDITABLE)
// --------------------------------------------------
const services = [
    {
        icon: <ViewQuiltRoundedIcon />,
        title: 'Landing Page',
        description:
            'Una sola página con estructura clara, pensada para convertir visitas en mensajes o ventas.',
        bullets: ['Copy enfocado a conversión', 'CTA claro', 'Diseño premium', 'Responsive', 'SEO base'],
    },
    {
        icon: <LanguageRoundedIcon />,
        title: 'Sitio Multipágina',
        description:
            'Una experiencia más completa: varias secciones/páginas para contar tu historia y vender mejor.',
        bullets: ['Arquitectura de información', 'Navegación clara', 'Animaciones suaves', 'Performance'],
    },
    {
        icon: <BusinessRoundedIcon />,
        title: 'Web Corporativa',
        description:
            'Ideal para empresas: credibilidad, claridad de servicios, confianza y captación de prospectos.',
        bullets: ['Look profesional', 'Secciones por servicio', 'Casos/portafolio', 'Formulario con leads'],
    },
    {
        icon: <CampaignRoundedIcon />,
        title: 'Marketing Digital',
        description:
            'Estrategias para crecer y generar clientes en redes: contenido, pauta y optimización.',
        bullets: ['Calendario de contenido', 'Campañas Meta Ads', 'Estrategia de crecimiento', 'Reportes'],
    },
    {
        icon: <BrushRoundedIcon />,
        title: 'Branding & Identidad',
        description:
            'Construimos una identidad visual consistente: logo, sistema, estilo y lineamientos.',
        bullets: ['Logo + variantes', 'Paleta + tipografías', 'Guía de uso', 'Plantillas'],
    },
    {
        icon: <InsightsRoundedIcon />,
        title: 'Estrategia para Redes',
        description:
            'Definimos qué publicar, cómo y por qué: mensaje, narrativa, estética y objetivos.',
        bullets: ['Pilares de contenido', 'Tono de marca', 'Formatos (reels/carruseles)', 'KPIs'],
    },
];

// --------------------------------------------------
// Entregables (Qué incluye)
// --------------------------------------------------
const deliverables = [
    {
        title: 'Diseño & UI',
        items: ['Diseño premium', 'Sistema visual consistente', 'Responsive', 'Componentes reutilizables'],
    },
    {
        title: 'Desarrollo',
        items: ['React + Vite', 'Performance', 'SEO base', 'Animaciones', 'Código limpio'],
    },
    {
        title: 'Marketing',
        items: ['Estrategia', 'Copy persuasivo', 'Estructura enfocada a leads', 'Medición (básica)'],
    },
];

function Services() {
    return (
        <Box component="section" sx={{ py: { xs: 7, md: 10 } }}>
            <Container maxWidth="lg">
                {/* ================================================== */}
                {/* 1) HERO */}
                {/* ================================================== */}
                <motion.div initial="hidden" animate="visible" variants={containerVariant}>
                    <motion.div variants={itemVariant}>
                        <Typography
                            variant="overline"
                            sx={{ letterSpacing: '0.12em', color: 'primary.main', fontWeight: 700 }}
                        >
                            Servicios
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemVariant}>
                        <Typography
                            variant="h2"
                            sx={{
                                mt: 1,
                                fontWeight: 950,
                                fontSize: { xs: '2.1rem', md: '3rem' },
                                lineHeight: 1.1,
                            }}
                        >
                            Construimos presencia digital premium que convierte.
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemVariant}>
                        <Typography sx={{ mt: 2, color: 'text.secondary', maxWidth: 900 }}>
                            No solo hacemos páginas bonitas. Diseñamos experiencias digitales que comunican,
                            generan confianza y atraen clientes.
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemVariant}>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
                            <Button
                                variant="contained"
                                size="large"
                                component={RouterLink}
                                to="/contacto"
                                sx={{ fontWeight: 800, px: 3.5, py: 1.2 }}
                            >
                                Hablemos de tu idea
                            </Button>

                            <Button
                                variant="outlined"
                                size="large"
                                component={RouterLink}
                                to="/portafolio"
                                sx={{
                                    fontWeight: 700,
                                    borderColor: 'rgba(255,255,255,0.25)',
                                    '&:hover': { borderColor: 'primary.main', backgroundColor: 'rgba(255,255,255,0.03)' },
                                }}
                            >
                                Ver portafolio
                            </Button>
                        </Stack>
                    </motion.div>
                </motion.div>

                {/* ================================================== */}
                {/* 2) GRID DE SERVICIOS */}
                {/* ================================================== */}
                <Box sx={{ mt: { xs: 5, md: 7 } }}>
                    <Grid container spacing={{ xs: 2, md: 3 }}>
                        {services.map((s) => (
                            <Grid key={s.title} size={{ xs: 12, md: 4 }}>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.25 }}
                                    variants={itemVariant}
                                >
                                    <ServiceCard {...s} />
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                {/* ================================================== */}
                {/* 2.5) Paquetes */}
                {/* ================================================== */}
                        <Packages />
                        <AddOns />

                {/* ================================================== */}
                {/* 3) QUÉ INCLUYE (ENTREGABLES) */}
                {/* ================================================== */}
                <Box sx={{ mt: { xs: 6, md: 9 } }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={containerVariant}
                    >
                        <motion.div variants={itemVariant}>
                            <Typography
                                variant="h4"
                                sx={{ fontWeight: 950, fontSize: { xs: '1.7rem', md: '2.1rem' } }}
                            >
                                ¿Qué incluye trabajar con Takahiro?
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariant}>
                            <Typography sx={{ mt: 1.5, color: 'text.secondary', maxWidth: 900 }}>
                                Para evitar dudas, esto es lo que normalmente entregamos en nuestros proyectos.
                                (Se ajusta según alcance y presupuesto.)
                            </Typography>
                        </motion.div>

                        <Box sx={{ mt: 3.5 }}>
                            <Grid container spacing={{ xs: 2, md: 3 }}>
                                {deliverables.map((d) => (
                                    <Grid key={d.title} size={{ xs: 12, md: 4 }}>
                                        <motion.div variants={itemVariant}>
                                            <Box
                                                sx={{
                                                    p: { xs: 2.5, md: 3 },
                                                    borderRadius: 5,
                                                    border: '1px solid rgba(255,255,255,0.10)',
                                                    backgroundColor: 'rgba(255,255,255,0.03)',
                                                }}
                                            >
                                                <Typography variant="h6" sx={{ fontWeight: 900 }}>
                                                    {d.title}
                                                </Typography>

                                                <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.08)' }} />

                                                <Stack spacing={1}>
                                                    {d.items.map((it) => (
                                                        <Stack key={it} direction="row" spacing={1} alignItems="flex-start">
                                                            <Box
                                                                sx={{
                                                                    mt: '7px',
                                                                    width: 6,
                                                                    height: 6,
                                                                    borderRadius: 999,
                                                                    bgcolor: 'primary.main',
                                                                    flexShrink: 0,
                                                                }}
                                                            />
                                                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.82)' }}>
                                                                {it}
                                                            </Typography>
                                                        </Stack>
                                                    ))}
                                                </Stack>
                                            </Box>
                                        </motion.div>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </motion.div>
                </Box>

                {/* ================================================== */}
                {/* 4) CTA FINAL */}
                {/* ================================================== */}
                <Box sx={{ mt: { xs: 6, md: 9 } }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={itemVariant}
                    >
                        <Box
                            sx={{
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
                                alignItems={{ xs: 'flex-start', md: 'center' }}
                                justifyContent="space-between"
                            >
                                <Box>
                                    <Typography variant="h5" sx={{ fontWeight: 950, lineHeight: 1.1 }}>
                                        ¿Te ayudamos a construir tu próxima etapa digital?
                                    </Typography>
                                    <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                                        Escríbenos y te proponemos un plan claro según tu objetivo.
                                    </Typography>
                                </Box>

                                <Button
                                    variant="contained"
                                    size="large"
                                    component={RouterLink}
                                    to="/contacto"
                                    sx={{ fontWeight: 800, px: 3.5, py: 1.2 }}
                                >
                                    Hablemos de tu idea
                                </Button>
                            </Stack>
                        </Box>
                    </motion.div>
                </Box>
            </Container>
        </Box>
    );
}

export default Services;
