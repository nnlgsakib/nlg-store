import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    // Primary brand color range (purple/blue blend)
    brand: {
      50:  '#E9E6FF',
      100: '#C8C1FF',
      200: '#A79CFF',
      300: '#8677FF',
      400: '#6553FF',
      500: '#4430FF',
      600: '#3526CC',
      700: '#271C99',
      800: '#1A1366',
      900: '#0C0933',
    },

    // Accents for highlights or secondary actions
    accent: {
      50:  '#FFF0F3',
      100: '#FFD6DD',
      200: '#FFBCC6',
      300: '#FFA2B0',
      400: '#FF8899',
      500: '#FF6E83',
      600: '#CC5869',
      700: '#99424F',
      800: '#662C34',
      900: '#33161A',
    },

    // Dark grays for backgrounds or text in dark mode
    dark: {
      100: '#1A202C',
      200: '#2D3748',
      300: '#4A5568',
    },
  },

  fonts: {
    heading: '"Inter", sans-serif',
    body: '"Inter", sans-serif',
  },

  styles: {
    global: {
      body: {
        bg: 'gray.50', // Light background color
        color: 'dark.100', // Default text color
      },
    },
  },
});

export default theme;
