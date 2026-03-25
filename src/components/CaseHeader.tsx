import { Box, Typography, Chip, TextField, InputAdornment, IconButton, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import ShareIcon from '@mui/icons-material/Share';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { colors } from '../theme/theme';

interface CaseHeaderProps {
  caseId: string;
  status: 'Processed' | 'Processing' | 'New' | 'Error';
}

const statusColors = {
  Processed: { bg: colors.green[500], text: '#FFFFFF' },
  Processing: { bg: colors.blue[500], text: '#FFFFFF' },
  New: { bg: colors.grey[500], text: '#FFFFFF' },
  Error: { bg: colors.red[500], text: '#FFFFFF' },
};

export const CaseHeader = ({ caseId, status }: CaseHeaderProps) => {
  const statusColor = statusColors[status];

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: 2,
      }}
    >
      {/* Left: Case ID and Status */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: 24,
            fontWeight: 600,
            color: colors.grey[900],
          }}
        >
          Case - {caseId}
        </Typography>

        <Chip
          label={status}
          size="small"
          sx={{
            backgroundColor: statusColor.bg,
            color: statusColor.text,
            fontWeight: 500,
            fontSize: 12,
            height: 24,
          }}
        />
      </Box>

      {/* Right: Actions, Search and Settings */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        {/* Share Case Button */}
        <Button
          variant="outlined"
          size="small"
          startIcon={<ShareIcon sx={{ fontSize: 18 }} />}
          sx={{
            borderColor: colors.grey[300],
            color: colors.grey[700],
            fontSize: 13,
            fontWeight: 500,
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
          startIcon={<AutoAwesomeIcon sx={{ fontSize: 18 }} />}
          sx={{
            backgroundColor: colors.blue[500],
            color: '#FFFFFF',
            fontSize: 13,
            fontWeight: 500,
            '&:hover': {
              backgroundColor: colors.blue[600],
            },
          }}
        >
          Search with AI
        </Button>

        <TextField
          placeholder="Search for documents"
          size="small"
          sx={{
            width: 280,
            '& .MuiOutlinedInput-root': {
              backgroundColor: colors.grey[50],
              borderRadius: 2,
              '& fieldset': {
                borderColor: colors.grey[200],
              },
              '&:hover fieldset': {
                borderColor: colors.grey[300],
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: colors.grey[400], fontSize: 20 }} />
              </InputAdornment>
            ),
          }}
        />

        <IconButton
          sx={{
            color: colors.grey[500],
            '&:hover': {
              backgroundColor: colors.grey[100],
            },
          }}
        >
          <SettingsRoundedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
