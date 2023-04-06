import { createTheme } from '@mui/material'

export const theme = createTheme({
   palette: {
      primary: {
         main: '#1F6ED4',
         light: '#6190FF',
         dark: '#1D60FF',
      },
      secondary: {
         main: '#D4D4D4',
         light: '#ffffff',
         dark: '#b6b6b6',
      },
      error: {
         main: '#C91E1E',
         light: '#E13A3A',
         dark: '#B62727',
      },
      success: {
         main: '#36AC0C',
         light: '#5ce457',
         dark: '#1b580f',
      },
      info: {
         main: '#FA2B56',
         light: 'rgba(235, 67, 102, 1)',
         dark: 'rgba(239, 11, 59, 1)',
      },
   },
   typography: {
      button: {
         fontFamily: 'SemiBold ',
         fontWeight: 500,
      },
      Nav: {
         fontFamily: 'SemiBold',
         fontWeight: 600,
      },
      body1: {
         fontFamily: 'Regular',
         fontWeight: 400,
      },
      body2: {
         fontFamily: 'Regular',
         fontWeight: 300,
      },
      components: {
         MuiCssBaseline: {
            styleOverrides: `
            @font-face {
              src: url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,500;0,600;1,400&display=swap') format('woff2');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
         },
      },
   },
})
