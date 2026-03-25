import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme/theme';
import { EventsPage } from './pages/EventsPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <EventsPage />
    </ThemeProvider>
  );
}

export default App;
