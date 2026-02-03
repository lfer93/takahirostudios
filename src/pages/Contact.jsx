// src/pages/Contact.jsx
// ==================================================
// PÁGINA: CONTACTO — Takahiro Studios
// ==================================================
// - Formulario con validación (RHF + Zod)
// - Envío real con Formspree
// - Snackbars de éxito y error
// - Info de contacto + redes
// - ✅ Prefill desde URL (Portafolio / Paquetes)
// - ✅ Botones rápidos para paquetes (Origin/Core/Pulse/Flow/Amplify/Add-ons)
//
// BUG RESUELTO:
// - Antes estabas usando setValue('message', (prev)=>...) como si fuera setState.
//   ❌ React Hook Form NO acepta función como valor.
//   ✅ Solución: usamos getValues('message') para leer lo actual,
//      luego construimos el string y lo seteamos con setValue('message', nuevoString).
// ==================================================

import { useMemo, useState, useEffect } from 'react';
import { useSearchParams, Link as RouterLink } from 'react-router-dom';

// Material UI
import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    Stack,
    Snackbar,
    Alert,
    Card,
    CardContent,
    Divider,
    IconButton,
    Chip,
} from '@mui/material';

// Animaciones
import { motion } from 'framer-motion';

// Formularios + validación
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Iconos
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';

// ==================================================
// ENDPOINT REAL DE FORMSPREE
// ==================================================
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqekvday';

// ==================================================
// VALIDACIÓN (Zod)
// ==================================================
const schema = z.object({
    name: z.string().min(2, 'Escribe tu nombre (mínimo 2 caracteres).'),
    email: z.string().email('Escribe un correo válido.'),

    // Teléfono obligatorio: 10 dígitos (México)
    phone: z
        .string()
        .min(10, 'Escribe un teléfono válido (10 dígitos).')
        .max(10, 'Escribe un teléfono válido (10 dígitos).')
        .regex(/^\d{10}$/, 'Escribe un teléfono válido (solo 10 dígitos).'),

    service: z.string().min(1, 'Selecciona un servicio.'),
    message: z.string().min(10, 'Cuéntanos un poco más (mínimo 10 caracteres).'),
});

// ==================================================
// OPCIONES DE SERVICIOS (select)
// ==================================================
const serviceOptions = [
    'Landing Page',
    'Sitio Multipágina',
    'Web Corporativa',
    'Marketing Digital',
    'Branding e Identidad',
    'Estrategia de Contenido',
];

// ==================================================
// Botones rápidos (atajos) para prellenar intención
// ==================================================
const quickPackages = [
    { key: 'origin', label: 'Quiero Origin', service: 'Landing Page' },
    { key: 'core', label: 'Quiero Core', service: 'Sitio Multipágina' },

    { key: 'pulse', label: 'Quiero Pulse', service: 'Marketing Digital' },
    { key: 'flow', label: 'Quiero Flow', service: 'Marketing Digital' },
    { key: 'amplify', label: 'Quiero Amplify', service: 'Marketing Digital' },

    { key: 'addons', label: 'Quiero Add-ons', service: 'Marketing Digital' },
];

// ==================================================
// ANIMACIONES
// ==================================================
const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariant = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
};

export default function Contact() {
    // ==================================================
    // Prefill: leemos query params
    // ==================================================
    const [searchParams] = useSearchParams();

    // service (Landing Page), project (título), pkg (Origin/Core...), source (portafolio/servicios)
    const qpService = searchParams.get('service') || '';
    const qpProject = searchParams.get('project') || '';
    const qpPkg = searchParams.get('pkg') || '';
    const qpSource = searchParams.get('source') || '';

    // ===============================
    // ESTADOS PARA FEEDBACK
    // ===============================
    const [successOpen, setSuccessOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // ==================================================
    // defaultValues (con prefill seguro)
    // ==================================================
    const defaultValues = useMemo(() => {
        // ✅ Solo usamos service si coincide con las opciones del select
        const safeService = serviceOptions.includes(qpService) ? qpService : '';

        // Construimos un encabezado "pro" si viene info desde otra página
        const prefillLines = [];
        if (qpPkg) prefillLines.push(`Paquete de interés: ${qpPkg}`);
        if (qpProject) prefillLines.push(`Referencia: ${qpProject}`);
        if (qpSource) prefillLines.push(`Origen: ${qpSource}`);

        // Si hay algo, lo ponemos arriba del mensaje con doble salto
        const header = prefillLines.length ? `${prefillLines.join(' · ')}\n\n` : '';

        const prefillMessage =
            header +
            `Hola Takahiro, quiero cotizar y me gustaría que me recomienden el mejor enfoque.\n` +
            `Objetivo: \n` +
            `Tiempo ideal: \n` +
            `Ejemplos / referencias (opcional): `;

        return {
            name: '',
            email: '',
            phone: '',
            service: safeService,
            message: prefillMessage,
        };
    }, [qpService, qpProject, qpPkg, qpSource]);

    // ==================================================
    // RHF: configuración del formulario
    // ==================================================
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        getValues, // ✅ IMPORTANTE: para leer lo actual (fix del bug)
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues,
        resolver: zodResolver(schema),
        mode: 'onTouched',
    });

    // ==================================================
    // Si cambian query params y ya estabas en Contacto:
    // RHF no re-aplica defaultValues solo, así que reseteamos.
    // ==================================================
    useEffect(() => {
        reset(defaultValues);
    }, [defaultValues, reset]);

    // ==================================================
    // Envío real a Formspree
    // ==================================================
    const onSubmit = async (data) => {
        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    ...data,

                    // Metadatos útiles (no afectan validación)
                    source: 'takahirostudios.com',
                    sourceDetail: qpSource || 'directo',
                    package: qpPkg || '',
                    project: qpProject || '',
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result?.errors?.[0]?.message || 'No se pudo enviar el mensaje. Intenta nuevamente.');
            }

            setSuccessOpen(true);
            reset(defaultValues);
        } catch (error) {
            console.error(error);
            setErrorMessage(error.message);
            setErrorOpen(true);
        }
    };

    // ==================================================
    // Handler: Botones rápidos de paquetes
    // ==================================================
    // ¿Qué hace?
    // 1) Cambia el servicio del select (ej: "Landing Page")
    // 2) Inserta (o reemplaza) la línea "Paquete de interés: X" en el mensaje
    //
    // IMPORTANTE:
    // - NO usamos setValue con función (prev)=>..., porque RHF no lo soporta.
    // - Leemos el texto actual con getValues('message').
    // ==================================================
    const handleQuickPackage = (pkg) => {
        // 1) Seteamos el servicio recomendado del paquete
        setValue('service', pkg.service, { shouldValidate: true, shouldTouch: true });

        // 2) Construimos el header del paquete (solo el nombre, sin "Quiero ")
        const pkgName = pkg.label.replace('Quiero ', '').trim();
        const headerLine = `Paquete de interés: ${pkgName}`;

        // 3) Leemos el mensaje actual del formulario
        const currentMessage = getValues('message') || '';

        // 4) Si ya existe una línea "Paquete de interés:", la reemplazamos
        //    Si no existe, la agregamos arriba con doble salto
        let nextMessage = '';
        if (currentMessage.includes('Paquete de interés:')) {
            nextMessage = currentMessage.replace(/Paquete de interés:.*$/m, headerLine);
        } else {
            nextMessage = `${headerLine}\n\n${currentMessage}`;
        }

        // 5) Guardamos el nuevo mensaje en RHF
        setValue('message', nextMessage, { shouldValidate: true, shouldTouch: true });
    };

    return (
        <Box component="section" sx={{ py: { xs: 7, md: 10 } }}>
            <Container maxWidth="lg">
                <motion.div initial="hidden" animate="visible" variants={containerVariant}>
                    {/* ENCABEZADO */}
                    <motion.div variants={itemVariant}>
                        <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700 }}>
                            Contacto
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemVariant}>
                        <Typography variant="h3" sx={{ fontWeight: 900, mt: 1 }}>
                            Hablemos de tu idea
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemVariant}>
                        <Typography sx={{ mt: 2, color: 'text.secondary', maxWidth: 900 }}>
                            Cuéntanos qué quieres construir. Te respondemos con claridad y una propuesta realista.
                        </Typography>
                    </motion.div>

                    {/* ==================================================
              BLOQUE: BOTONES RÁPIDOS DE PAQUETES
              ================================================== */}
                    <motion.div variants={itemVariant}>
                        <Box sx={{ mt: 3 }}>
                            <Typography sx={{ fontWeight: 900 }}>Atajo rápido</Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.7 }}>
                                Si ya tienes un paquete en mente, selecciónalo y prellenamos el formulario.
                            </Typography>

                            <Stack direction="row" spacing={1} sx={{ mt: 1.6, flexWrap: 'wrap' }}>
                                {quickPackages.map((p) => (
                                    <Chip
                                        key={p.key}
                                        label={p.label}
                                        onClick={() => handleQuickPackage(p)}
                                        sx={{
                                            cursor: 'pointer',
                                            fontWeight: 900,
                                            borderRadius: 999,
                                            bgcolor: 'rgba(255,255,255,0.06)',
                                            border: '1px solid rgba(255,255,255,0.10)',
                                            '&:hover': { borderColor: 'rgba(229,57,53,0.45)' },
                                        }}
                                    />
                                ))}

                                <Chip
                                    component={RouterLink}
                                    to="/servicios"
                                    clickable
                                    label="Ver paquetes"
                                    sx={{
                                        fontWeight: 900,
                                        borderRadius: 999,
                                        bgcolor: 'rgba(229,57,53,0.14)',
                                        border: '1px solid rgba(229,57,53,0.30)',
                                        '&:hover': { borderColor: 'rgba(229,57,53,0.55)' },
                                    }}
                                />
                            </Stack>
                        </Box>
                    </motion.div>

                    {/* CONTENIDO */}
                    <Box sx={{ mt: 6 }}>
                        <Grid container spacing={3}>
                            {/* FORMULARIO */}
                            <Grid size={{ xs: 12, md: 7 }}>
                                <motion.div variants={itemVariant}>
                                    <Card>
                                        <CardContent>
                                            <Typography fontWeight={900}>Cuéntanos sobre tu proyecto</Typography>
                                            <Divider sx={{ my: 2 }} />

                                            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                                                <Grid container spacing={2}>
                                                    <Grid size={{ xs: 12, md: 6 }}>
                                                        <TextField
                                                            fullWidth
                                                            label="Nombre"
                                                            {...register('name')}
                                                            error={!!errors.name}
                                                            helperText={errors.name?.message}
                                                        />
                                                    </Grid>

                                                    <Grid size={{ xs: 12, md: 6 }}>
                                                        <TextField
                                                            fullWidth
                                                            label="Correo"
                                                            {...register('email')}
                                                            error={!!errors.email}
                                                            helperText={errors.email?.message}
                                                        />
                                                    </Grid>

                                                    <Grid size={{ xs: 12, md: 6 }}>
                                                        <TextField
                                                            fullWidth
                                                            label="Teléfono"
                                                            placeholder="8443434443"
                                                            {...register('phone', {
                                                                onChange: (e) => {
                                                                    // ✅ Quitamos todo lo que no sea número
                                                                    e.target.value = e.target.value.replace(/\D/g, '');
                                                                },
                                                            })}
                                                            error={!!errors.phone}
                                                            helperText={errors.phone?.message}
                                                            inputProps={{
                                                                inputMode: 'numeric',
                                                                pattern: '[0-9]*',
                                                                maxLength: 10,
                                                            }}
                                                        />
                                                    </Grid>

                                                    <Grid size={{ xs: 12, md: 6 }}>
                                                        <TextField
                                                            fullWidth
                                                            select
                                                            label="Servicio"
                                                            SelectProps={{ native: true }}
                                                            {...register('service')}
                                                            error={!!errors.service}
                                                            helperText={errors.service?.message}
                                                        >
                                                            <option value=""></option>
                                                            {serviceOptions.map((s) => (
                                                                <option key={s} value={s}>
                                                                    {s}
                                                                </option>
                                                            ))}
                                                        </TextField>
                                                    </Grid>

                                                    <Grid size={{ xs: 12 }}>
                                                        <TextField
                                                            fullWidth
                                                            multiline
                                                            minRows={5}
                                                            label="Mensaje"
                                                            {...register('message')}
                                                            error={!!errors.message}
                                                            helperText={errors.message?.message}
                                                        />
                                                    </Grid>

                                                    <Grid size={{ xs: 12 }}>
                                                        <Button type="submit" variant="contained" disabled={isSubmitting}>
                                                            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>

                            {/* INFO + REDES */}
                            <Grid size={{ xs: 12, md: 5 }}>
                                <motion.div variants={itemVariant}>
                                    <Card>
                                        <CardContent>
                                            <Typography fontWeight={900}>Información</Typography>
                                            <Divider sx={{ my: 2 }} />

                                            <Stack spacing={1.5}>
                                                <Stack direction="row" spacing={1}>
                                                    <EmailRoundedIcon />
                                                    <a href="mailto:crear@takahirostudios.com">crear@takahirostudios.com</a>
                                                </Stack>

                                                <Stack direction="row" spacing={1}>
                                                    <PhoneRoundedIcon />
                                                    <a href="tel:+528443434443">844 343 44 43</a>
                                                </Stack>

                                                <Stack direction="row" spacing={1}>
                                                    <PlaceRoundedIcon />
                                                    <Typography>Saltillo, Coahuila · Trabajo remoto</Typography>
                                                </Stack>
                                            </Stack>

                                            {/* SÍGUENOS */}
                                            <Box sx={{ mt: 3 }}>
                                                <Typography fontWeight={900}>Síguenos</Typography>
                                                <Typography variant="caption" color="text.secondary">
                                                    Marketing, diseño y proyectos reales
                                                </Typography>

                                                <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                                                    <IconButton component="a" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                                        <InstagramIcon />
                                                    </IconButton>

                                                    <IconButton component="a" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                                        <FacebookIcon />
                                                    </IconButton>
                                                </Stack>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        </Grid>
                    </Box>
                </motion.div>

                {/* SNACKBARS */}
                <Snackbar open={successOpen} autoHideDuration={4000} onClose={() => setSuccessOpen(false)}>
                    <Alert severity="success" variant="filled">
                        ¡Mensaje enviado correctamente!
                    </Alert>
                </Snackbar>

                <Snackbar open={errorOpen} autoHideDuration={5000} onClose={() => setErrorOpen(false)}>
                    <Alert severity="error" variant="filled">
                        {errorMessage}
                    </Alert>
                </Snackbar>
            </Container>
        </Box>
    );
}
