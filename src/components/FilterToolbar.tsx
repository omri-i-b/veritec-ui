import { Box, Button, Menu, MenuItem, Chip, TextField, InputAdornment, Typography, SvgIcon } from '@mui/material';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ListIcon from '@mui/icons-material/List';
import EventIcon from '@mui/icons-material/Event';
import SearchIcon from '@mui/icons-material/Search';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { colors } from '../theme/theme';

// Custom Event Overview icon from Figma
const EventOverviewIcon = () => (
  <SvgIcon sx={{ fontSize: 24 }}>
    <path
      d="M12 9H16C16.55 9 17 8.55 17 8C17 7.45 16.55 7 16 7H12C11.45 7 11 7.45 11 8C11 8.55 11.45 9 12 9ZM12 13H16C16.55 13 17 12.55 17 12C17 11.45 16.55 11 16 11H12C11.45 11 11 11.45 11 12C11 12.55 11.45 13 12 13ZM12 17H16C16.55 17 17 16.55 17 16C17 15.45 16.55 15 16 15H12C11.45 15 11 15.45 11 16C11 16.55 11.45 17 12 17ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15ZM20 3H4C3.45 3 3 3.45 3 4V20C3 20.55 3.45 21 4 21H20C20.55 21 21 20.55 21 20V4C21 3.45 20.55 3 20 3ZM19 19H5V5H19V19Z"
      fill="currentColor"
      fillOpacity="0.54"
    />
  </SvgIcon>
);

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

// Filter dropdown button with custom icon
const FilterDropdownButton = ({ label, icon }: { label: string; icon: React.ReactNode }) => (
  <Button
    variant="outlined"
    startIcon={icon}
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
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        py: 1.5,
        gap: 2,
      }}
    >
      {/* Left side: Event Overview label - aligned with buttons */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, height: 36 }}>
        <EventOverviewIcon />
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

        {/* Filter Dropdowns with specific icons */}
        <FilterDropdownButton
          label="Facility Providers"
          icon={<ApartmentIcon sx={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.6)' }} />}
        />
        <FilterDropdownButton
          label="Medical Providers"
          icon={<MedicalServicesOutlinedIcon sx={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.6)' }} />}
        />
        <FilterDropdownButton
          label="Parties"
          icon={<PersonOutlineIcon sx={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.6)' }} />}
        />
        <FilterDropdownButton
          label="Event Types"
          icon={<ListIcon sx={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.6)' }} />}
        />

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
                  <EventIcon sx={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.6)' }} />
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
                  <EventIcon sx={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.6)' }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Search */}
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
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
        </Box>

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
