// src/components/Footer/Footer.jsx
// --------------------------------------------------
// Footer global (aparece en TODAS las páginas)
// Incluye:
// - CTA principal ("Hablemos de tu idea")
// - CTA secundario para redes sociales
// - Links básicos (Servicios / Portafolio / Contacto)
// - Estilo premium minimal-tech
// --------------------------------------------------

import { Box, Container, Typography, Stack, Button, Divider, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// Iconos redes (si no tienes @mui/icons-material, instala: npm i @mui/icons-material)
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language'; // sitio / web

function Footer() {
    const year = new Date().getFullYear();

    return (
        <Box component="footer" sx={{ mt: { xs: 6, md: 10 } }}>
            {/* Bloque CTA superior del footer */}
            <Box
                sx={{
                    py: { xs: 5, md: 7 },
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    background:
                        'linear-gradient(135deg, rgba(229,57,53,0.14) 0%, rgba(255,255,255,0.03) 40%, rgba(0,0,0,0.15) 100%)',
                }}
            >
                <Container maxWidth="lg">
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={2}
                        alignItems={{ xs: 'flex-start', md: 'center' }}
                        justifyContent="space-between"
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                sx={{ fontWeight: 900, lineHeight: 1.1 }}
                            >
                                ¿Listo para construir algo premium?
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{ mt: 1, color: 'text.secondary', maxWidth: 720 }}
                            >
                                Hagamos que tu marca se vea y se sienta profesional. Cuéntanos tu idea y te proponemos
                                un plan claro (web, branding o marketing).
                            </Typography>
                        </Box>

                        {/* CTA principal */}
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
                </Container>
            </Box>

            {/* Contenido principal del footer */}
            <Box sx={{ py: { xs: 4, md: 5 } }}>
                <Container maxWidth="lg">
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={3}
                        justifyContent="space-between"
                        alignItems={{ xs: 'flex-start', md: 'center' }}
                    >
                        {/* Marca / mini descripción */}
                        <Box>
                            <Typography sx={{ fontWeight: 900, letterSpacing: '0.02em' }}>
                                Takahiro Studios
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary', maxWidth: 520 }}>
                                Desarrollo web + marketing digital + branding. Experiencias digitales con intención, estética y resultados.
                            </Typography>
                        </Box>

                        {/* Links rápidos */}
                        <Stack direction="row" spacing={2} flexWrap="wrap">
                            <Button
                                component={RouterLink}
                                to="/servicios"
                                variant="text"
                                sx={{ color: 'text.secondary', fontWeight: 700 }}
                            >
                                Servicios
                            </Button>
                            <Button
                                component={RouterLink}
                                to="/portafolio"
                                variant="text"
                                sx={{ color: 'text.secondary', fontWeight: 700 }}
                            >
                                Portafolio
                            </Button>
                            <Button
                                component={RouterLink}
                                to="/contacto"
                                variant="text"
                                sx={{ color: 'text.secondary', fontWeight: 700 }}
                            >
                                Contacto
                            </Button>
                        </Stack>
                    </Stack>

                    <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.08)' }} />

                    {/* Redes + copyright */}
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={2}
                        alignItems={{ xs: 'flex-start', md: 'center' }}
                        justifyContent="space-between"
                    >
                        {/* CTA de redes */}
                        <Box>
                            <Typography variant="body2" sx={{ fontWeight: 800 }}>
                                Síguenos en redes
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                Tips de marketing, proyectos y diseño premium.
                            </Typography>

                            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                                {/* Importante: aquí pon tus URLs reales */}
                                <IconButton
                                    aria-label="Instagram"
                                    component="a"
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    sx={{
                                        border: '1px solid rgba(255,255,255,0.12)',
                                        backgroundColor: 'rgba(255,255,255,0.03)',
                                    }}
                                >
                                    <InstagramIcon />
                                </IconButton>

                                <IconButton
                                    aria-label="Facebook"
                                    component="a"
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    sx={{
                                        border: '1px solid rgba(255,255,255,0.12)',
                                        backgroundColor: 'rgba(255,255,255,0.03)',
                                    }}
                                >
                                    <FacebookIcon />
                                </IconButton>

                                <IconButton
                                    aria-label="Sitio"
                                    component="a"
                                    href="https://takahirostudios.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    sx={{
                                        border: '1px solid rgba(255,255,255,0.12)',
                                        backgroundColor: 'rgba(255,255,255,0.03)',
                                    }}
                                >
                                    <LanguageIcon />
                                </IconButton>
                            </Stack>
                        </Box>

                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            © {year} Takahiro Studios. Todos los derechos reservados.
                        </Typography>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}

export default Footer;
