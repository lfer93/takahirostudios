// src/pages/About.jsx
// ==================================================
// PÁGINA: NOSOTROS — Takahiro Studios
// ==================================================
// Objetivo:
// - Presentar propósito + filosofía + proceso (confianza)
// - Mostrar principios (valores) y capacidades (qué hacemos)
// - Terminar con CTA fuerte para llevar a Contacto
//
// Tech:
// - React + MUI (Box/Container/Typography/Chip/Button/Card)
// - Framer Motion (animaciones suaves premium)
// - React Router (CTAs a /contacto, /portafolio, /servicios)
//
// Estilo visual:
// - Minimal tech premium (rojo/negro/blanco)
// - Glow sutil y cards con border/transparencias
// ==================================================

import { Box, Container, Typography, Stack, Button, Card, CardContent, Divider, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

// ==================================================
// Animaciones (stagger + items)
// ==================================================
// containerVariant: controla animación en cascada (staggerChildren)
const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

// itemVariant: cada bloque sube un poco y aparece
const itemVariant = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
};

// ==================================================
// Data (para mantener el código limpio y escalable)
// ==================================================
// Principios (valores) — 4 cards
const principles = [
    {
        title: 'Claridad antes que ruido',
        text: 'Preferimos decirte exactamente qué necesitas (y qué no). Menos promesas vacías, más decisiones con sentido.',
        tag: 'Estrategia',
    },
    {
        title: 'Diseño con intención',
        text: 'Cada color, tipografía y animación tiene un propósito: comunicar, guiar y convertir.',
        tag: 'Diseño',
    },
    {
        title: 'Crecimiento real',
        text: 'No vendemos humo ni fórmulas mágicas. Construimos bases sólidas que permiten escalar con el tiempo.',
        tag: 'Resultados',
    },
    {
        title: 'Relación, no solo proyecto',
        text: 'Nos involucramos en lo que construimos. Nos importa el resultado, no solo la entrega.',
        tag: 'Acompañamiento',
    },
];

// Proceso — 4 pasos
const processSteps = [
    {
        step: '01',
        title: 'Descubrimiento',
        text: 'Escuchamos tu idea, tus objetivos y el contexto real de tu negocio. Aquí nace la claridad.',
    },
    {
        step: '02',
        title: 'Estructura y propuesta',
        text: 'Definimos la estrategia, el mensaje, la estructura del sitio o contenido y el alcance del proyecto.',
    },
    {
        step: '03',
        title: 'Diseño y desarrollo',
        text: 'Construimos con intención: diseño premium, desarrollo sólido y experiencia de usuario cuidada.',
    },
    {
        step: '04',
        title: 'Lanzamiento y crecimiento',
        text: 'Publicamos, optimizamos y te acompañamos para que el proyecto siga creciendo (marketing, add-ons, mejoras).',
    },
];

// Capacidades — 3 bloques
const capabilities = [
    {
        title: 'Web & Desarrollo',
        text: 'Landing pages, sitios multipágina y experiencias web pensadas para conversión, velocidad y escalabilidad.',
        chips: ['Landing', 'Multipágina', 'Corporativa', 'UX/UI', 'SEO base'],
        // Para CTA contextual: manda al contacto con service preseleccionado
        contactQuery: '/contacto?service=Sitio%20Multip%C3%A1gina',
    },
    {
        title: 'Marketing Digital',
        text: 'Estrategias para redes sociales, contenido, community management y campañas como complemento de crecimiento.',
        chips: ['IG + FB', 'Contenido', 'Community', 'Reporting', 'Ads (add-on)'],
        contactQuery: '/contacto?service=Marketing%20Digital',
    },
    {
        title: 'Branding & Identidad',
        text: 'Construcción de identidad visual coherente, profesional y alineada a la esencia de tu marca.',
        chips: ['Logo', 'Sistema visual', 'Templates', 'Guía rápida'],
        contactQuery: '/contacto?service=Branding%20e%20Identidad',
    },
];

// Perfil ideal (para quién es)
const forWho = [
    'Quieren crecer sin perder autenticidad',
    'Buscan verse profesionales y generar confianza',
    'Prefieren calidad y claridad antes que volumen',
    'Entienden que una buena base digital es una inversión, no un gasto',
];

export default function About() {
    return (
        <Box component="section" sx={{ py: { xs: 7, md: 10 } }}>
            {/* Container centra y limita el ancho para look premium */}
            <Container maxWidth="lg">
                {/* motion.div principal con stagger (animación en cascada) */}
                <motion.div initial="hidden" animate="visible" variants={containerVariant}>
                    {/* ================================================== */}
                    {/* 1) HERO */}
                    {/* ================================================== */}
                    <Box
                        sx={{
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: { xs: 4, md: 6 },
                            border: '1px solid rgba(255,255,255,0.10)',
                            background:
                                'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.18) 100%)',
                            boxShadow: '0 30px 90px rgba(0,0,0,0.35)',
                            p: { xs: 3, md: 5 },
                        }}
                    >
                        {/* Glow decorativo (visual tech) */}
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: -120,
                                background:
                                    'radial-gradient(circle at 20% 10%, rgba(229,57,53,0.28), transparent 55%)',
                                pointerEvents: 'none',
                            }}
                        />

                        <motion.div variants={itemVariant}>
                            <Typography
                                variant="overline"
                                sx={{ color: 'primary.main', fontWeight: 900, letterSpacing: '0.12em', position: 'relative' }}
                            >
                                Nosotros
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariant}>
                            <Typography
                                variant="h3"
                                sx={{
                                    mt: 1,
                                    fontWeight: 950,
                                    lineHeight: 1.05,
                                    position: 'relative',
                                    fontSize: { xs: '2.0rem', md: '2.7rem' },
                                }}
                            >
                                Ayudamos a personas a hacer crecer ideas que importan.
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariant}>
                            <Typography sx={{ mt: 2, color: 'text.secondary', maxWidth: 900, position: 'relative' }}>
                                Diseño, desarrollo web y marketing digital enfocados en claridad, intención y crecimiento real.
                            </Typography>
                        </motion.div>

                        {/* CTAs del hero */}
                        <motion.div variants={itemVariant}>
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: { xs: 3, md: 4 }, position: 'relative' }}>
                                <Button
                                    component={RouterLink}
                                    to="/contacto"
                                    variant="contained"
                                    size="large"
                                    sx={{ fontWeight: 900, px: 3.5, py: 1.2 }}
                                >
                                    Hablemos de tu idea
                                </Button>

                                <Button
                                    component={RouterLink}
                                    to="/portafolio"
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        fontWeight: 800,
                                        borderColor: 'rgba(255,255,255,0.25)',
                                        '&:hover': { borderColor: 'primary.main', backgroundColor: 'rgba(255,255,255,0.03)' },
                                    }}
                                >
                                    Ver portafolio
                                </Button>
                            </Stack>
                        </motion.div>
                    </Box>

                    {/* ================================================== */}
                    {/* 2) FILOSOFÍA */}
                    {/* ================================================== */}
                    <Box sx={{ mt: { xs: 5, md: 7 } }}>
                        <motion.div variants={itemVariant}>
                            <Typography variant="h4" sx={{ fontWeight: 950 }}>
                                Más que sitios web, construimos bases para crecer.
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariant}>
                            <Typography sx={{ mt: 2, color: 'text.secondary', maxWidth: 950, lineHeight: 1.8 }}>
                                Detrás de cada negocio hay una persona con una idea, un objetivo y una historia. Nuestro trabajo no empieza
                                con diseño ni termina con un sitio publicado. Empieza escuchando y continúa creando estructura, claridad y
                                dirección para que esa idea pueda crecer.
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariant}>
                            <Typography sx={{ mt: 1.5, color: 'text.secondary', maxWidth: 950, lineHeight: 1.8 }}>
                                Creemos que una buena presencia digital no solo se ve bien: funciona, conecta y genera confianza.
                            </Typography>
                        </motion.div>
                    </Box>

                    {/* ================================================== */}
                    {/* 3) PRINCIPIOS (valores) */}
                    {/* ================================================== */}
                    <Box sx={{ mt: { xs: 5, md: 7 } }}>
                        <motion.div variants={itemVariant}>
                            <Typography variant="h4" sx={{ fontWeight: 950 }}>
                                Nuestros principios
                            </Typography>
                        </motion.div>

                        {/* Usamos CSS Grid para evitar conflictos con MUI Grid */}
                        <Box
                            sx={{
                                mt: 3,
                                display: 'grid',
                                gap: 3,
                                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                            }}
                        >
                            {principles.map((p) => (
                                <motion.div key={p.title} variants={itemVariant}>
                                    <Card
                                        sx={{
                                            height: '100%',
                                            borderRadius: 5,
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.10)',
                                            boxShadow: '0 18px 60px rgba(0,0,0,0.25)',
                                            overflow: 'hidden',
                                            position: 'relative',
                                        }}
                                    >
                                        {/* Glow sutil en card */}
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                inset: -90,
                                                background: 'radial-gradient(circle at top left, rgba(229,57,53,0.14), transparent 55%)',
                                                pointerEvents: 'none',
                                            }}
                                        />

                                        <CardContent sx={{ p: { xs: 2.5, md: 3 }, position: 'relative' }}>
                                            <Chip
                                                label={p.tag}
                                                sx={{
                                                    fontWeight: 900,
                                                    borderRadius: 999,
                                                    bgcolor: 'rgba(229,57,53,0.16)',
                                                    border: '1px solid rgba(229,57,53,0.35)',
                                                    color: 'rgba(255,255,255,0.92)',
                                                }}
                                            />

                                            <Typography variant="h6" sx={{ mt: 1.5, fontWeight: 950 }}>
                                                {p.title}
                                            </Typography>

                                            <Typography sx={{ mt: 1, color: 'text.secondary', lineHeight: 1.75 }}>
                                                {p.text}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </Box>
                    </Box>

                    {/* ================================================== */}
                    {/* 4) PROCESO */}
                    {/* ================================================== */}
                    <Box sx={{ mt: { xs: 5, md: 7 } }}>
                        <motion.div variants={itemVariant}>
                            <Typography variant="h4" sx={{ fontWeight: 950 }}>
                                Así acompañamos tu idea
                            </Typography>
                        </motion.div>

                        <Box
                            sx={{
                                mt: 3,
                                display: 'grid',
                                gap: 3,
                                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                            }}
                        >
                            {processSteps.map((s) => (
                                <motion.div key={s.step} variants={itemVariant}>
                                    <Card
                                        sx={{
                                            height: '100%',
                                            borderRadius: 5,
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.10)',
                                            boxShadow: '0 18px 60px rgba(0,0,0,0.25)',
                                        }}
                                    >
                                        <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                                            {/* Número del paso (grande, tech) */}
                                            <Typography
                                                sx={{
                                                    fontWeight: 950,
                                                    letterSpacing: '0.10em',
                                                    color: 'rgba(229,57,53,0.95)',
                                                }}
                                            >
                                                {s.step}
                                            </Typography>

                                            <Typography variant="h6" sx={{ mt: 1, fontWeight: 950 }}>
                                                {s.title}
                                            </Typography>

                                            <Typography sx={{ mt: 1, color: 'text.secondary', lineHeight: 1.75 }}>
                                                {s.text}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </Box>
                    </Box>

                    {/* ================================================== */}
                    {/* 5) QUÉ HACEMOS (capacidades) */}
                    {/* ================================================== */}
                    <Box sx={{ mt: { xs: 5, md: 7 } }}>
                        <motion.div variants={itemVariant}>
                            <Typography variant="h4" sx={{ fontWeight: 950 }}>
                                Capacidades que se adaptan a tu idea
                            </Typography>
                        </motion.div>

                        <Box
                            sx={{
                                mt: 3,
                                display: 'grid',
                                gap: 3,
                                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                            }}
                        >
                            {capabilities.map((c) => (
                                <motion.div key={c.title} variants={itemVariant}>
                                    <Card
                                        sx={{
                                            height: '100%',
                                            borderRadius: 5,
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.10)',
                                            boxShadow: '0 18px 60px rgba(0,0,0,0.25)',
                                            overflow: 'hidden',
                                            position: 'relative',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                inset: -100,
                                                background: 'radial-gradient(circle at top left, rgba(229,57,53,0.12), transparent 55%)',
                                                pointerEvents: 'none',
                                            }}
                                        />

                                        <CardContent sx={{ p: { xs: 2.5, md: 3 }, position: 'relative' }}>
                                            <Typography variant="h6" sx={{ fontWeight: 950 }}>
                                                {c.title}
                                            </Typography>

                                            <Typography sx={{ mt: 1, color: 'text.secondary', lineHeight: 1.75 }}>
                                                {c.text}
                                            </Typography>

                                            {/* Chips de “qué incluye” */}
                                            <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
                                                {c.chips.map((t) => (
                                                    <Chip
                                                        key={t}
                                                        label={t}
                                                        sx={{
                                                            borderRadius: 999,
                                                            bgcolor: 'rgba(255,255,255,0.06)',
                                                            border: '1px solid rgba(255,255,255,0.10)',
                                                            color: 'rgba(255,255,255,0.86)',
                                                            fontWeight: 700,
                                                        }}
                                                    />
                                                ))}
                                            </Stack>

                                            <Divider sx={{ my: 2.4, borderColor: 'rgba(255,255,255,0.08)' }} />

                                            {/* CTA contextual: manda a Contacto con service preseleccionado */}
                                            <Button
                                                component={RouterLink}
                                                to={c.contactQuery}
                                                variant="outlined"
                                                sx={{
                                                    fontWeight: 900,
                                                    borderColor: 'rgba(255,255,255,0.25)',
                                                    '&:hover': { borderColor: 'primary.main', backgroundColor: 'rgba(255,255,255,0.03)' },
                                                }}
                                            >
                                                Quiero esto
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </Box>

                        {/* CTA para ver Servicios completos */}
                        <motion.div variants={itemVariant}>
                            <Button
                                component={RouterLink}
                                to="/servicios"
                                variant="text"
                                sx={{ mt: 2.5, fontWeight: 900 }}
                            >
                                Ver servicios completos →
                            </Button>
                        </motion.div>
                    </Box>

                    {/* ================================================== */}
                    {/* 6) PARA QUIÉN ES */}
                    {/* ================================================== */}
                    <Box sx={{ mt: { xs: 5, md: 7 } }}>
                        <motion.div variants={itemVariant}>
                            <Typography variant="h4" sx={{ fontWeight: 950 }}>
                                Para quién es Takahiro
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariant}>
                            <Typography sx={{ mt: 2, color: 'text.secondary', maxWidth: 950, lineHeight: 1.8 }}>
                                Trabajamos con personas y marcas que buscan crecer con intención. Si te identificas con esto, probablemente
                                podamos construir algo juntos.
                            </Typography>
                        </motion.div>

                        <Box
                            sx={{
                                mt: 3,
                                display: 'grid',
                                gap: 2,
                                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                            }}
                        >
                            {forWho.map((t) => (
                                <motion.div key={t} variants={itemVariant}>
                                    <Card
                                        sx={{
                                            borderRadius: 4,
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.10)',
                                            boxShadow: '0 14px 50px rgba(0,0,0,0.22)',
                                        }}
                                    >
                                        <CardContent sx={{ p: 2.6 }}>
                                            <Typography sx={{ fontWeight: 850, color: 'rgba(255,255,255,0.92)' }}>
                                                • {t}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </Box>
                    </Box>

                    {/* ================================================== */}
                    {/* 7) MANTRA (bloque corto) */}
                    {/* ================================================== */}
                    <Box sx={{ mt: { xs: 5, md: 7 } }}>
                        <motion.div variants={itemVariant}>
                            <Card
                                sx={{
                                    borderRadius: 6,
                                    overflow: 'hidden',
                                    position: 'relative',
                                    border: '1px solid rgba(255,255,255,0.10)',
                                    background:
                                        'linear-gradient(180deg, rgba(229,57,53,0.10) 0%, rgba(255,255,255,0.03) 100%)',
                                    boxShadow: '0 30px 90px rgba(0,0,0,0.35)',
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        inset: -120,
                                        background:
                                            'radial-gradient(circle at 20% 30%, rgba(229,57,53,0.22), transparent 60%)',
                                        pointerEvents: 'none',
                                    }}
                                />

                                <CardContent sx={{ p: { xs: 3, md: 4 }, position: 'relative' }}>
                                    <Typography variant="h5" sx={{ fontWeight: 950, lineHeight: 1.2 }}>
                                        Tu idea merece crecer con claridad, intención y diseño.
                                    </Typography>
                                    <Typography sx={{ mt: 1.3, color: 'text.secondary', maxWidth: 900 }}>
                                        Cuando una idea tiene estructura, el crecimiento deja de ser un sueño y se vuelve un camino.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Box>

                    {/* ================================================== */}
                    {/* 8) CTA FINAL */}
                    {/* ================================================== */}
                    <Box sx={{ mt: { xs: 5, md: 7 } }}>
                        <motion.div variants={itemVariant}>
                            <Card
                                sx={{
                                    borderRadius: 6,
                                    overflow: 'hidden',
                                    position: 'relative',
                                    border: '1px solid rgba(255,255,255,0.10)',
                                    background:
                                        'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.16) 100%)',
                                    boxShadow: '0 30px 90px rgba(0,0,0,0.35)',
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        inset: -140,
                                        background:
                                            'radial-gradient(circle at 80% 20%, rgba(229,57,53,0.25), transparent 60%)',
                                        pointerEvents: 'none',
                                    }}
                                />

                                <CardContent sx={{ p: { xs: 3, md: 5 }, position: 'relative' }}>
                                    <Typography variant="h4" sx={{ fontWeight: 950 }}>
                                        Tu idea puede verse tan bien como lo que vale.
                                    </Typography>

                                    <Typography sx={{ mt: 1.6, color: 'text.secondary', maxWidth: 900, lineHeight: 1.8 }}>
                                        Si tienes una idea, un negocio o un proyecto que quieres llevar al siguiente nivel, hablemos.
                                        Te diremos con honestidad cómo podemos ayudarte.
                                    </Typography>

                                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 3 }}>
                                        <Button
                                            component={RouterLink}
                                            to="/contacto"
                                            variant="contained"
                                            size="large"
                                            sx={{ fontWeight: 900, px: 3.5, py: 1.2 }}
                                        >
                                            Hablemos de tu idea
                                        </Button>

                                        <Button
                                            component={RouterLink}
                                            to="/servicios"
                                            variant="outlined"
                                            size="large"
                                            sx={{
                                                fontWeight: 800,
                                                borderColor: 'rgba(255,255,255,0.25)',
                                                '&:hover': { borderColor: 'primary.main', backgroundColor: 'rgba(255,255,255,0.03)' },
                                            }}
                                        >
                                            Ver servicios
                                        </Button>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}
