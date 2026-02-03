// Importamos createTheme para definir un tema personalizado de Material UI
import { createTheme } from '@mui/material/styles';

// Creamos el tema
const theme = createTheme({
    // Paleta de colores principal
    palette: {
        mode: 'dark', // modo oscuro para combinar con el fondo oscuro

        // Color principal de la marca (rojo Takahiro)
        primary: {
            main: '#e53935',
            dark: '#b71c1c',
        },

        // Color secundario (amarillo/dorado para acentos)
        secondary: {
            main: '#ffca28',
        },

        // Colores de fondo
        background: {
            default: '#050509', // fondo de la página
            paper: '#121218',   // fondo de tarjetas, secciones, modales
        },

        // Colores de texto
        text: {
            primary: '#f5f5f5',    // texto principal
            secondary: '#b0b0b0',  // texto secundario (descripciones, detalles)
        },
    },

    // Tipografía por defecto
    typography: {
        fontFamily: [
            'Inter',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),

        // Estilo por defecto para los botones
        button: {
            textTransform: 'none', // no poner texto en mayúsculas automáticas
            fontWeight: 600,
        },
    },

    // Esquinas redondeadas globales de los componentes
    shape: {
        borderRadius: 16, // tarjetas y botones con bordes redondeados suaves
    },
});

// Exportamos el tema para usarlo en ThemeProvider
export default theme;
