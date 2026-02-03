// importamos React y ReactDom para montar la palicacion en el DOM
import React from 'react';
import ReactDOM from 'react-dom/client';

//BrowserRouter: maneja la navegacion de la SPA
import { BrowserRouter } from 'react-router-dom';

//ThemeProvider y CSSBaseLine: para usar el tema de Material UI y resetear estilos base
import { ThemeProvider, CssBaseline } from '@mui/material';

//Componente raiz de la app
import App from './App.jsx';

//Tema personalizado de Material UI
import theme from './styles/theme.js';

//Estilos globales con Sass
import './styles/global.scss';


//Creamos la raiz de React y renderizamos la aplicacion
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode ayuda a detectar problemas potenciales en desarrollo
  <React.StrictMode>
    {/* Proveedor del tema de Material UI en toda la app */}
    <ThemeProvider theme={theme}>
      {/* CssBaseline aplica estilos base (reset) agradables por defecto */}
      <CssBaseline />
      {/* BrowserRouter habilita rutas como /servicios, /contacto, etc. */}
      <BrowserRouter>
        {/* Nuestro componente principal */}
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);