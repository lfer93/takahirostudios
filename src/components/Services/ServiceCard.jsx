// src/components/Services/ServiceCard.jsx
// ==================================================
// COMPONENTE: ServiceCard
// ==================================================
// ¿Por qué existe este componente?
// - Para NO repetir código en cada tarjeta
// - Para mantener un estilo consistente
// - Para que sea fácil agregar/quitar servicios
//
// Recibe props:
// - icon: componente de ícono (ej: <LanguageRoundedIcon />)
// - title: nombre del servicio
// - description: breve descripción
// - bullets: lista de puntos rápidos (3-5)
// ==================================================

import { Box, Typography, Stack } from '@mui/material';

function ServiceCard({ icon, title, description, bullets = [] }) {
    return (
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
                transition: 'transform 220ms ease, border-color 220ms ease',
                '&:hover': {
                    transform: 'translateY(-6px)',
                    borderColor: 'rgba(229,57,53,0.45)',
                },
            }}
        >
            {/* Glow decorativo sutil (look premium) */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: -90,
                    background:
                        'radial-gradient(circle at top left, rgba(229,57,53,0.16), transparent 55%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Header: ícono + título */}
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ position: 'relative' }}>
                <Box
                    sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 3,
                        display: 'grid',
                        placeItems: 'center',
                        backgroundColor: 'rgba(229,57,53,0.12)',
                        border: '1px solid rgba(229,57,53,0.22)',
                        color: 'primary.main',
                    }}
                >
                    {icon}
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 900, lineHeight: 1.1 }}>
                    {title}
                </Typography>
            </Stack>

            {/* Descripción */}
            <Typography
                variant="body2"
                sx={{ mt: 1.4, color: 'text.secondary', lineHeight: 1.7, position: 'relative' }}
            >
                {description}
            </Typography>

            {/* Bullets */}
            <Box sx={{ mt: 2.2, position: 'relative' }}>
                <Stack spacing={1}>
                    {bullets.slice(0, 6).map((b) => (
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
            </Box>
        </Box>
    );
}

export default ServiceCard;
