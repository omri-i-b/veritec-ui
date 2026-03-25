import { Box, Button, Menu, MenuItem, Chip, TextField, InputAdornment, Typography } from '@mui/material';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import AddIcon from '@mui/icons-material/Add';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SearchIcon from '@mui/icons-material/Search';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TableRowsIcon from '@mui/icons-material/TableRows';
import { useState } from 'react';
import { colors } from '../theme/theme';

// Toggle button component for filters with switch icon
const ToggleFilterButton = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <Button
    variant="outlined"
    startIcon={
      active ? (
        <ToggleOnIcon sx={{ color: colors.blue[500] }} />
      ) : (
        <ToggleOffOutlinedIcon sx={{ color: 'rgba(0, 0, 0, 0.38)' }} />
      )
    }
    onClick={onClick}
    sx={{
      borderColor: colors.grey[300],
      color: 'rgba(0, 0, 0, 0.6)',
      fontSize: 14,
      fontWeight: 400,
      height: 36,
      textTransform: 'none',
      px: 1.5,
      whiteSpace: 'nowrap',
      '&:hover': {
        borderColor: colors.grey[400],
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
      },
    }}
  >
    {label}
  </Button>
);

// Filter dropdown button with + icon
const FilterDropdownButton = ({ label }: { label: string }) => (
  <Button
    variant="outlined"
    startIcon={<AddIcon sx={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.6)' }} />}
    sx={{
      borderColor: 'rgba(0, 0, 0, 0.23)',
      color: 'rgba(0, 0, 0, 0.6)',
      fontSize: 14,
      fontWeight: 400,
      height: 36,
      textTransform: 'none',
      px: 1.5,
      whiteSpace: 'nowrap',
      '&:hover': {
        borderColor: 'rgba(0, 0, 0, 0.4)',
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
      },
    }}
  >
    {label}
  </Button>
);

export const FilterToolbar = () => {
  const [viewAnchor, setViewAnchor] = useState<null | HTMLElement>(null);
  const [showRelevant, setShowRelevant] = useState(false);
  const [hideDuplicates, setHideDuplicates] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        py: 1.5,
        gap: 2,
      }}
    >
      {/* Left side: Event Overview label */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <TableRowsIcon sx={{ color: 'rgba(0, 0, 0, 0.87)', fontSize: 24 }} />
        <Typography sx={{ fontSize: 16, fontWeight: 400, color: 'rgba(0, 0, 0, 0.87)' }}>
          Event Overview
        </Typography>
      </Box>

      {/* Right side: All filters */}
      <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1.5 }}>
        {/* Toggle Filters */}
        <ToggleFilterButton
          label="Show only relevant events"
          active={showRelevant}
          onClick={() => setShowRelevant(!showRelevant)}
        />
        <ToggleFilterButton
          label="Hide duplicates"
          active={hideDuplicates}
          onClick={() => setHideDuplicates(!hideDuplicates)}
        />

        {/* Filter Dropdowns */}
        <FilterDropdownButton label="Facility Providers" />
        <FilterDropdownButton label="Medical Providers" />
        <FilterDropdownButton label="Parties" />
        <FilterDropdownButton label="Event Types" />

        {/* Start Date */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography sx={{ fontSize: 12, color: 'rgba(0, 0, 0, 0.6)' }}>Start</Typography>
          <TextField
            placeholder="MM/DD/YYYY"
            size="small"
            sx={{
              width: 140,
              '& .MuiOutlinedInput-root': {
                height: 36,
                fontSize: 14,
                '& fieldset': {
                  borderColor: 'rgba(0, 0, 0, 0.23)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(0, 0, 0, 0.4)',
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarTodayIcon sx={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.6)' }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Typography sx={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.6)', mb: 0.75 }}>–</Typography>

        {/* End Date */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography sx={{ fontSize: 12, color: 'rgba(0, 0, 0, 0.6)' }}>End</Typography>
          <TextField
            placeholder="MM/DD/YYYY"
            size="small"
            sx={{
              width: 140,
              '& .MuiOutlinedInput-root': {
                height: 36,
                fontSize: 14,
                '& fieldset': {
                  borderColor: 'rgba(0, 0, 0, 0.23)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(0, 0, 0, 0.4)',
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarTodayIcon sx={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.6)' }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Search */}
        <TextField
          placeholder="Search"
          size="small"
          sx={{
            width: 160,
            '& .MuiOutlinedInput-root': {
              height: 36,
              fontSize: 14,
              '& fieldset': {
                borderColor: 'rgba(0, 0, 0, 0.23)',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(0, 0, 0, 0.4)',
              },
            },
            '& .MuiInputBase-input::placeholder': {
              opacity: 0.42,
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.6)' }} />
              </InputAdornment>
            ),
          }}
        />

        {/* View Dropdown */}
        <Button
          variant="outlined"
          endIcon={<ExpandMoreIcon sx={{ fontSize: 20 }} />}
          onClick={(e) => setViewAnchor(e.currentTarget)}
          sx={{
            borderColor: 'rgba(0, 0, 0, 0.23)',
            color: 'rgba(0, 0, 0, 0.6)',
            fontSize: 14,
            fontWeight: 400,
            height: 36,
            textTransform: 'none',
            px: 1.5,
            gap: 0.5,
            '&:hover': {
              borderColor: 'rgba(0, 0, 0, 0.4)',
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
          }}
        >
          View:
          <Chip
            label="Default"
            size="small"
            sx={{
              height: 24,
              fontSize: 13,
              fontWeight: 400,
              backgroundColor: colors.blue[500],
              color: '#FFFFFF',
              borderRadius: '16px',
              '& .MuiChip-label': {
                px: 1,
              },
            }}
          />
        </Button>
        <Menu
          anchorEl={viewAnchor}
          open={Boolean(viewAnchor)}
          onClose={() => setViewAnchor(null)}
        >
          <MenuItem onClick={() => setViewAnchor(null)}>Default</MenuItem>
          <MenuItem onClick={() => setViewAnchor(null)}>Compact</MenuItem>
          <MenuItem onClick={() => setViewAnchor(null)}>Expanded</MenuItem>
        </Menu>

        {/* Export Button - Outlined style */}
        <Button
          variant="outlined"
          startIcon={<FileDownloadOutlinedIcon sx={{ fontSize: 20 }} />}
          endIcon={<ExpandMoreIcon sx={{ fontSize: 20 }} />}
          sx={{
            borderColor: 'rgba(33, 150, 243, 0.5)',
            color: colors.blue[500],
            fontSize: 14,
            fontWeight: 500,
            height: 36,
            textTransform: 'none',
            px: 1.5,
            '&:hover': {
              borderColor: colors.blue[500],
              backgroundColor: 'rgba(33, 150, 243, 0.04)',
            },
          }}
        >
          Export
        </Button>
      </Box>
    </Box>
  );
};
