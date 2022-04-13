import '../styles/globals.css';
import theme from '../components/customtheme/theme';
import { ThemeProvider } from '@mui/material';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
