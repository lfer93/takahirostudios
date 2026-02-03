// src/components/Services/AddOns.jsx
// ==================================================
// SECCIÓN: Add-ons (Servicios adicionales)
// ==================================================
// Problema que resolvemos aquí:
// - Tu Grid de MUI se está comportando como "Grid v2" (según warnings),
//   y por eso ignora props como xs/md/item y apila todo.
// - Para evitar conflictos de versión, usamos CSS Grid con Box.
//   (Es 100% estable y no depende de MUI Grid.)
// ==================================================

import { Box, Container, Typography, Stack, Button, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

// Iconos
import AdsClickRoundedIcon from '@mui/icons-material/AdsClickRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';

// ---------------------------
// Animaciones (Framer Motion)
// ---------------------------
const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariant = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
};

// ---------------------------
// Data (sin precios)
// ---------------------------
const addOns = [
    {
        key: 'meta-ads',
        title: 'Meta Ads (Facebook/Instagram)',
        icon: <AdsClickRoundedIcon />,
        description:
            'Gestión de campañas para generar leads o ventas. Enfocado en pruebas, optimización y resultados medibles.',
        bullets: ['Estrategia + estructura de campañas', 'Creativos / copies base', 'Optimización mensual', 'Reporte'],
        note: '*El presupuesto de pauta lo paga el cliente.',
    },
    {
        key: 'google-ads',
        title: 'Google Ads',
        icon: <AdsClickRoundedIcon />,
        description:
            'Anuncios en búsqueda para capturar demanda real (gente que ya está buscando tu servicio/producto).',
        bullets: ['Campañas de búsqueda', 'Palabras clave + anuncios', 'Optimización', 'Reporte'],
        note: '*El presupuesto de pauta lo paga el cliente.',
    },
    {
        key: 'seo',
        title: 'SEO Avanzado',
        icon: <SearchRoundedIcon />,
        description: 'Mejoramos visibilidad en Google con estructura técnica, contenido y optimización continua.',
        bullets: ['SEO técnico', 'Optimización on-page', 'Estructura + contenido base', 'Mejoras por iteración'],
    },
    {
        key: 'maintenance',
        title: 'Mantenimiento Web',
        icon: <BuildRoundedIcon />,
        description: 'Cuidamos tu sitio para que esté rápido, seguro y actualizado. Ideal si quieres soporte continuo.',
        bullets: ['Ajustes menores', 'Soporte técnico', 'Mejoras de performance', 'Monitoreo básico'],
    },
    {
        key: 'hosting-domain',
        title: 'Hosting & Dominio (Asesoría + Setup)',
        icon: <PublicRoundedIcon />,
        description:
            'Te ayudamos a elegir y configurar dominio, hosting, SSL y despliegue. Para que todo quede bien desde el inicio.',
        bullets: ['Configuración de dominio', 'SSL', 'Deploy', 'Recomendación de proveedores'],
    },
];

// ==================================================
// COMPONENTE: AddOnCard
// - display:flex + flexDirection:column
// - flexGrow en contenido para alinear el botón abajo
// - width:100% para evitar “anchos raros”
// ==================================================
function AddOnCard({ item }) {
    return (
        <Box
            sx={{
                width: '100%', // ✅ clave para que todas tengan mismo ancho dentro de la celda del grid
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                p: { xs: 2.5, md: 3 },
                borderRadius: 5,
                border: '1px solid rgba(255,255,255,0.10)',
                backgroundColor: 'rgba(255,255,255,0.03)',
                boxShadow: '0 18px 60px rgba(0,0,0,0.25)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 220ms ease, border-color 220ms ease',
                '&:hover': {
                    transform: 'translateY(-6px)',
                    borderColor: 'rgba(229,57,53,0.45)',
                },
            }}
        >
            {/* Glow decorativo */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: -80,
                    background: 'radial-gradient(circle at top left, rgba(229,57,53,0.14), transparent 55%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Contenido (flexGrow empuja el botón hacia abajo) */}
            <Box sx={{ position: 'relative', flexGrow: 1 }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                    <Box
                        sx={{
                            width: 44,
                            height: 44,
                            borderRadius: 3,
                            display: 'grid',
                            placeItems: 'center',
                            color: 'primary.main',
                            background: 'rgba(229,57,53,0.12)',
                            border: '1px solid rgba(229,57,53,0.22)',
                            '& svg': { fontSize: 24 },
                        }}
                    >
                        {item.icon}
                    </Box>

                    <Typography variant="h6" sx={{ fontWeight: 900, lineHeight: 1.15 }}>
                        {item.title}
                    </Typography>
                </Stack>

                <Typography variant="body2" sx={{ mt: 1.2, color: 'text.secondary', lineHeight: 1.65 }}>
                    {item.description}
                </Typography>

                <Divider sx={{ my: 2.2, borderColor: 'rgba(255,255,255,0.08)' }} />

                <Stack spacing={1}>
                    {item.bullets.map((b) => (
                        <Stack key={b} direction="row" spacing={1} alignItems="flex-start">
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
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.6 }}>
                                {b}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>

                {item.note ? (
                    <Typography variant="caption" sx={{ mt: 1.2, display: 'block', color: 'text.secondary' }}>
                        {item.note}
                    </Typography>
                ) : null}
            </Box>

            {/* CTA (sin e-commerce) */}
            <Button
                component={RouterLink}
                to={`/contacto?addon=${encodeURIComponent(item.title)}`} // ✅ manda contexto al formulario
                variant="outlined"
                size="large"
                sx={{
                    mt: 2.6,
                    width: '100%',
                    fontWeight: 900,
                    borderColor: 'rgba(255,255,255,0.25)',
                    '&:hover': { borderColor: 'primary.main', backgroundColor: 'rgba(255,255,255,0.03)' },
                }}
            >
                Quiero este add-on
            </Button>
        </Box>
    );
}

// ==================================================
// EXPORT: AddOns (sección completa)
// ==================================================
export default function AddOns() {
    return (
        <Box component="section" sx={{ py: { xs: 7, md: 10 } }}>
            <Container maxWidth="lg">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={containerVariant}
                >
                    <motion.div variants={itemVariant}>
                        <Typography variant="overline" sx={{ letterSpacing: '0.12em', color: 'primary.main', fontWeight: 800 }}>
                            Add-ons
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemVariant}>
                        <Typography
                            variant="h3"
                            sx={{
                                mt: 1,
                                fontWeight: 950,
                                fontSize: { xs: '1.9rem', md: '2.3rem' },
                                lineHeight: 1.1,
                            }}
                        >
                            Complementa tu paquete con servicios adicionales
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemVariant}>
                        <Typography sx={{ mt: 2, color: 'text.secondary', maxWidth: 900 }}>
                            Estos servicios se agregan según tu objetivo. Te recomendamos solo lo necesario para lograr resultados
                            (sin inflar costos).
                        </Typography>
                    </motion.div>

                    {/* ==================================================
              LAYOUT: CSS GRID (NO MUI GRID)
              - xs: 1 columna
              - sm: 2 columnas
              - md+: 3 columnas
              Esto garantiza que SIEMPRE se vean “una al lado de otra”
              ================================================== */}
                    <Box sx={{ mt: { xs: 4, md: 6 } }}>
                        <Box
                            sx={{
                                display: 'grid',
                                gap: 3,
                                gridTemplateColumns: {
                                    xs: '1fr',
                                    sm: 'repeat(2, 1fr)',
                                    md: 'repeat(3, 1fr)',
                                },
                                alignItems: 'stretch',
                            }}
                        >
                            {addOns.map((item) => (
                                // ✅ Wrapper con width/height 100% para que no haya “anchos raros”
                                <motion.div
                                    key={item.key}
                                    variants={itemVariant}
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    <AddOnCard item={item} />
                                </motion.div>
                            ))}
                        </Box>
                    </Box>

                    {/* CTA general */}
                    <motion.div variants={itemVariant}>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: { xs: 4, md: 6 } }}>
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
                                Ver resultados
                            </Button>
                        </Stack>
                    </motion.div>
                </motion.div>
            </Container>
        </Box>
    );
}

