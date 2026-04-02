import { ThemeProvider, CssBaseline } from '@mui/material';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { theme } from './theme/theme';
import { EventsPage } from './pages/EventsPage';
import { DocumentFilterPage } from './pages/DocumentFilterPage';
import { SettingsPage } from './pages/SettingsPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/events" replace />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/document-filter" element={<DocumentFilterPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
