import { Box, Typography, IconButton, Button, SvgIcon } from '@mui/material';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { colors } from '../theme/theme';

// Settings gear icon from Figma
const GearIcon = () => (
  <SvgIcon sx={{ fontSize: 24 }} viewBox="0 0 20 20">
    <path
      d="M17.2233 10C17.2233 9.77 17.2133 9.55 17.1933 9.32L19.0533 7.91C19.4533 7.61 19.5633 7.05 19.3133 6.61L17.4433 3.38C17.1933 2.94 16.6533 2.76 16.1933 2.96L14.0433 3.87C13.6733 3.61 13.2833 3.38 12.8733 3.19L12.5833 0.88C12.5233 0.38 12.0933 0 11.5933 0H7.8633C7.3533 0 6.9233 0.38 6.8633 0.88L6.5733 3.19C6.1633 3.38 5.7733 3.61 5.4033 3.87L3.2533 2.96C2.7933 2.76 2.2533 2.94 2.0033 3.38L0.133298 6.62C-0.116702 7.06 -0.00670207 7.61 0.393298 7.92L2.2533 9.33C2.2333 9.55 2.2233 9.77 2.2233 10C2.2233 10.23 2.2333 10.45 2.2533 10.68L0.393298 12.09C-0.00670207 12.39 -0.116702 12.95 0.133298 13.39L2.0033 16.62C2.2533 17.06 2.7933 17.24 3.2533 17.04L5.4033 16.13C5.7733 16.39 6.1633 16.62 6.5733 16.81L6.8633 19.12C6.9233 19.62 7.3533 20 7.8533 20H11.5833C12.0833 20 12.5133 19.62 12.5733 19.12L12.8633 16.81C13.2733 16.62 13.6633 16.39 14.0333 16.13L16.1833 17.04C16.6433 17.24 17.1833 17.06 17.4333 16.62L19.3033 13.39C19.5533 12.95 19.4433 12.4 19.0433 12.09L17.1833 10.68C17.2133 10.45 17.2233 10.23 17.2233 10ZM9.7633 13.5C7.8333 13.5 6.2633 11.93 6.2633 10C6.2633 8.07 7.8333 6.5 9.7633 6.5C11.6933 6.5 13.2633 8.07 13.2633 10C13.2633 11.93 11.6933 13.5 9.7633 13.5Z"
      fill="currentColor"
    />
  </SvgIcon>
);

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
          startIcon={<ShareOutlinedIcon sx={{ fontSize: 20 }} />}
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
            color: 'rgba(0, 0, 0, 0.54)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
          }}
        >
          <GearIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
