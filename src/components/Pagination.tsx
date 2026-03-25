import { Box, Select, MenuItem, IconButton, TextField, Typography } from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from 'react';
import { colors } from '../theme/theme';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rows: number) => void;
}

export const Pagination = ({
  totalPages,
  currentPage,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}: PaginationProps) => {
  const [pageInput, setPageInput] = useState(currentPage.toString());

  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageInput(e.target.value);
  };

  const handlePageInputBlur = () => {
    const page = parseInt(pageInput, 10);
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    } else {
      setPageInput(currentPage.toString());
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 2,
        py: 1.5,
        px: 3,
        backgroundColor: colors.grey[100],
        borderTop: `1px solid ${colors.grey[200]}`,
      }}
    >
      {/* Rows per page */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography sx={{ fontSize: 14, color: colors.grey[600] }}>
          Rows per page:
        </Typography>
        <Select
          value={rowsPerPage}
          onChange={(e) => onRowsPerPageChange(e.target.value as number)}
          size="small"
          sx={{
            minWidth: 70,
            height: 32,
            fontSize: 14,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.grey[300],
            },
          }}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </Box>

      {/* First/Previous buttons */}
      <IconButton
        size="small"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        sx={{ color: colors.grey[600] }}
      >
        <FirstPageIcon fontSize="small" />
      </IconButton>
      <IconButton
        size="small"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        sx={{ color: colors.grey[600] }}
      >
        <ChevronLeftIcon fontSize="small" />
      </IconButton>

      {/* Page input */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography sx={{ fontSize: 14, color: colors.grey[900] }}>Page</Typography>
        <TextField
          value={pageInput}
          onChange={handlePageInputChange}
          onBlur={handlePageInputBlur}
          onKeyDown={(e) => e.key === 'Enter' && handlePageInputBlur()}
          size="small"
          sx={{
            width: 50,
            '& .MuiOutlinedInput-root': {
              height: 28,
              fontSize: 14,
            },
            '& .MuiOutlinedInput-input': {
              textAlign: 'center',
              padding: '4px 8px',
            },
          }}
        />
        <Typography sx={{ fontSize: 14, color: colors.grey[900] }}>
          of {totalPages}
        </Typography>
      </Box>

      {/* Next/Last buttons */}
      <IconButton
        size="small"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        sx={{ color: colors.grey[600] }}
      >
        <ChevronRightIcon fontSize="small" />
      </IconButton>
      <IconButton
        size="small"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        sx={{ color: colors.grey[600] }}
      >
        <LastPageIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};
