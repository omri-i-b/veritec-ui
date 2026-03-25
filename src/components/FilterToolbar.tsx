import { Box, Button, Switch, FormControlLabel, Menu, MenuItem, Chip, TextField, InputAdornment, Typography } from '@mui/material';
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { colors } from '../theme/theme';

const FilterButton = ({ label, hasIcon = true }: { label: string; hasIcon?: boolean }) => (
  <Button
    variant="outlined"
    size="small"
    startIcon={hasIcon ? <AddIcon sx={{ fontSize: 16 }} /> : undefined}
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
        borderBottom: `1px solid ${colors.grey[200]}`,
        gap: 2,
      }}
    >
      {/* Left side: Title and filters */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
        {/* Event Overview label */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <TableRowsRoundedIcon sx={{ color: colors.grey[500], fontSize: 18 }} />
          <Typography sx={{ fontSize: 13, fontWeight: 500, color: colors.grey[900] }}>
            Event Overview
          </Typography>
        </Box>

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
            <Typography sx={{ fontSize: 12, color: colors.grey[700] }}>
              Show only relevant events
            </Typography>
          }
          sx={{ ml: 1, mr: 0 }}
        />

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
            <Typography sx={{ fontSize: 12, color: colors.grey[700] }}>
              Hide duplicates
            </Typography>
          }
          sx={{ ml: 0, mr: 0 }}
        />

        {/* Filter Buttons */}
        <FilterButton label="Facility Providers" />
        <FilterButton label="Medical Providers" />
        <FilterButton label="Parties" />
        <FilterButton label="Event Types" />
      </Box>

      {/* Right side: Date pickers, search, view, export */}
      <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1.5 }}>
        {/* Start Date */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography sx={{ fontSize: 11, color: colors.grey[500] }}>Start</Typography>
          <TextField
            placeholder="MM/DD/YYYY"
            size="small"
            sx={{
              width: 110,
              '& .MuiOutlinedInput-root': {
                height: 32,
                fontSize: 12,
                '& fieldset': {
                  borderColor: colors.grey[300],
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
        </Box>

        <Typography sx={{ fontSize: 12, color: colors.grey[400], mb: 0.8 }}>-</Typography>

        {/* End Date */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography sx={{ fontSize: 11, color: colors.grey[500] }}>End</Typography>
          <TextField
            placeholder="MM/DD/YYYY"
            size="small"
            sx={{
              width: 110,
              '& .MuiOutlinedInput-root': {
                height: 32,
                fontSize: 12,
                '& fieldset': {
                  borderColor: colors.grey[300],
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
        </Box>

        {/* Search */}
        <TextField
          placeholder="Search"
          size="small"
          sx={{
            width: 120,
            '& .MuiOutlinedInput-root': {
              height: 32,
              fontSize: 12,
              '& fieldset': {
                borderColor: colors.grey[300],
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ fontSize: 16, color: colors.grey[400] }} />
              </InputAdornment>
            ),
          }}
        />

        {/* View Dropdown */}
        <Button
          variant="outlined"
          size="small"
          endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 18 }} />}
          onClick={(e) => setViewAnchor(e.currentTarget)}
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

        {/* Export Button */}
        <Button
          variant="contained"
          size="small"
          startIcon={<FileDownloadRoundedIcon sx={{ fontSize: 16 }} />}
          endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 18 }} />}
          sx={{
            backgroundColor: colors.blue[500],
            fontSize: 12,
            fontWeight: 500,
            height: 32,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: colors.blue[600],
            },
          }}
        >
          Export
        </Button>
      </Box>
    </Box>
  );
};
