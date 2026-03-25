import { createTheme } from '@mui/material/styles';

// Veritec Design System Colors
const colors = {
  blue: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#1C7ED1',
    600: '#1668B1',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
  },
  grey: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  green: {
    50: '#ECFDF5',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399',
    500: '#10B981',
    600: '#059669',
    700: '#047857',
    800: '#065F46',
    900: '#064E3B',
  },
  red: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.blue[500],
      light: colors.blue[400],
      dark: colors.blue[600],
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: colors.grey[600],
      light: colors.grey[400],
      dark: colors.grey[800],
    },
    success: {
      main: colors.green[500],
      light: colors.green[100],
      dark: colors.green[700],
    },
    error: {
      main: colors.red[500],
      light: colors.red[100],
      dark: colors.red[700],
    },
    grey: colors.grey,
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: colors.grey[900],
      secondary: colors.grey[600],
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
      color: colors.grey[900],
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: colors.grey[900],
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: colors.grey[900],
    },
    h4: {
      fontSize: '1.125rem',
      fontWeight: 600,
      color: colors.grey[900],
    },
    body1: {
      fontSize: '0.875rem',
      color: colors.grey[700],
    },
    body2: {
      fontSize: '0.8125rem',
      color: colors.grey[600],
    },
    caption: {
      fontSize: '0.75rem',
      color: colors.grey[500],
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 8,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          fontWeight: 500,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          minWidth: 'auto',
          padding: '12px 16px',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${colors.grey[200]}`,
          padding: '16px',
        },
        head: {
          fontWeight: 600,
          color: colors.grey[700],
          backgroundColor: colors.grey[50],
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
  },
});

export { colors };
