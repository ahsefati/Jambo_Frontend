import { GoogleOAuthProvider } from '@react-oauth/google';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <GoogleOAuthProvider clientId="530634750163-77migb0ic67rg58fha2ba44jpsopg97e.apps.googleusercontent.com">
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}
