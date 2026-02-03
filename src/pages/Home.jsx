// src/pages/Home.jsx
// Hero “Agencia Ultra Premium” con:
// - Copy principal + CTA
// - Imagen lifestyle (MacBook)
// - Texto emocional en OVERLAY premium (siempre visible)
// - Animaciones suaves con Framer Motion
// - MUI Grid v2 (sin warnings): usa `size`

import { Link as RouterLink } from 'react-router-dom';
import { Container, Grid, Box, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';

// Imagen lifestyle (MacBook con escena creativa)
import heroMacbookLifestyle from '../assets/mockups/hero-macbook-lifestyle.png';
import Services from '../components/Services/Services.jsx'
import PortfolioPreview from '../components/PortfolioPreview/PortfolioPreview.jsx';
import Process from '../components/Process/Process.jsx';
import Testimonials from '../components/Testimonials/Testimonials.jsx';

// -----------------------------
// Animaciones Framer Motion
// -----------------------------
const textVariant = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
};

const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const imageVariant = {
    hidden: { opacity: 0, x: 22 },
    visible: { opacity: 1, x: 0 },
};

function Home() {
    return (
        <Box component="section" className="hero">
            {/* Fondo decorativo (si tienes home.scss, se aplican) */}
            <Box className="hero__background">
                <Box className="hero__circle" />
                <Box className="hero__circle--right" />
                <Box className="hero__grid-lines" />
            </Box>

            <Box className="hero__content">
                <Container maxWidth="lg">
                    <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
                        {/* ===================================================== */}
                        {/* 🟢 COLUMNA 1 – TEXTO (IZQUIERDA) */}
                        {/* ===================================================== */}
                        <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 1 } }}>
                            <motion.div initial="hidden" animate="visible" variants={containerVariant}>
                                {/* Eyebrow */}
                                <motion.div variants={textVariant}>
                                    <Box className="hero__eyebrow">
                                        <span className="hero__eyebrow-dot" />
                                        <span>Estudio creativo digital</span>
                                    </Box>
                                </motion.div>

                                {/* Título */}
                                <motion.div variants={textVariant}>
                                    <Typography
                                        variant="h2"
                                        sx={{
                                            mt: 2,
                                            fontSize: { xs: '2.1rem', md: '2.9rem' },
                                            lineHeight: 1.15,
                                            fontWeight: 800,
                                        }}
                                    >
                                        Sitios web y estrategias digitales diseñadas para hacer crecer tu marca.
                                    </Typography>
                                </motion.div>

                                {/* Subtítulo */}
                                <motion.div variants={textVariant}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mt: 2,
                                            color: 'text.secondary',
                                            maxWidth: 520,
                                        }}
                                    >
                                        En Takahiro Studios combinamos diseño, marketing y tecnología para crear
                                        experiencias digitales que conectan con tus clientes y generan resultados reales.
                                    </Typography>
                                </motion.div>

                                {/* Servicios */}
                                <motion.div variants={textVariant}>
                                    <Box sx={{ mt: 3 }} className="hero__services-badge">
                                        <span>Desarrollo Web</span>
                                        <span>•</span>
                                        <span>Marketing Digital</span>
                                        <span>•</span>
                                        <span>Branding e Identidad Visual</span>
                                    </Box>
                                </motion.div>

                                {/* CTAs */}
                                <motion.div variants={textVariant}>
                                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            component={RouterLink}
                                            to="/contacto"
                                            sx={{ fontWeight: 600, px: 3.5, py: 1.2 }}
                                        >
                                            Hablemos de tu idea
                                        </Button>

                                        <Button
                                            variant="outlined"
                                            size="large"
                                            component={RouterLink}
                                            to="/portafolio"
                                            sx={{
                                                fontWeight: 500,
                                                borderColor: 'rgba(255,255,255,0.30)',
                                                color: 'text.secondary',
                                                '&:hover': {
                                                    borderColor: 'primary.main',
                                                    color: 'primary.main',
                                                    backgroundColor: 'rgba(255,255,255,0.02)',
                                                },
                                            }}
                                        >
                                            Ver portafolio
                                        </Button>
                                    </Stack>
                                </motion.div>

                                {/* Micro-copy */}
                                <motion.div variants={textVariant}>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            mt: 3,
                                            display: 'block',
                                            color: 'text.secondary',
                                        }}
                                    >
                                        Diseño a medida · Estrategia clara · Acompañamiento en cada etapa de tu proyecto.
                                    </Typography>
                                </motion.div>
                            </motion.div>
                        </Grid>

                        {/* ===================================================== */}
                        {/* 🔵 COLUMNA 2 – IMAGEN (DERECHA) + OVERLAY PREMIUM */}
                        {/* ===================================================== */}
                        <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 2, md: 2 } }}>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={imageVariant}
                                transition={{ duration: 0.7, delay: 0.15 }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        borderRadius: '24px',
                                        overflow: 'hidden',
                                        border: '1px solid rgba(255,255,255,0.10)',
                                        boxShadow: '0 30px 90px rgba(0,0,0,0.70)',
                                    }}
                                >
                                    {/* Imagen */}
                                    <Box
                                        component="img"
                                        src={heroMacbookLifestyle}
                                        alt="MacBook mostrando un sitio web"
                                        loading="lazy"
                                        sx={{
                                            width: '100%',
                                            height: { xs: 320, md: 440 },
                                            objectFit: 'cover',
                                            display: 'block',
                                        }}
                                    />

                                    {/* Overlay para look premium */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            inset: 0,
                                            background:
                                                'linear-gradient(135deg, rgba(229,57,53,0.18) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.78) 100%)',
                                            pointerEvents: 'none',
                                        }}
                                    />

                                    {/* ✅ TEXTO EMOCIONAL EN OVERLAY (SIEMPRE VISIBLE) */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 14 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.35 }}
                                        style={{
                                            position: 'absolute',
                                            right: 16,
                                            top: 16,
                                            maxWidth: 340,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                p: 1.5,
                                                borderRadius: 3,
                                                backgroundColor: 'rgba(0,0,0,0.55)',
                                                border: '1px solid rgba(255,255,255,0.14)',
                                                backdropFilter: 'blur(10px)',
                                                textAlign: 'center',
                                            }}
                                        >
                                            <Typography
                                                variant="subtitle1"
                                                sx={{ fontWeight: 800, lineHeight: 1.2 }}
                                            >
                                                Transformamos ideas en experiencias digitales reales.
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                sx={{ mt: 1, color: 'text.secondary' }}
                                            >
                                                Diseñamos una presencia digital que se siente, se entiende y genera confianza
                                                desde el primer clic.
                                            </Typography>
                                        </Box>
                                    </motion.div>

                                    {/* Badge inferior (opcional, premium) */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            left: 16,
                                            bottom: 16,
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            px: 1.25,
                                            py: 0.75,
                                            borderRadius: 999,
                                            backgroundColor: 'rgba(0,0,0,0.55)',
                                            border: '1px solid rgba(255,255,255,0.12)',
                                            backdropFilter: 'blur(8px)',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 8,
                                                height: 8,
                                                borderRadius: 999,
                                                bgcolor: 'primary.main',
                                            }}
                                        />
                                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                                            Web + Branding + Marketing
                                        </Typography>
                                    </Box>
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Services />
            <Process />
            <PortfolioPreview />
            <Testimonials />
        </Box>

    );
}

export default Home;
