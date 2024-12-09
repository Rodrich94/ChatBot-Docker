import { createTheme } from '@mui/material/styles';

// Tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: '#2b3e4c', // Color principal (violeta)
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#87b867', // Color secundario (verde)
      contrastText: '#ffffff',
    },
    background: {
      default: '#fff5e3', // Fondo general
      paper: '#ffffff',
    },
    custom: {
        userMessage: {
          background: '#87b867',
          color: '#ffffff',  // Letras negras para el mensaje del bot
        },
        botMessage: {
          background: 'rgba(255, 245, 227, 0.5)',
          color: '#000000',  // Letras negras para el mensaje del usuario
        },
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export default theme;
