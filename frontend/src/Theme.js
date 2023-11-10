import { createTheme } from '@mui/material/styles';

 const theme = createTheme({
  palette: {
    primary: {
      logoColor: '#1d8ea2',
      main: '#3f50b5',
      dark: '#333',
      white: '#fff',
      Green:"#00c194",
      LightBlue:"rgba(0, 0, 0, .5)",
      lightGrey:"#878c9f",
      LightVlue2:"#EAF7F4",
      LightWhite:"#fbfbfb",
    Roboto:"'Roboto', sans-serif !important;",
    BGColor:"#c7e6f4",
    },
    secondary: {
      light: '#212529bf',
      main: '#f44336',
      dark: '#ba000d',
      btnBg:"#f5f5f5",
      grey:"#999",
      contrastText: '#000',
    },
   
  },
});

export default theme;