import { Box, Button, Switch, FormControlLabel, Menu, MenuItem, IconButton, Chip, TextField, InputAdornment } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ViewColumnRoundedIcon from '@mui/icons-material/ViewColumnRounded';
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { colors } from '../theme/theme';

const FilterChip = ({
  label,
  onDelete
}: {
  label: string;
  onDelete?: () => void;
}) => (
  <Chip
    label={label}
    size="small"
    onDelete={onDelete}
    deleteIcon={onDelete ? <CloseIcon sx={{ fontSize: 14 }} /> : undefined}
    sx={{
      height: 28,
      fontSize: 12,
      fontWeight: 500,
      backgroundColor: colors.grey[100],
      color: colors.grey[700],
      borderRadius: '6px',
      '& .MuiChip-deleteIcon': {
        color: colors.grey[500],
        '&:hover': {
          color: colors.grey[700],
        },
      },
    }}
  />
);

const FilterDropdown = ({
  label,
  value
}: {
  label: string;
  value?: string;
}) => (
  <Button
    variant="outlined"
    size="small"
    endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 18 }} />}
    sx={{
      borderColor: colors.grey[300],
      color: colors.grey[700],
      fontSize: 12,
      fontWeight: 500,
      height: 28,
      minWidth: 'auto',
      '&:hover': {
        borderColor: colors.grey[400],
        backgroundColor: colors.grey[50],
      },
    }}
  >
    {label}
    {value && (
      <Chip
        label={value}
        size="small"
        sx={{
          ml: 0.5,
          height: 18,
          fontSize: 10,
          backgroundColor: colors.blue[500],
          color: '#FFFFFF',
        }}
      />
    )}
  </Button>
);

export const FilterToolbar = () => {
  const [viewAnchor, setViewAnchor] = useState<null | HTMLElement>(null);
  const [showRelevant, setShowRelevant] = useState(false);
  const [hideDuplicates, setHideDuplicates] = useState(true);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
      {/* Main Toolbar Row */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 1.5,
          borderBottom: `1px solid ${colors.grey[200]}`,
        }}
      >
        {/* Left side: Title */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TableRowsRoundedIcon sx={{ color: colors.grey[500], fontSize: 20 }} />
          <span style={{ fontSize: 14, fontWeight: 500, color: colors.grey[900] }}>
            Event overview
          </span>
        </Box>

        {/* Right side: Filters and Actions */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          {/* Filters Button */}
          <Button
            variant="outlined"
            size="small"
            startIcon={<FilterAltIcon sx={{ fontSize: 18 }} />}
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
            Filters
          </Button>

          {/* Show Only Relevant Toggle */}
          <FormControlLabel
            control={
              <Switch
                size="small"
                checked={showRelevant}
                onChange={(e) => setShowRelevant(e.target.checked)}
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: colors.blue[500],
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: colors.blue[500],
                  },
                }}
              />
            }
            label={
              <span style={{ fontSize: 13, color: colors.grey[700] }}>
                Show only relevant events
              </span>
            }
            sx={{ ml: 0, mr: 0 }}
          />

          {/* View Dropdown */}
          <Button
            variant="outlined"
            size="small"
            endIcon={<KeyboardArrowDownIcon />}
            onClick={(e) => setViewAnchor(e.currentTarget)}
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
            View:
            <Chip
              label="Default"
              size="small"
              sx={{
                ml: 0.5,
                height: 20,
                fontSize: 11,
                backgroundColor: colors.blue[500],
                color: '#FFFFFF',
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

          {/* View Toggle Icons */}
          <IconButton
            size="small"
            sx={{
              color: colors.grey[500],
              '&:hover': { backgroundColor: colors.grey[100] },
            }}
          >
            <TableRowsRoundedIcon fontSize="small" />
          </IconButton>

          <IconButton
            size="small"
            sx={{
              color: colors.grey[500],
              '&:hover': { backgroundColor: colors.grey[100] },
            }}
          >
            <ViewColumnRoundedIcon fontSize="small" />
          </IconButton>

          {/* Export Button */}
          <Button
            variant="contained"
            size="small"
            startIcon={<FileDownloadRoundedIcon sx={{ fontSize: 18 }} />}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              backgroundColor: colors.blue[500],
              fontSize: 13,
              fontWeight: 500,
              '&:hover': {
                backgroundColor: colors.blue[600],
              },
            }}
          >
            Export
          </Button>
        </Box>
      </Box>

      {/* Filter Chips Row */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          flexWrap: 'wrap',
          pb: 1,
        }}
      >
        {/* Hide Duplicates Toggle */}
        <FormControlLabel
          control={
            <Switch
              size="small"
              checked={hideDuplicates}
              onChange={(e) => setHideDuplicates(e.target.checked)}
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: colors.blue[500],
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: colors.blue[500],
                },
              }}
            />
          }
          label={
            <span style={{ fontSize: 12, color: colors.grey[700] }}>
              Hide duplicates
            </span>
          }
          sx={{ ml: 0, mr: 1 }}
        />

        {/* Date Range Pickers */}
        <TextField
          placeholder="Start date"
          size="small"
          sx={{
            width: 130,
            '& .MuiOutlinedInput-root': {
              height: 28,
              fontSize: 12,
              backgroundColor: colors.grey[50],
              '& fieldset': {
                borderColor: colors.grey[200],
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CalendarTodayIcon sx={{ fontSize: 14, color: colors.grey[400] }} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          placeholder="End date"
          size="small"
          sx={{
            width: 130,
            '& .MuiOutlinedInput-root': {
              height: 28,
              fontSize: 12,
              backgroundColor: colors.grey[50],
              '& fieldset': {
                borderColor: colors.grey[200],
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CalendarTodayIcon sx={{ fontSize: 14, color: colors.grey[400] }} />
              </InputAdornment>
            ),
          }}
        />

        {/* Divider */}
        <Box sx={{ width: 1, height: 20, backgroundColor: colors.grey[200], mx: 0.5 }} />

        {/* Filter Dropdowns */}
        <FilterDropdown label="Facility Providers" />
        <FilterDropdown label="Medical Providers" />
        <FilterDropdown label="Parties" />
        <FilterDropdown label="Event Types" />

        {/* Active Filter Chips (example) */}
        <FilterChip label="All Facilities" onDelete={() => {}} />
      </Box>
    </Box>
  );
};
