// src/components/PortfolioPreview/PortfolioPreview.jsx
// --------------------------------------------------
// Portafolio Preview (Home)
// Objetivo:
// - Mostrar 3 proyectos “curados” para generar confianza rápida
// - Mantener look premium minimal-tech
// - Incluir CTA hacia /portafolio
// - Animaciones suaves al aparecer (Framer Motion)
// --------------------------------------------------

import { Box, Container, Typography, Grid, Card, CardContent, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

// --------------------------------------------------
// Variantes de animación (Framer Motion)
// --------------------------------------------------

// Animación general con stagger (aparece de a poco)
const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

// Animación para cada item (card/texto)
const itemVariant = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
};

// --------------------------------------------------
// Datos de proyectos (EDITA AQUÍ)
// - image: puedes usar imágenes reales más adelante
// - category: Web / Branding / Marketing, etc.
// --------------------------------------------------
const projects = [
    {
        title: 'Sitio Corporativo Industrial',
        category: 'Web Corporativa',
        description: 'Diseño premium + estructura clara para comunicar servicios y generar confianza.',
        // Placeholder: luego lo cambiamos por imagen real o assets
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
    },
    {
        title: 'Landing de Alta Conversión',
        category: 'Landing Page',
        description: 'Hero poderoso, CTA claro y secciones pensadas para convertir visitantes en leads.',
        image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80',
    },
    {
        title: 'Branding & Identidad Visual',
        category: 'Branding',
        description: 'Sistema visual consistente: logo, colores, tipografía y estilo para redes.',
        image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=1400&q=80',
    },
];

function PortfolioPreview() {
    return (
        <Box component="section" sx={{ py: { xs: 7, md: 10 } }}>
            <Container maxWidth="lg">
                {/* -------------------------------------------- */}
                {/* Encabezado + CTA hacia Portafolio completo */}
                {/* -------------------------------------------- */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={containerVariant}
                >
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={2}
                        alignItems={{ xs: 'flex-start', md: 'flex-end' }}
                        justifyContent="space-between"
                    >
                        <Box>
                            <motion.div variants={itemVariant}>
                                <Typography
                                    variant="overline"
                                    sx={{
                                        letterSpacing: '0.12em',
                                        color: 'primary.main',
                                        fontWeight: 700,
                                    }}
                                >
                                    Portafolio
                                </Typography>
                            </motion.div>

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
                                    Proyectos que se ven y se sienten premium
                                </Typography>
                            </motion.div>

                            <motion.div variants={itemVariant}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        mt: 2,
                                        color: 'text.secondary',
                                        maxWidth: 780,
                                    }}
                                >
                                    Aquí tienes una muestra curada de nuestro estilo. Si quieres ver más, visita el portafolio completo.
                                </Typography>
                            </motion.div>
                        </Box>

                        <motion.div variants={itemVariant}>
                            <Button
                                variant="outlined"
                                size="large"
                                component={RouterLink}
                                to="/portafolio"
                                sx={{
                                    fontWeight: 700,
                                    borderColor: 'rgba(255,255,255,0.25)',
                                    '&:hover': {
                                        borderColor: 'primary.main',
                                        backgroundColor: 'rgba(255,255,255,0.03)',
                                    },
                                }}
                            >
                                Ver portafolio completo
                            </Button>
                        </motion.div>
                    </Stack>
                </motion.div>

                {/* -------------------------------------------- */}
                {/* Grid de 3 proyectos */}
                {/* -------------------------------------------- */}
                <Box sx={{ mt: { xs: 4, md: 6 } }}>
                    <Grid container spacing={{ xs: 2, md: 3 }}>
                        {projects.map((project) => (
                            <Grid key={project.title} size={{ xs: 12, md: 4 }}>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.25 }}
                                    variants={itemVariant}
                                >
                                    <Card
                                        sx={{
                                            height: '100%',
                                            borderRadius: 4,
                                            overflow: 'hidden',
                                            backgroundColor: 'rgba(255,255,255,0.04)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            boxShadow: '0 18px 60px rgba(0,0,0,0.35)',
                                            transition: 'transform 220ms ease, border-color 220ms ease',
                                            '&:hover': {
                                                transform: 'translateY(-6px)',
                                                borderColor: 'rgba(229,57,53,0.45)',
                                            },
                                        }}
                                    >
                                        {/* Imagen del proyecto */}
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                height: 220,
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={project.image}
                                                alt={project.title}
                                                loading="lazy"
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    display: 'block',
                                                    transform: 'scale(1.02)',
                                                }}
                                            />

                                            {/* Overlay sutil para look premium */}
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    inset: 0,
                                                    background:
                                                        'linear-gradient(135deg, rgba(229,57,53,0.10) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.70) 100%)',
                                                    pointerEvents: 'none',
                                                }}
                                            />

                                            {/* Categoría (badge) */}
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    left: 14,
                                                    top: 14,
                                                    px: 1.1,
                                                    py: 0.55,
                                                    borderRadius: 999,
                                                    backgroundColor: 'rgba(0,0,0,0.55)',
                                                    border: '1px solid rgba(255,255,255,0.12)',
                                                    backdropFilter: 'blur(8px)',
                                                    fontSize: '0.78rem',
                                                }}
                                            >
                                                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                                                    {project.category}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        {/* Contenido */}
                                        <CardContent sx={{ p: 3 }}>
                                            <Typography variant="h6" sx={{ fontWeight: 850, lineHeight: 1.15 }}>
                                                {project.title}
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    mt: 1.2,
                                                    color: 'text.secondary',
                                                    lineHeight: 1.6,
                                                }}
                                            >
                                                {project.description}
                                            </Typography>

                                            {/* CTA interno opcional (lo dejo “light” para no saturar) */}
                                            <Box sx={{ mt: 2.2 }}>
                                                <Typography
                                                    variant="caption"
                                                    sx={{
                                                        color: 'primary.main',
                                                        fontWeight: 700,
                                                        letterSpacing: '0.06em',
                                                    }}
                                                >
                                                    Ver caso → (próximamente)
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default PortfolioPreview;
