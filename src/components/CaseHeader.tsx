import { Box, Typography, IconButton, Button } from '@mui/material';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import ShareIcon from '@mui/icons-material/Share';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { colors } from '../theme/theme';

interface CaseHeaderProps {
  caseId: string;
}

export const CaseHeader = ({ caseId }: CaseHeaderProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: 1,
      }}
    >
      {/* Left: Case ID */}
      <Typography
        variant="h1"
        sx={{
          fontSize: 18,
          fontWeight: 600,
          color: colors.grey[900],
        }}
      >
        Case - {caseId}
      </Typography>

      {/* Right: Actions and Settings */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {/* Share Case Button */}
        <Button
          variant="outlined"
          size="small"
          startIcon={<ShareIcon sx={{ fontSize: 16 }} />}
          sx={{
            borderColor: colors.grey[300],
            color: colors.grey[700],
            fontSize: 12,
            fontWeight: 500,
            height: 32,
            textTransform: 'none',
            '&:hover': {
              borderColor: colors.grey[400],
              backgroundColor: colors.grey[50],
            },
          }}
        >
          Share Case
        </Button>

        {/* Search with AI Button */}
        <Button
          variant="contained"
          size="small"
          startIcon={<AutoAwesomeIcon sx={{ fontSize: 16 }} />}
          sx={{
            backgroundColor: colors.green[500],
            color: '#FFFFFF',
            fontSize: 12,
            fontWeight: 500,
            height: 32,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: colors.green[600],
            },
          }}
        >
          Search with AI
        </Button>

        <IconButton
          size="small"
          sx={{
            color: colors.grey[500],
            '&:hover': {
              backgroundColor: colors.grey[100],
            },
          }}
        >
          <SettingsRoundedIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </Box>
    </Box>
  );
};
