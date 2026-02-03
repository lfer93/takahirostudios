// src/components/Testimonials/Testimonials.jsx
// --------------------------------------------------
// Sección "Testimonios" (Home)
// Objetivo:
// - Aumentar confianza (prueba social)
// - Reforzar el estilo premium
// - Animaciones suaves (Framer Motion)
// - Estructura fácil de editar (arreglo de testimonios)
// --------------------------------------------------

import { Box, Container, Typography, Grid, Stack, Avatar, Rating, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

// --------------------------------------------------
// Animaciones (Framer Motion)
// --------------------------------------------------
const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

const itemVariant = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
};

// --------------------------------------------------
// Data (EDITABLE)
// Nota: usa placeholders por ahora.
// Cuando tengas testimonios reales:
// - Cambia name, role, company, quote y rating
// --------------------------------------------------
const testimonials = [
    {
        name: 'Cliente Empresarial',
        role: 'Gerencia · Servicios Industriales',
        company: 'Saltillo, Coah.',
        rating: 5,
        quote:
            'El sitio quedó muy profesional y rápido. Nos ayudaron a estructurar el mensaje, mejorar la imagen y captar más prospectos.',
    },
    {
        name: 'Emprendimiento Local',
        role: 'Dueño/a · Negocio',
        company: 'México',
        rating: 5,
        quote:
            'No solo hicieron la página: nos guiaron con el branding y el contenido. La gente entiende mejor lo que ofrecemos y nos contacta más.',
    },
    {
        name: 'Marca Personal',
        role: 'Creador/a · Contenido',
        company: 'Online',
        rating: 5,
        quote:
            'El diseño se siente premium. Además el proceso fue claro y rápido: siempre supe qué seguía y qué necesitaban de mi parte.',
    },
];

function Testimonials() {
    return (
        <Box component="section" sx={{ py: { xs: 7, md: 10 } }}>
            <Container maxWidth="lg">

                {/* -------------------------------------------- */}
                {/* Encabezado de la sección */}
                {/* -------------------------------------------- */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={containerVariant}
                >
                    <motion.div variants={itemVariant}>
                        <Typography
                            variant="overline"
                            sx={{
                                letterSpacing: '0.12em',
                                color: 'primary.main',
                                fontWeight: 700,
                            }}
                        >
                            Testimonios
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
                            Confianza construida con resultados
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemVariant}>
                        <Typography
                            variant="body1"
                            sx={{
                                mt: 2,
                                color: 'text.secondary',
                                maxWidth: 820,
                            }}
                        >
                            Esto es lo que nuestros clientes suelen valorar: claridad, diseño y acompañamiento real.
                        </Typography>
                    </motion.div>
                </motion.div>

                {/* -------------------------------------------- */}
                {/* Grid de testimonios */}
                {/* -------------------------------------------- */}
                <Box sx={{ mt: { xs: 4, md: 6 } }}>
                    <Grid container spacing={{ xs: 2, md: 3 }}>
                        {testimonials.map((t) => (
                            <Grid key={t.quote} size={{ xs: 12, md: 4 }}>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.25 }}
                                    variants={itemVariant}
                                >
                                    {/* Tarjeta testimonial */}
                                    <Box
                                        sx={{
                                            height: '100%',
                                            p: { xs: 2.5, md: 3 },
                                            borderRadius: 5,
                                            border: '1px solid rgba(255,255,255,0.10)',
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                            boxShadow: '0 18px 60px rgba(0,0,0,0.25)',
                                            position: 'relative',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {/* Glow decorativo sutil */}
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                inset: -80,
                                                background:
                                                    'radial-gradient(circle at top left, rgba(229,57,53,0.16), transparent 55%)',
                                                pointerEvents: 'none',
                                            }}
                                        />

                                        {/* Header: avatar + datos del cliente */}
                                        <Stack direction="row" spacing={2} alignItems="center" sx={{ position: 'relative' }}>
                                            {/* Avatar: placeholder (luego puedes poner fotos reales) */}
                                            <Avatar
                                                sx={{
                                                    width: 44,
                                                    height: 44,
                                                    bgcolor: 'rgba(229,57,53,0.18)',
                                                    color: 'primary.main',
                                                    border: '1px solid rgba(229,57,53,0.25)',
                                                    fontWeight: 900,
                                                }}
                                            >
                                                {t.name[0]}
                                            </Avatar>

                                            <Box>
                                                <Typography variant="subtitle1" sx={{ fontWeight: 850, lineHeight: 1.1 }}>
                                                    {t.name}
                                                </Typography>
                                                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                                    {t.role} · {t.company}
                                                </Typography>
                                            </Box>
                                        </Stack>

                                        {/* Rating */}
                                        <Box sx={{ mt: 1.5, position: 'relative' }}>
                                            <Rating value={t.rating} readOnly size="small" />
                                        </Box>

                                        {/* Quote */}
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                mt: 1.7,
                                                color: 'text.secondary',
                                                lineHeight: 1.7,
                                                position: 'relative',
                                            }}
                                        >
                                            “{t.quote}”
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* -------------------------------------------- */}
                {/* CTA final */}
                {/* -------------------------------------------- */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
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
                                alignItems={{ xs: 'flex-start', md: 'center' }}
                                justifyContent="space-between"
                            >
                                <Box>
                                    <Typography variant="h5" sx={{ fontWeight: 900, lineHeight: 1.1 }}>
                                        Hagamos que tu marca se vea y se sienta profesional
                                    </Typography>
                                    <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                                        Si ya tienes una idea, nosotros la convertimos en una experiencia digital premium.
                                    </Typography>
                                </Box>

                                <Button
                                    variant="contained"
                                    size="large"
                                    component={RouterLink}
                                    to="/contacto"
                                    sx={{ fontWeight: 700, px: 3.5, py: 1.2 }}
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

export default Testimonials;
