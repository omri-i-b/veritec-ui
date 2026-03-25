import { Box, Typography, IconButton, Button } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import IosShareIcon from '@mui/icons-material/IosShare';
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
        mb: 0.5,
      }}
    >
      {/* Left: Case ID */}
      <Typography
        variant="h1"
        sx={{
          fontSize: 24,
          fontWeight: 400,
          color: 'rgba(0, 0, 0, 0.87)',
        }}
      >
        Case - {caseId}
      </Typography>

      {/* Right: Actions and Settings */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        {/* Share Case Button - Outlined Blue */}
        <Button
          variant="outlined"
          startIcon={<IosShareIcon sx={{ fontSize: 20 }} />}
          sx={{
            borderColor: 'rgba(33, 150, 243, 0.5)',
            color: colors.blue[500],
            fontSize: 14,
            fontWeight: 500,
            height: 36,
            textTransform: 'none',
            px: 2,
            '&:hover': {
              borderColor: colors.blue[500],
              backgroundColor: 'rgba(33, 150, 243, 0.04)',
            },
          }}
        >
          Share Case
        </Button>

        {/* Search with AI Button - Filled Blue */}
        <Button
          variant="contained"
          startIcon={<AutoAwesomeIcon sx={{ fontSize: 20 }} />}
          sx={{
            backgroundColor: colors.blue[500],
            color: '#FFFFFF',
            fontSize: 14,
            fontWeight: 500,
            height: 36,
            textTransform: 'none',
            px: 2,
            boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
            '&:hover': {
              backgroundColor: colors.blue[600],
            },
          }}
        >
          Search with AI
        </Button>

        {/* Settings Icon Button */}
        <IconButton
          sx={{
            border: '1px solid #D2D2D2',
            borderRadius: 1,
            width: 36,
            height: 36,
            color: 'rgba(0, 0, 0, 0.6)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
          }}
        >
          <SettingsOutlinedIcon sx={{ fontSize: 24 }} />
        </IconButton>
      </Box>
    </Box>
  );
};
