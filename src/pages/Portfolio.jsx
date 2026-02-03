// src/pages/Portfolio.jsx
// ==================================================
// PÁGINA: PORTAFOLIO — Takahiro Studios (HÍBRIDO + CARRUSEL SUAVE)
// ==================================================
// OBJETIVO FINAL DE ESTA PÁGINA
// - Mostrar 9 casos tipo (3 Web, 3 Branding, 3 Marketing)
// - Filtros por categoría (chips) SIN BUGS ✅
// - Cuando el filtro es "Todos": mostrar un carrusel premium con autoscroll ✅
// - Cuando filtras (Web / Branding / Marketing): mostrar grid normal ✅
// - Al dar click en un proyecto: abrir modal con detalle ✅
// - Mantener animaciones suaves (Framer Motion) ✅
//
// BUG QUE ARREGLAMOS
// - Antes: al cambiar de filtro, las tarjetas se quedaban "hidden" (opacity 0)
//   por cómo Framer Motion maneja variants si el contenedor ya estaba en "visible".
// - Solución robusta: remontamos el bloque de listado con key={activeFilter}
//   y le damos su propio initial/animate.
//
// NOTA IMPORTANTE
// - Aquí NO usamos Swiper (lo quitamos porque te generó problemas de layout)
// - Si luego quieres Swiper, lo hacemos paso a paso con control total.
// ==================================================

import { useMemo, useRef, useState, useEffect } from 'react';

// Material UI
import {
    Box,
    Container,
    Typography,
    Stack,
    Chip,
    Card,
    CardContent,
    Button,
    Dialog,
    DialogContent,
    IconButton,
    Divider,
} from '@mui/material';

// Iconos
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

// Animaciones
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

// ==================================================
// ANIMACIONES (FRAMER MOTION)
// ==================================================
// containerVariant: anima contenedor y aplica "stagger" a hijos
// itemVariant: anima items (fade + subir un poco)
const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.10 } },
};

const itemVariant = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
};

// ==================================================
// HELPER: URLS UNSPLASH (PLACEHOLDERS ESTABLES)
// ==================================================
// - Usamos unsplash para placeholders "más estables" que picsum
// - Parámetros: auto=format, fit=crop, w=1600, q=80
const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

// ==================================================
// DATA: 9 CASOS TIPO (3 POR CATEGORÍA)
// ==================================================
// Estructura híbrida (marketing/storytelling + respaldo técnico):
// - summary: resumen corto para card
// - challenge/solution: narrativa
// - deliverables: lo concreto (qué se entrega)
// - outcome: resultado esperado realista (sin métricas inventadas)
// - stack: respaldo técnico
// - cover/gallery: imágenes placeholder
const projects = [
    // ==========================
    // WEB (3)
    // ==========================
    {
        id: 'web-01',
        title: 'Landing de Conversión — Agencia Creativa',
        category: 'Web',
        summary: 'Mensaje claro, CTA estratégicos y animaciones suaves enfocadas a leads.',
        challenge:
            'La marca necesitaba explicar su valor en segundos y convertir visitas en contactos, sin depender de explicaciones largas.',
        solution:
            'Diseñamos una landing premium con jerarquía visual, secciones “directo al punto” y CTA repetidos en momentos clave para aumentar la conversión.',
        deliverables: [
            'Landing Page (1 página)',
            'Diseño responsive',
            'Formulario funcional',
            'Animaciones premium',
            'SEO base + performance',
        ],
        outcome: 'Una presencia profesional que comunica confianza y convierte interés en leads reales.',
        stack: ['React', 'Vite', 'MUI', 'Framer Motion', 'Formspree'],
        cover: u('photo-1521737604893-d14cc237f11d'),
        gallery: [u('photo-1553877522-43269d4ea984'), u('photo-1519389950473-47ba0277781c'), u('photo-1556761175-4b46a572b786')],
    },
    {
        id: 'web-02',
        title: 'Sitio Multipágina — Servicios Industriales',
        category: 'Web',
        summary: 'Sitio corporativo claro con estructura escalable para crecer con la empresa.',
        challenge:
            'El cliente tenía servicios sólidos pero la web no comunicaba confianza ni organizaba el contenido de forma clara para cotizar rápido.',
        solution:
            'Creamos un sitio multipágina con navegación limpia, secciones de credibilidad y módulos reutilizables para escalar (servicios, portafolio, contacto).',
        deliverables: [
            'Multipágina (Inicio, Servicios, Nosotros, Contacto)',
            'Arquitectura escalable',
            'Copy enfocado a leads',
            'Formulario + prellenado listo (fase C)',
        ],
        outcome: 'Una web corporativa que ordena la propuesta de valor y acelera cotizaciones.',
        stack: ['React Router', 'MUI Theme', 'Componentización', 'SEO base'],
        cover: u('photo-1556761175-4b46a572b786'),
        gallery: [u('photo-1551434678-e076c223a692'), u('photo-1545239351-1141bd82e8a6'), u('photo-1523275335684-37898b6baf30')],
    },
    {
        id: 'web-03',
        title: 'Web Premium — Marca Lifestyle',
        category: 'Web',
        summary: 'Página estética y rápida, diseñada para contar historia y elevar percepción.',
        challenge:
            'La marca necesitaba un sitio que se sintiera “premium” y coherente con su identidad para elevar precio percibido.',
        solution:
            'Diseñamos un layout minimal-tech con contrastes y micro-interacciones para guiar la experiencia sin saturar.',
        deliverables: [
            'Diseño premium (UI kit)',
            'Secciones de storytelling',
            'Galería de imágenes',
            'Optimización visual (performance)',
        ],
        outcome: 'Un sitio que mejora el “brand feel” y hace más fácil vender productos/servicios.',
        stack: ['React', 'Sass', 'MUI', 'Motion', 'Optimización assets'],
        cover: u('photo-1523275335684-37898b6baf30'),
        gallery: [u('photo-1518770660439-4636190af475'), u('photo-1500530855697-b586d89ba3ee'), u('photo-1521737604893-d14cc237f11d')],
    },

    // ==========================
    // BRANDING (3)
    // ==========================
    {
        id: 'brand-01',
        title: 'Identidad Visual — Marca Lifestyle',
        category: 'Branding',
        summary: 'Sistema visual completo: logo, paleta, tipografía y aplicaciones digitales.',
        challenge:
            'La marca tenía buen producto, pero una imagen inconsistente que no transmitía personalidad ni profesionalismo.',
        solution:
            'Creamos un sistema visual coherente (logo + reglas + aplicaciones) para que todo “se sienta igual” en redes, web y piezas digitales.',
        deliverables: ['Logotipo + variantes', 'Paleta (primarios y acentos)', 'Tipografías + jerarquías', 'Aplicaciones para redes'],
        outcome: 'Una marca reconocible y coherente lista para crecer en digital.',
        stack: ['Brand system', 'Guidelines', 'Templates', 'Assets listos para ads'],
        cover: u('photo-1526481280695-3c687fd5432c'),
        gallery: [u('photo-1526498460520-4c246339dccb'), u('photo-1503602642458-232111445657'), u('photo-1529336953121-a0b77742f03b')],
    },
    {
        id: 'brand-02',
        title: 'Rediseño de Marca — Empresa de Servicios',
        category: 'Branding',
        summary: 'Modernización sin perder seriedad: confianza, claridad y consistencia.',
        challenge:
            'El cliente quería verse más moderno, pero sin “romper” la confianza que ya había construido con sus clientes.',
        solution:
            'Refinamos el logotipo y definimos reglas de uso, tono visual y piezas clave para comunicación constante.',
        deliverables: ['Refresco de logo', 'Sistema de color', 'Tipografía + componentes', 'Plantillas para redes'],
        outcome: 'Una identidad moderna y consistente, fácil de aplicar en el día a día.',
        stack: ['Brand guidelines', 'Sistema modular', 'Assets exportables'],
        cover: u('photo-1526948128573-703ee1aeb6fa'),
        gallery: [u('photo-1545239351-1141bd82e8a6'), u('photo-1551434678-e076c223a692'), u('photo-1553877522-43269d4ea984')],
    },
    {
        id: 'brand-03',
        title: 'Kit Visual para Redes — Emprendimiento Local',
        category: 'Branding',
        summary: 'Plantillas + estilo para publicar más rápido sin perder estética.',
        challenge:
            'Publicar era lento porque no había un estilo definido: cada post parecía “de otra marca”.',
        solution:
            'Creamos un kit visual para redes con reglas simples y plantillas reutilizables.',
        deliverables: ['Plantillas de posts', 'Plantillas de stories', 'Guía rápida de estilo', 'Iconografía base'],
        outcome: 'Publicaciones más rápidas, consistentes y con mejor percepción de marca.',
        stack: ['Templates', 'Guía breve', 'Sistema repetible'],
        cover: u('photo-1529336953121-a0b77742f03b'),
        gallery: [u('photo-1522202176988-66273c2fd55f'), u('photo-1517694712202-14dd9538aa97'), u('photo-1526481280695-3c687fd5432c')],
    },

    // ==========================
    // MARKETING (3)
    // ==========================
    {
        id: 'mkt-01',
        title: 'Estrategia de Contenido — IG/FB',
        category: 'Marketing',
        summary: 'Calendario, copies y formatos pensados para constancia y engagement.',
        challenge:
            'Publicaciones sin rumbo, baja constancia y mensajes poco claros para la audiencia.',
        solution:
            'Diseñamos una estrategia mensual con calendario, copies claros y formatos pensados para crecimiento (reels, carruseles, stories).',
        deliverables: ['Calendario mensual', 'Copies + hashtags base', 'Guías de reels/carruseles', 'Reporte básico mensual'],
        outcome: 'Presencia constante, mensajes más claros y mejor conexión con la audiencia correcta.',
        stack: ['Content plan', 'Copywriting', 'Reporting', 'Optimización mensual'],
        cover: u('photo-1553484771-371a605b060b'),
        gallery: [u('photo-1552664730-d307ca884978'), u('photo-1556761175-4b46a572b786'), u('photo-1553877522-43269d4ea984')],
    },
    {
        id: 'mkt-02',
        title: 'Optimización de Perfil + Pilares de Contenido',
        category: 'Marketing',
        summary: 'Ordenamos el perfil y definimos pilares para que cada post tenga propósito.',
        challenge:
            'El perfil no comunicaba oferta clara y el contenido no seguía una lógica repetible.',
        solution:
            'Definimos pilares (educa / prueba social / oferta / lifestyle) y optimizamos bio, highlights y llamados a la acción.',
        deliverables: ['Optimización de perfil', 'Pilares de contenido', 'Guía de estilo de copies', 'Calendario inicial'],
        outcome: 'Un perfil que se entiende en segundos y contenido con dirección.',
        stack: ['Estrategia', 'Copy', 'UX de perfil', 'Estructura repetible'],
        cover: u('photo-1553877522-43269d4ea984'),
        gallery: [u('photo-1545239351-1141bd82e8a6'), u('photo-1551434678-e076c223a692'), u('photo-1553484771-371a605b060b')],
    },
    {
        id: 'mkt-03',
        title: 'Campañas como Add-on — Meta / Google',
        category: 'Marketing',
        summary: 'Estructura, pruebas y optimización mensual para mejores leads.',
        challenge:
            'Había intención de compra, pero faltaba un sistema para captar demanda con anuncios bien estructurados.',
        solution:
            'Creamos campañas base, definimos audiencias y optimizamos con reportes para aprender qué funciona y repetirlo.',
        deliverables: ['Estructura de campañas', 'Creativos/copies base', 'Optimización mensual', 'Reporte + recomendaciones'],
        outcome: 'Un sistema medible para generar leads más constantes y mejorar con el tiempo.',
        stack: ['Meta Ads', 'Google Ads', 'Testing', 'Optimización'],
        cover: u('photo-1552664730-d307ca884978'),
        gallery: [u('photo-1521737604893-d14cc237f11d'), u('photo-1519389950473-47ba0277781c'), u('photo-1556761175-4b46a572b786')],
    },
];

// ==================================================
// COMPONENTE: ProjectCard
// ==================================================
// - Card clickeable que abre modal (onOpen)
// - Estética premium: hover, border sutil, sombra
function ProjectCard({ project, onOpen }) {
    return (
        <Card
            onClick={() => onOpen(project)}
            sx={{
                height: '100%',
                borderRadius: 5,
                cursor: 'pointer',
                overflow: 'hidden',
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.10)',
                boxShadow: '0 18px 60px rgba(0,0,0,0.25)',
                transition: 'transform 220ms ease, border-color 220ms ease',
                '&:hover': { transform: 'translateY(-6px)', borderColor: 'rgba(229,57,53,0.45)' },
            }}
        >
            {/* Portada (cover) */}
            <Box
                sx={{
                    height: 200,
                    backgroundImage: `url(${project.cover})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            <CardContent sx={{ p: 3 }}>
                {/* Badge categoría */}
                <Chip
                    label={project.category}
                    sx={{
                        fontWeight: 800,
                        borderRadius: 999,
                        bgcolor: 'rgba(229,57,53,0.16)',
                        border: '1px solid rgba(229,57,53,0.35)',
                        color: 'rgba(255,255,255,0.92)',
                    }}
                />

                <Typography variant="h6" sx={{ mt: 1.5, fontWeight: 900, lineHeight: 1.15 }}>
                    {project.title}
                </Typography>

                <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary', lineHeight: 1.6 }}>
                    {project.summary}
                </Typography>

                {/* Outcome recortado como “micro bullet” */}
                <Typography variant="caption" sx={{ display: 'block', mt: 1.7, color: 'rgba(255,255,255,0.80)' }}>
                    • {project.outcome}
                </Typography>
            </CardContent>
        </Card>
    );
}

// ==================================================
// COMPONENTE: PortfolioCarousel (AUTOSCROLL SUAVE + FLECHAS)
// ==================================================
// ¿Por qué no usamos "scroll snap"?
// - Porque snap produce “saltos” que se sienten poco premium con autoscroll.
// ¿Cómo hacemos infinito sin brincos?
// - Duplicamos la lista: [...items, ...items].
// - Cuando scrollLeft llega a la mitad del scrollWidth, regresamos a 0.
function PortfolioCarousel({ items, onOpen, speed = 0.55 }) {
    const scrollerRef = useRef(null);
    const rafRef = useRef(null);

    // paused: cuando pasas el mouse, detenemos el autoscroll para que puedas dar click con calma
    const [paused, setPaused] = useState(false);

    // Duplicamos items para loop infinito
    const loopItems = useMemo(() => [...items, ...items], [items]);

    useEffect(() => {
        const el = scrollerRef.current;
        if (!el) return;

        const tick = () => {
            if (!paused) {
                el.scrollLeft += speed;

                // Mitad del contenido (fin de la primera "vuelta")
                const half = el.scrollWidth / 2;

                // Cuando llegamos al final de la primera vuelta, reseteamos a 0
                // Como hay una segunda vuelta idéntica, el usuario casi no nota el reset.
                if (el.scrollLeft >= half) {
                    el.scrollLeft = 0;
                }
            }

            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [paused, speed, loopItems.length]);

    // Flechas: movemos “un card” aprox (360px). Ajustable.
    const scrollByCards = (dir) => {
        const el = scrollerRef.current;
        if (!el) return;
        el.scrollBy({ left: dir * 360, behavior: 'smooth' });
    };

    return (
        <Box
            sx={{ position: 'relative', mt: { xs: 4, md: 6 } }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* Flecha izquierda (solo en sm+) */}
            <IconButton
                onClick={() => scrollByCards(-1)}
                aria-label="Anterior"
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: -8,
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                    bgcolor: 'rgba(0,0,0,0.45)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    display: { xs: 'none', sm: 'inline-flex' },
                    '&:hover': { bgcolor: 'rgba(0,0,0,0.65)' },
                }}
            >
                <ChevronLeftRoundedIcon />
            </IconButton>

            {/* Flecha derecha (solo en sm+) */}
            <IconButton
                onClick={() => scrollByCards(1)}
                aria-label="Siguiente"
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: -8,
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                    bgcolor: 'rgba(0,0,0,0.45)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    display: { xs: 'none', sm: 'inline-flex' },
                    '&:hover': { bgcolor: 'rgba(0,0,0,0.65)' },
                }}
            >
                <ChevronRightRoundedIcon />
            </IconButton>

            {/* Contenedor scrolleable */}
            <Box
                ref={scrollerRef}
                sx={{
                    display: 'flex',
                    gap: 3,
                    overflowX: 'auto',
                    pb: 1,
                    px: { xs: 0, sm: 1 },

                    // IMPORTANTÍSIMO:
                    // Quitamos scrollSnap para evitar saltos
                    scrollSnapType: 'none',

                    // Scrollbar estética
                    '&::-webkit-scrollbar': { height: 8 },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(255,255,255,0.15)',
                        borderRadius: 999,
                    },
                }}
            >
                {loopItems.map((p, idx) => (
                    <Box
                        key={`${p.id}-${idx}`}
                        sx={{
                            // Controlamos el ancho de cada card en el carrusel
                            // xs: casi toda la pantalla
                            // md: 3 cards visibles aprox
                            flex: { xs: '0 0 88%', sm: '0 0 60%', md: '0 0 36%' },
                        }}
                    >
                        <ProjectCard project={p} onOpen={onOpen} />
                    </Box>
                ))}
            </Box>

            <Typography variant="caption" sx={{ mt: 1, color: 'text.secondary' }}>
                Autoscroll suave (pausa al pasar el mouse).
            </Typography>
        </Box>
    );
}

// ==================================================
// PÁGINA: Portfolio
// ==================================================
export default function Portfolio() {
    // Chips de filtro
    const filters = ['Todos', 'Web', 'Marketing', 'Branding'];

    // Estado del filtro actual
    const [activeFilter, setActiveFilter] = useState('Todos');

    // Modal (Dialog)
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    // Filtrado de proyectos según categoría
    const filtered = useMemo(() => {
        if (activeFilter === 'Todos') return projects;
        return projects.filter((p) => p.category === activeFilter);
    }, [activeFilter]);

    // Abrir modal
    const handleOpen = (project) => {
        setSelected(project);
        setOpen(true);
    };

    // Cerrar modal
    const handleClose = () => {
        setOpen(false);
        setSelected(null);
    };

    return (
        <Box component="section" sx={{ py: { xs: 7, md: 10 } }}>
            <Container maxWidth="lg">
                {/* ==================================================
            CONTENEDOR PRINCIPAL ANIMADO
            ==================================================
            - Este motion.div hace el "fade in" inicial de la página.
            - OJO: el bug de filtros NO se arregla aquí.
            - El fix está en el listado, con key={activeFilter}.
        */}
                <motion.div initial="hidden" animate="visible" variants={containerVariant}>
                    {/* HERO */}
                    <motion.div variants={itemVariant}>
                        <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: '0.12em' }}>
                            Portafolio
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemVariant}>
                        <Typography variant="h3" sx={{ fontWeight: 950, mt: 1 }}>
                            Resultados que se ven. Experiencias que convierten.
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemVariant}>
                        <Typography sx={{ mt: 2, color: 'text.secondary', maxWidth: 850 }}>
                            Selecciona una categoría y revisa el detalle. Aquí el cliente entiende rápido lo que Takahiro puede construir.
                        </Typography>
                    </motion.div>

                    {/* FILTROS (CHIPS) */}
                    <motion.div variants={itemVariant}>
                        <Stack direction="row" spacing={1} sx={{ mt: 3, flexWrap: 'wrap' }}>
                            {filters.map((f) => (
                                <Chip
                                    key={f}
                                    label={f}
                                    onClick={() => setActiveFilter(f)}
                                    sx={{
                                        cursor: 'pointer',
                                        fontWeight: 900,
                                        borderRadius: 999,
                                        bgcolor: activeFilter === f ? 'rgba(229,57,53,0.22)' : 'rgba(255,255,255,0.06)',
                                        border:
                                            activeFilter === f ? '1px solid rgba(229,57,53,0.45)' : '1px solid rgba(255,255,255,0.10)',
                                        color: 'rgba(255,255,255,0.92)',
                                        '&:hover': { bgcolor: 'rgba(229,57,53,0.18)' },
                                    }}
                                />
                            ))}
                        </Stack>
                    </motion.div>

                    {/* ==================================================
              LISTADO (FIX DEFINITIVO DEL FILTRO)
              ==================================================
              PROBLEMA:
              - Al cambiar activeFilter, React monta nuevos items.
              - Framer Motion a veces no re-ejecuta variants y los deja "hidden".
              
              SOLUCIÓN:
              - Remontamos este bloque completo con key={activeFilter}.
              - Además, este bloque tiene su propio initial/animate.
              - Resultado: SIEMPRE vuelve a aparecer el contenido.
          */}
                    <motion.div key={activeFilter} initial="hidden" animate="visible" variants={containerVariant}>
                        {/* Si el filtro es "Todos", mostramos carrusel */}
                        {activeFilter === 'Todos' ? (
                            <motion.div variants={itemVariant}>
                                <PortfolioCarousel items={filtered} onOpen={handleOpen} />
                            </motion.div>
                        ) : (
                            // Si el filtro NO es "Todos", mostramos grid (más estándar)
                            <Box sx={{ mt: { xs: 4, md: 6 } }}>
                                <Box
                                    sx={{
                                        display: 'grid',
                                        gap: 3,
                                        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                                    }}
                                >
                                    {filtered.map((p) => (
                                        <motion.div key={p.id} variants={itemVariant} style={{ height: '100%' }}>
                                            <ProjectCard project={p} onOpen={handleOpen} />
                                        </motion.div>
                                    ))}
                                </Box>

                                {/* Mensaje si algún día tu data quedara vacía */}
                                {filtered.length === 0 ? (
                                    <Typography sx={{ mt: 3, color: 'text.secondary' }}>
                                        No hay proyectos en esta categoría todavía.
                                    </Typography>
                                ) : null}
                            </Box>
                        )}
                    </motion.div>

                    {/* CTA FINAL */}
                    <motion.div variants={itemVariant}>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: { xs: 5, md: 7 } }}>
                            <Button component={RouterLink} to="/contacto" variant="contained" size="large" sx={{ fontWeight: 900 }}>
                                Hablemos de tu idea
                            </Button>
                            <Button component={RouterLink} to="/servicios" variant="outlined" size="large" sx={{ fontWeight: 800 }}>
                                Ver servicios
                            </Button>
                        </Stack>
                    </motion.div>
                </motion.div>

                {/* ==================================================
            MODAL DE DETALLE (DIALOG)
            ==================================================
            - Aquí mostramos el detalle "híbrido" del caso
            - Galería simple (sin Swiper) para evitar bugs
        */}
                <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                    <DialogContent sx={{ p: { xs: 2.2, md: 3 } }}>
                        {/* Header modal */}
                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Typography variant="h6" sx={{ fontWeight: 950 }}>
                                {selected?.title || 'Proyecto'}
                            </Typography>

                            <IconButton onClick={handleClose}>
                                <CloseRoundedIcon />
                            </IconButton>
                        </Stack>

                        <Divider sx={{ my: 2 }} />

                        {/* Contenido modal */}
                        {selected ? (
                            <Stack spacing={2.2}>
                                {/* Badge categoría */}
                                <Chip
                                    label={selected.category}
                                    sx={{
                                        alignSelf: 'flex-start',
                                        fontWeight: 900,
                                        borderRadius: 999,
                                        bgcolor: 'rgba(229,57,53,0.16)',
                                        border: '1px solid rgba(229,57,53,0.35)',
                                        color: 'rgba(255,255,255,0.92)',
                                    }}
                                />

                                {/* Resumen */}
                                <Typography sx={{ color: 'text.secondary' }}>{selected.summary}</Typography>

                                {/* Galería simple en grid (estable) */}
                                <Box
                                    sx={{
                                        display: 'grid',
                                        gap: 2,
                                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                                    }}
                                >
                                    {selected.gallery.map((img) => (
                                        <Box
                                            key={img}
                                            sx={{
                                                height: 220,
                                                borderRadius: 4,
                                                border: '1px solid rgba(255,255,255,0.10)',
                                                backgroundImage: `url(${img})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                            }}
                                        />
                                    ))}
                                </Box>

                                {/* Storytelling */}
                                <Box>
                                    <Typography sx={{ fontWeight: 950 }}>Reto</Typography>
                                    <Typography sx={{ mt: 0.8, color: 'text.secondary', lineHeight: 1.7 }}>
                                        {selected.challenge}
                                    </Typography>
                                </Box>

                                <Box>
                                    <Typography sx={{ fontWeight: 950 }}>Solución</Typography>
                                    <Typography sx={{ mt: 0.8, color: 'text.secondary', lineHeight: 1.7 }}>
                                        {selected.solution}
                                    </Typography>
                                </Box>

                                <Box>
                                    <Typography sx={{ fontWeight: 950 }}>Entregables</Typography>
                                    <Stack spacing={0.7} sx={{ mt: 0.8 }}>
                                        {selected.deliverables.map((d) => (
                                            <Typography key={d} sx={{ color: 'rgba(255,255,255,0.88)' }}>
                                                • {d}
                                            </Typography>
                                        ))}
                                    </Stack>
                                </Box>

                                <Box>
                                    <Typography sx={{ fontWeight: 950 }}>Resultado esperado</Typography>
                                    <Typography sx={{ mt: 0.8, color: 'rgba(255,255,255,0.88)', lineHeight: 1.7 }}>
                                        {selected.outcome}
                                    </Typography>
                                </Box>

                                <Box>
                                    <Typography sx={{ fontWeight: 950 }}>Stack (resumen)</Typography>
                                    <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap' }}>
                                        {selected.stack.map((t) => (
                                            <Chip
                                                key={t}
                                                label={t}
                                                sx={{
                                                    borderRadius: 999,
                                                    bgcolor: 'rgba(255,255,255,0.06)',
                                                    border: '1px solid rgba(255,255,255,0.10)',
                                                }}
                                            />
                                        ))}
                                    </Stack>
                                </Box>

                                {/* CTAs del modal */}
                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 1 }}>
                                    {/* Prefill al contacto */}
                                    <Button
                                        component={RouterLink}
                                        to={`/contacto?service=${encodeURIComponent('Landing Page')}&project=${encodeURIComponent(
                                            selected.title
                                        )}&source=portafolio`}
                                        variant="contained"
                                        sx={{ fontWeight: 900 }}
                                    >
                                        Quiero algo así
                                    </Button>

                                    <Button component={RouterLink} to="/servicios" variant="outlined" sx={{ fontWeight: 800 }}>
                                        Ver paquetes
                                    </Button>
                                </Stack>
                            </Stack>
                        ) : null}
                    </DialogContent>
                </Dialog>
            </Container>
        </Box>
    );
}
