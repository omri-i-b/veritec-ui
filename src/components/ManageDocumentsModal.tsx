import {
  Box,
  Modal,
  Typography,
  IconButton,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  TextField,
  InputAdornment,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { colors } from '../theme/theme';

interface Document {
  id: string;
  name: string;
  date: string;
  selected: boolean;
}

const mockDocuments: Document[] = [
  { id: '1', name: 'C Short.pdf', date: '3/25/2026', selected: true },
  { id: '2', name: "1475_7_Plf Cobb's Initial Disclosures.pdf", date: '3/25/2026', selected: true },
  { id: '3', name: '904.pdf', date: '3/25/2026', selected: true },
  { id: '4', name: '20 St. Luke\'s Hospital 9.12.24-9.13.24.pdf', date: '3/25/2026', selected: true },
  { id: '5', name: "05-03-23-Docs Produced with Plaintiff's 3rd ...", date: '3/25/2026', selected: false },
  { id: '6', name: 'Medical_Records_2024.pdf', date: '3/24/2026', selected: true },
  { id: '7', name: 'Lab_Results_Q1.pdf', date: '3/23/2026', selected: true },
  { id: '8', name: 'Imaging_Report_MRI.pdf', date: '3/22/2026', selected: true },
  { id: '9', name: 'Consultation_Notes.pdf', date: '3/21/2026', selected: false },
  { id: '10', name: 'Discharge_Summary.pdf', date: '3/20/2026', selected: true },
  { id: '11', name: 'Insurance_Claim_Form.pdf', date: '3/19/2026', selected: true },
  { id: '12', name: 'Prescription_Records.pdf', date: '3/18/2026', selected: true },
  { id: '13', name: 'Physical_Therapy_Notes.pdf', date: '3/17/2026', selected: true },
];

interface ManageDocumentsModalProps {
  open: boolean;
  onClose: () => void;
  onSave?: (hiddenDocIds: string[]) => void;
}

export const ManageDocumentsModal = ({ open, onClose, onSave }: ManageDocumentsModalProps) => {
  const [documents, setDocuments] = useState<Document[]>(mockDocuments);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredDocuments.length / rowsPerPage);
  const paginatedDocuments = filteredDocuments.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const allSelected = paginatedDocuments.every((d) => d.selected);
  const someSelected = paginatedDocuments.some((d) => d.selected) && !allSelected;

  const handleToggleSelect = (id: string) => {
    setDocuments((prev) =>
      prev.map((doc) => (doc.id === id ? { ...doc, selected: !doc.selected } : doc))
    );
  };

  const handleToggleSelectAll = () => {
    const newSelected = !allSelected;
    const pageIds = paginatedDocuments.map((d) => d.id);
    setDocuments((prev) =>
      prev.map((doc) => (pageIds.includes(doc.id) ? { ...doc, selected: newSelected } : doc))
    );
  };

  const handleSave = () => {
    // Send IDs of unchecked (hidden) documents
    const hiddenIds = documents.filter((d) => !d.selected).map((d) => d.id);
    onSave?.(hiddenIds);
    onClose();
  };

  const startIndex = filteredDocuments.length === 0 ? 0 : (currentPage - 1) * rowsPerPage + 1;
  const endIndex = Math.min(currentPage * rowsPerPage, filteredDocuments.length);

  // Reset to page 1 if current page is out of bounds after filtering
  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(1);
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 640,
          bgcolor: 'white',
          borderRadius: 2,
          boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.12)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <Box sx={{ px: 3, pt: 3, pb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 500,
                color: 'rgba(0,0,0,0.87)',
              }}
            >
              Manage Documents
            </Typography>
            <IconButton onClick={onClose} size="small" sx={{ mt: -0.5, mr: -1 }}>
              <CloseIcon sx={{ fontSize: 20, color: 'rgba(0,0,0,0.54)' }} />
            </IconButton>
          </Box>

          <Typography
            sx={{
              fontSize: 14,
              color: 'rgba(0,0,0,0.6)',
              mt: 0.5,
            }}
          >
            Uncheck documents to hide their events from this view
          </Typography>
        </Box>

        {/* Select Documents Section */}
        <Box sx={{ px: 3, pt: 2, pb: 1.5 }}>
          <Typography
            sx={{
              fontSize: 13,
              fontWeight: 500,
              color: 'rgba(0,0,0,0.87)',
              mb: 1,
            }}
          >
            Case Documents
          </Typography>

          {/* Search Field */}
          <TextField
            fullWidth
            placeholder="Search documents..."
            size="small"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                height: 40,
                fontSize: 14,
                '& fieldset': {
                  borderColor: 'rgba(0,0,0,0.23)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(0,0,0,0.4)',
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ fontSize: 20, color: 'rgba(0,0,0,0.54)' }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Table */}
        <TableContainer sx={{ px: 3 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell
                  padding="checkbox"
                  sx={{ borderBottom: '1px solid rgba(0,0,0,0.12)', width: 48 }}
                >
                  <Checkbox
                    checked={allSelected}
                    indeterminate={someSelected}
                    onChange={handleToggleSelectAll}
                    size="small"
                    sx={{
                      color: 'rgba(0,0,0,0.6)',
                      '&.Mui-checked': { color: colors.blue[500] },
                      '&.MuiCheckbox-indeterminate': { color: colors.blue[500] },
                    }}
                  />
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    fontSize: 13,
                    color: 'rgba(0,0,0,0.87)',
                    borderBottom: '1px solid rgba(0,0,0,0.12)',
                  }}
                >
                  Document Name
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    fontSize: 13,
                    color: 'rgba(0,0,0,0.87)',
                    borderBottom: '1px solid rgba(0,0,0,0.12)',
                    width: 100,
                  }}
                >
                  Date
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 500,
                    fontSize: 13,
                    color: 'rgba(0,0,0,0.87)',
                    borderBottom: '1px solid rgba(0,0,0,0.12)',
                    width: 60,
                  }}
                >
                  View
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedDocuments.map((doc) => (
                <TableRow
                  key={doc.id}
                  hover
                  sx={{
                    '&:hover': { backgroundColor: 'rgba(0,0,0,0.02)' },
                  }}
                >
                  <TableCell
                    padding="checkbox"
                    sx={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}
                  >
                    <Checkbox
                      checked={doc.selected}
                      onChange={() => handleToggleSelect(doc.id)}
                      size="small"
                      sx={{
                        color: 'rgba(0,0,0,0.6)',
                        '&.Mui-checked': { color: colors.blue[500] },
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                    <Typography
                      sx={{
                        fontSize: 13,
                        color: 'rgba(0,0,0,0.87)',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        maxWidth: 320,
                      }}
                    >
                      {doc.name}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                    <Typography sx={{ fontSize: 13, color: 'rgba(0,0,0,0.87)' }}>
                      {doc.date}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" sx={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                    <IconButton
                      size="small"
                      onClick={() => handleToggleSelect(doc.id)}
                      sx={{ p: 0.5 }}
                    >
                      {doc.selected ? (
                        <VisibilityOutlinedIcon sx={{ fontSize: 18, color: 'rgba(0,0,0,0.54)' }} />
                      ) : (
                        <VisibilityOffOutlinedIcon sx={{ fontSize: 18, color: 'rgba(0,0,0,0.38)' }} />
                      )}
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 2,
            px: 3,
            py: 1.5,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography sx={{ fontSize: 13, color: 'rgba(0,0,0,0.6)' }}>
              Rows per page:
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <Typography sx={{ fontSize: 13, color: 'rgba(0,0,0,0.87)' }}>
                {rowsPerPage}
              </Typography>
              <KeyboardArrowDownIcon sx={{ fontSize: 18, color: 'rgba(0,0,0,0.54)', ml: -0.25 }} />
            </Box>
          </Box>
          <Typography sx={{ fontSize: 13, color: 'rgba(0,0,0,0.6)' }}>
            {startIndex}-{endIndex} of {filteredDocuments.length}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="small"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              sx={{ p: 0.25 }}
            >
              <ChevronLeftIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton
              size="small"
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              sx={{ p: 0.25 }}
            >
              <ChevronRightIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>
        </Box>

        {/* Footer Buttons */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 1.5,
            px: 3,
            py: 2,
            borderTop: '1px solid rgba(0,0,0,0.08)',
          }}
        >
          <Button
            variant="text"
            onClick={onClose}
            sx={{
              textTransform: 'none',
              color: colors.blue[500],
              fontSize: 14,
              fontWeight: 500,
              px: 2,
              '&:hover': {
                backgroundColor: 'rgba(33, 150, 243, 0.04)',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              textTransform: 'none',
              backgroundColor: colors.blue[500],
              fontSize: 14,
              fontWeight: 500,
              height: 36,
              px: 3,
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: colors.blue[600],
                boxShadow: 'none',
              },
            }}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
