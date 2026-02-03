// src/components/Process/Process.jsx
// --------------------------------------------------
// Sección "Proceso" (Home)
// Objetivo:
// - Explicar cómo trabajamos en 3–4 pasos claros
// - Reducir fricción y dudas del cliente
// - Reforzar confianza y profesionalismo
// - Mantener look premium (minimal tech + rojo Takahiro)
// - Animaciones suaves al entrar en viewport
// --------------------------------------------------

import { Box, Container, Typography, Grid, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

// --------------------------------------------------
// Variantes de animación (Framer Motion)
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
// Pasos del proceso (editable)
// - Si luego quieres 5 pasos, solo agregas aquí y ya.
// --------------------------------------------------
const steps = [
  {
    step: '01',
    title: 'Descubrimiento',
    description:
      'Entendemos tu idea, tu público y tus objetivos. Definimos qué debe lograr tu sitio o estrategia.',
  },
  {
    step: '02',
    title: 'Diseño & Dirección Creativa',
    description:
      'Creamos el look premium: estructura, UI/UX, tono visual y copy para que conecte y convierta.',
  },
  {
    step: '03',
    title: 'Desarrollo & Implementación',
    description:
      'Construimos con buenas prácticas: performance, responsive, SEO base y detalles pro.',
  },
  {
    step: '04',
    title: 'Lanzamiento & Optimización',
    description:
      'Publicamos, medimos y ajustamos. Lo importante no es solo “salir”, es mejorar resultados.',
  },
];

function Process() {
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
              Proceso
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
              Un camino claro, resultados reales
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
              Trabajamos con un proceso simple y bien definido para que tengas claridad en cada etapa.
              Sin caos. Sin improvisación. Con dirección y detalle.
            </Typography>
          </motion.div>
        </motion.div>

        {/* -------------------------------------------- */}
        {/* Grid de pasos */}
        {/* -------------------------------------------- */}
        <Box sx={{ mt: { xs: 4, md: 6 } }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {steps.map((s) => (
              <Grid key={s.step} size={{ xs: 12, md: 6 }}>
                {/* Animación por tarjeta/paso */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={itemVariant}
                >
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
                    {/* Glow/Detalle decorativo (sutil, premium) */}
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: -60,
                        background:
                          'radial-gradient(circle at top left, rgba(229,57,53,0.18), transparent 55%)',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Encabezado del paso (número + título) */}
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ position: 'relative' }}>
                      {/* Número del paso (estilo etiqueta) */}
                      <Box
                        sx={{
                          minWidth: 46,
                          height: 34,
                          borderRadius: 999,
                          display: 'grid',
                          placeItems: 'center',
                          fontWeight: 800,
                          color: 'primary.main',
                          backgroundColor: 'rgba(229,57,53,0.12)',
                          border: '1px solid rgba(229,57,53,0.22)',
                        }}
                      >
                        {s.step}
                      </Box>

                      {/* Título */}
                      <Typography variant="h6" sx={{ fontWeight: 850, lineHeight: 1.1 }}>
                        {s.title}
                      </Typography>
                    </Stack>

                    {/* Descripción */}
                    <Typography
                      variant="body2"
                      sx={{
                        mt: 1.6,
                        color: 'text.secondary',
                        lineHeight: 1.7,
                        position: 'relative',
                      }}
                    >
                      {s.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* -------------------------------------------- */}
        {/* CTA final (conecta con Contacto) */}
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
                    ¿Listo para empezar?
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                    Cuéntanos tu idea y te proponemos un plan claro (web, branding o marketing).
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

export default Process;
