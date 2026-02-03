// src/components/Services/Packages.jsx
// ==================================================
// SECCIÓN: Paquetes (Web + Marketing)
// ==================================================
// Objetivo:
// - Mostrar paquetes agrupados por categoría
// - Cada paquete manda a /contacto con query params:
//   /contacto?package=Core&service=Sitio%20Multipágina&category=web
// - Así en Contact.jsx podemos precargar el servicio y el mensaje
// ==================================================

import { Box, Container, Typography, Grid, Stack, Button, Chip, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

// Iconos
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

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

// ==================================================
// DATA: Paquetes por Categoría
// ==================================================
// ✅ Nuevo: servicePrefill
// - Define qué valor irá al select "Servicio" en Contacto.
// - Debe coincidir con uno de los strings en serviceOptions de Contact.jsx
const packagesByCategory = [
    {
        categoryKey: 'web',
        categoryTitle: 'Paquetes Web',
        categorySubtitle: 'Elige la base correcta para iniciar o escalar online.',
        items: [
            {
                key: 'origin',
                name: 'Origin',
                tag: 'Inicio rápido',
                icon: <BoltRoundedIcon />,
                highlight: true,
                priceLabel: 'Cotización personalizada',
                subtitle: 'Landing premium enfocada a conversión.',
                bullets: [
                    'Diseño premium (1 página)',
                    'Hero + servicios + CTA',
                    'Responsive (mobile/tablet/desktop)',
                    'SEO base + performance',
                    'Formulario funcional',
                ],
                ctaText: 'Quiero Origin',
                // ✅ Esto preselecciona el servicio en Contacto
                servicePrefill: 'Landing Page',
            },
            {
                key: 'core',
                name: 'Core',
                tag: 'Completo',
                icon: <WorkspacePremiumRoundedIcon />,
                highlight: true,
                priceLabel: 'Cotización personalizada',
                subtitle: 'Multipágina para marcas que quieren más contenido.',
                bullets: [
                    'Sitio multipágina (Inicio, Servicios, Contacto)',
                    'Sección de portafolio',
                    'Animaciones suaves (premium)',
                    'Copy enfocado a leads',
                    'Integración de formularios',
                    'Estructura escalable',
                ],
                ctaText: 'Quiero Core',
                servicePrefill: 'Sitio Multipágina',
            },
        ],
    },
    {
        categoryKey: 'marketing',
        categoryTitle: 'Paquetes Marketing & Redes',
        categorySubtitle: 'Para Instagram y Facebook: contenido constante, estrategia y crecimiento real.',
        items: [
            {
                key: 'pulse',
                name: 'Pulse',
                tag: 'Entrada',
                icon: <CampaignRoundedIcon />,
                highlight: true,
                priceLabel: 'Mensual (cotización)',
                subtitle: 'Contenido organizado + presencia profesional.',
                bullets: [
                    'IG + FB',
                    '8 posts/mes (2/sem)',
                    '8–12 stories/mes',
                    'Calendario mensual',
                    'Copy + hashtags base',
                    'Reporte básico mensual',
                ],
                ctaText: 'Quiero Pulse',
                // ✅ Para marketing usamos un servicio general
                servicePrefill: 'Marketing Digital',
            },
            {
                key: 'flow',
                name: 'Flow',
                tag: 'Crecimiento',
                icon: <TrendingUpRoundedIcon />,
                highlight: true,
                priceLabel: 'Mensual (cotización)',
                subtitle: 'Más contenido, reels y community management.',
                bullets: [
                    'IG + FB',
                    '12 posts/mes (3/sem)',
                    '16–24 stories/mes',
                    '1–2 reels/mes',
                    'Community management (3–5 días/sem)',
                    'Reporte + recomendaciones',
                ],
                ctaText: 'Quiero Flow',
                servicePrefill: 'Marketing Digital',
            },
            {
                key: 'amplify',
                name: 'Amplify',
                tag: 'Performance',
                icon: <EmojiEventsRoundedIcon />,
                highlight: true,
                priceLabel: 'Mensual (cotización)',
                subtitle: 'Contenido + estrategia + optimización mensual.',
                bullets: [
                    'IG + FB',
                    '16 posts/mes (4/sem)',
                    '24+ stories/mes',
                    '4 reels/mes',
                    'Community (5–6 días/sem)',
                    'Reporte pro + insights',
                    'Optimización continua',
                    'Ads como add-on opcional',
                ],
                ctaText: 'Quiero Amplify',
                servicePrefill: 'Marketing Digital',
            },
        ],
    },
];

// ==================================================
// Helper: construir la URL a Contacto con query params
// ==================================================
// - package: nombre del paquete (Core, Origin, Flow...)
// - service: para preseleccionar el select
// - category: web/marketing (por si quieres tracking o condicionales futuros)
function buildContactUrl({ pkgName, servicePrefill, categoryKey }) {
    const params = new URLSearchParams();

    // ✅ Se usan encode automáticamente al construir el querystring
    params.set('package', pkgName);

    if (servicePrefill) {
        params.set('service', servicePrefill);
    }

    // Esto es opcional, pero útil para analytics o lógica futura
    if (categoryKey) {
        params.set('category', categoryKey);
    }

    return `/contacto?${params.toString()}`;
}

// ==================================================
// COMPONENTE: PackageCard
// ==================================================
function PackageCard({ pkg, categoryKey }) {
    // ✅ URL final al formulario con los datos del paquete
    const contactUrl = buildContactUrl({
        pkgName: pkg.name,
        servicePrefill: pkg.servicePrefill,
        categoryKey,
    });

    return (
        <Box
            sx={{
                // Para que la tarjeta pueda contener el glow absolute
                position: 'relative',
                overflow: 'hidden',

                height: '100%',
                p: { xs: 2.5, md: 3 },
                borderRadius: 5,
                border: pkg.highlight ? '1px solid rgba(229,57,53,0.45)' : '1px solid rgba(255,255,255,0.10)',
                backgroundColor: pkg.highlight ? 'rgba(229,57,53,0.07)' : 'rgba(255,255,255,0.03)',
                boxShadow: pkg.highlight
                    ? '0 24px 80px rgba(229,57,53,0.12)'
                    : '0 18px 60px rgba(0,0,0,0.25)',
            }}
        >
            {/* Glow decorativo */}
            {/* 
        ✅ CORRECCIÓN:
        inset solo funciona con position: absolute/fixed.
        Lo ponemos como absolute para que sea un fondo decorativo real.
      */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: -90,
                    background: 'radial-gradient(circle at top left, rgba(229,57,53,0.18), transparent 55%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Cabecera: etiqueta + ícono */}
            {/* position: relative para que esté arriba del glow */}
            <Stack direction="row" justifyContent="space-between" sx={{ position: 'relative' }}>
                <Chip
                    label={pkg.tag}
                    sx={{
                        fontWeight: 800,
                        borderRadius: 999,
                        bgcolor: pkg.highlight ? 'rgba(229,57,53,0.18)' : 'rgba(255,255,255,0.06)',
                        color: pkg.highlight ? 'primary.main' : 'rgba(255,255,255,0.78)',
                    }}
                />

                {/* Ícono */}
                <Box
                    sx={{
                        width: 44,
                        height: 44,
                        display: 'grid',
                        placeItems: 'center',
                        backgroundColor: 'rgba(255,255,255,0.04)',
                        borderRadius: 3,
                        color: 'primary.main',
                    }}
                >
                    {pkg.icon}
                </Box>
            </Stack>

            {/* Nombre + etiqueta de precio */}
            <Typography variant="h5" sx={{ mt: 2, fontWeight: 950, position: 'relative' }}>
                {pkg.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.6, position: 'relative' }}>
                {pkg.priceLabel}
            </Typography>

            {/* Subtítulo */}
            <Typography variant="body2" sx={{ mt: 1.6, color: 'rgba(255,255,255,0.82)', position: 'relative' }}>
                {pkg.subtitle}
            </Typography>

            <Divider sx={{ my: 2.4, borderColor: 'rgba(255,255,255,0.08)', position: 'relative' }} />

            {/* Bullets */}
            <Stack spacing={1.1} sx={{ position: 'relative' }}>
                {pkg.bullets.map((b) => (
                    <Stack key={b} direction="row" spacing={1} alignItems="flex-start">
                        <CheckCircleRoundedIcon sx={{ fontSize: 18, color: 'primary.main' }} />
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.82)' }}>
                            {b}
                        </Typography>
                    </Stack>
                ))}
            </Stack>

            {/* CTA */}
            {/* 
        ✅ Ahora el botón manda a Contacto con:
        - package: nombre del paquete
        - service: preselección del servicio
        - category: web/marketing (opcional)
      */}
            <Button
                component={RouterLink}
                to={contactUrl}
                variant={pkg.highlight ? 'contained' : 'outlined'}
                size="large"
                sx={{ mt: 3, fontWeight: 900, position: 'relative' }}
            >
                {pkg.ctaText}
            </Button>
        </Box>
    );
}

// ==================================================
// EXPORT: Packages (por categoría)
// ==================================================
export default function Packages() {
    return (
        <Box component="section" sx={{ py: { xs: 7, md: 10 } }}>
            <Container maxWidth="lg">
                {/* Render por categorías */}
                <Stack spacing={{ xs: 5, md: 7 }}>
                    {packagesByCategory.map((cat) => (
                        <Box key={cat.categoryKey}>
                            {/* Título de la categoría */}
                            <Typography variant="h4" sx={{ fontWeight: 950 }}>
                                {cat.categoryTitle}
                            </Typography>
                            <Typography sx={{ mt: 1, color: 'text.secondary' }}>{cat.categorySubtitle}</Typography>

                            {/* 
                Grid de tarjetas (2 columnas en md)
                Nota: tu proyecto usa Grid con "size={{}}" (Grid v2),
                lo dejamos así para mantener consistencia con el resto del sitio.
              */}
                            <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mt: 2.5 }}>
                                {cat.items.map((pkg) => (
                                    <Grid key={pkg.key} size={{ xs: 12, md: 6 }}>
                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.25 }}
                                            variants={itemVariant}
                                        >
                                            {/* ✅ Pasamos categoryKey para armar la URL de contacto */}
                                            <PackageCard pkg={pkg} categoryKey={cat.categoryKey} />
                                        </motion.div>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
