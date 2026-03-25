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
  Link,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
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
  { id: '1', name: 'at_23.pdf', date: '17/12/2023', selected: false },
  { id: '2', name: 'at_2023.pdf', date: '17/12/2023', selected: false },
  { id: '3', name: 'alicet_24.pdf', date: '17/12/2023', selected: true },
  { id: '4', name: 'at_23.pdf', date: '17/12/2023', selected: false },
  { id: '5', name: 'at_2023.pdf', date: '17/12/2023', selected: false },
  { id: '6', name: 'at_23.pdf', date: '17/12/2023', selected: false },
  { id: '7', name: 'at_2023.pdf', date: '17/12/2023', selected: false },
  { id: '8', name: 'at_23.pdf', date: '17/12/2023', selected: false },
  { id: '9', name: 'at_23.pdf', date: '17/12/2023', selected: false },
  { id: '10', name: 'at_2023.pdf', date: '17/12/2023', selected: false },
  { id: '11', name: 'at_23.pdf', date: '17/12/2023', selected: false },
  { id: '12', name: 'at_2023.pdf', date: '17/12/2023', selected: false },
  { id: '13', name: 'at_23.pdf', date: '17/12/2023', selected: false },
];

interface ManageDocumentsModalProps {
  open: boolean;
  onClose: () => void;
  onSave?: (selectedDocIds: string[]) => void;
}

export const ManageDocumentsModal = ({ open, onClose, onSave }: ManageDocumentsModalProps) => {
  const [documents, setDocuments] = useState<Document[]>(mockDocuments);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const totalPages = Math.ceil(documents.length / rowsPerPage);
  const paginatedDocuments = documents.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const selectedCount = documents.filter((d) => d.selected).length;
  const allSelected = selectedCount === documents.length;
  const someSelected = selectedCount > 0 && selectedCount < documents.length;

  const handleToggleSelect = (id: string) => {
    setDocuments((prev) =>
      prev.map((doc) => (doc.id === id ? { ...doc, selected: !doc.selected } : doc))
    );
  };

  const handleToggleSelectAll = () => {
    const newSelected = !allSelected;
    setDocuments((prev) => prev.map((doc) => ({ ...doc, selected: newSelected })));
  };

  const handleSave = () => {
    const selectedIds = documents.filter((d) => d.selected).map((d) => d.id);
    onSave?.(selectedIds);
    onClose();
  };

  const startIndex = (currentPage - 1) * rowsPerPage + 1;
  const endIndex = Math.min(currentPage * rowsPerPage, documents.length);

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 960,
          bgcolor: 'white',
          borderRadius: '4px',
          boxShadow: '0px 2px 8px -2px rgba(21,21,21,0.08), 0px 20px 24px -4px rgba(21,21,21,0.08)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Content Section */}
        <Box sx={{ p: 4, pb: 3 }}>
          {/* Header */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 400,
                lineHeight: 1.334,
                color: '#171a1c',
              }}
            >
              Manage Documents
            </Typography>
            <IconButton onClick={onClose} size="small" sx={{ mt: -0.5, mr: -0.5 }}>
              <CloseIcon sx={{ fontSize: 24, color: 'rgba(0,0,0,0.54)' }} />
            </IconButton>
          </Box>

          {/* Subtitle */}
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.5,
              color: '#32383e',
              letterSpacing: '0.15px',
              mb: 2,
            }}
          >
            Select the documents you want to use in chat
          </Typography>

          {/* Toolbar */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2, height: 36 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <ListAltOutlinedIcon sx={{ fontSize: 24, color: 'rgba(0,0,0,0.54)' }} />
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 1.5,
                  color: 'rgba(0,0,0,0.87)',
                  letterSpacing: '0.15px',
                }}
              >
                All Documents
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button
                variant="outlined"
                startIcon={<FilterAltOutlinedIcon sx={{ fontSize: 24 }} />}
                sx={{
                  borderColor: '#bebebe',
                  color: 'rgba(0,0,0,0.6)',
                  textTransform: 'none',
                  height: 36,
                  fontSize: 14,
                  fontWeight: 400,
                  px: 1.5,
                  '&:hover': {
                    borderColor: '#9e9e9e',
                    backgroundColor: 'rgba(0,0,0,0.04)',
                  },
                }}
              >
                Filters
              </Button>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  border: '1px solid #bebebe',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  '&:hover': {
                    borderColor: '#9e9e9e',
                    backgroundColor: 'rgba(0,0,0,0.04)',
                  },
                }}
              >
                <ManageSearchIcon sx={{ fontSize: 24, color: 'rgba(0,0,0,0.54)' }} />
              </Box>
            </Box>
          </Box>

          {/* Table */}
          <TableContainer sx={{ border: 'none' }}>
            <Table>
              <TableHead>
                <TableRow sx={{ borderBottom: '1px solid rgba(0,0,0,0.12)' }}>
                  <TableCell padding="none" sx={{ width: 48, py: 0.75, px: 2, borderBottom: '1px solid rgba(0,0,0,0.12)' }}>
                    <Checkbox
                      checked={allSelected}
                      indeterminate={someSelected}
                      onChange={handleToggleSelectAll}
                      sx={{
                        p: 0,
                        color: 'rgba(0,0,0,0.6)',
                        '&.Mui-checked': { color: colors.blue[500] },
                        '&.MuiCheckbox-indeterminate': { color: colors.blue[500] },
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ fontWeight: 500, fontSize: 14, color: 'rgba(0,0,0,0.87)', py: 0.75, borderBottom: '1px solid rgba(0,0,0,0.12)' }}>
                    Document name
                  </TableCell>
                  <TableCell sx={{ fontWeight: 500, fontSize: 14, color: 'rgba(0,0,0,0.87)', py: 0.75, borderBottom: '1px solid rgba(0,0,0,0.12)' }}>
                    Upload date
                  </TableCell>
                  <TableCell sx={{ width: 48, py: 0.75, borderBottom: '1px solid rgba(0,0,0,0.12)' }} />
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedDocuments.map((doc) => (
                  <TableRow
                    key={doc.id}
                    sx={{
                      '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' },
                      borderBottom: '1px solid rgba(0,0,0,0.12)',
                    }}
                  >
                    <TableCell padding="none" sx={{ width: 48, py: 1, px: 2, borderBottom: '1px solid rgba(0,0,0,0.12)' }}>
                      <Checkbox
                        checked={doc.selected}
                        onChange={() => handleToggleSelect(doc.id)}
                        sx={{
                          p: 0,
                          color: 'rgba(0,0,0,0.6)',
                          '&.Mui-checked': { color: colors.blue[500] },
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ py: 1, borderBottom: '1px solid rgba(0,0,0,0.12)' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <InsertDriveFileOutlinedIcon
                          sx={{ fontSize: 24, color: 'rgba(0,0,0,0.54)' }}
                        />
                        <Link
                          href="#"
                          underline="hover"
                          sx={{
                            fontSize: 16,
                            color: colors.blue[500],
                            lineHeight: 1.5,
                            letterSpacing: '0.15px',
                          }}
                        >
                          {doc.name}
                        </Link>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ py: 1, borderBottom: '1px solid rgba(0,0,0,0.12)' }}>
                      <Typography
                        sx={{
                          fontSize: 14,
                          color: 'rgba(0,0,0,0.87)',
                          lineHeight: 1.43,
                          letterSpacing: '0.17px',
                        }}
                      >
                        {doc.date}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ width: 48, py: 1, borderBottom: '1px solid rgba(0,0,0,0.12)' }}>
                      <IconButton size="small" sx={{ p: 1 }}>
                        <VisibilityOutlinedIcon sx={{ fontSize: 24, color: 'rgba(0,0,0,0.54)' }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination Footer */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: 3,
              py: 0.5,
              backgroundColor: '#f5f5f5',
              mx: -4,
              px: 4,
              mt: 0,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography
                sx={{
                  fontSize: 12,
                  color: 'rgba(0,0,0,0.6)',
                  lineHeight: 1.66,
                  letterSpacing: '0.4px',
                }}
              >
                Rows per page:
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <Typography
                  sx={{
                    fontSize: 12,
                    color: 'rgba(0,0,0,0.87)',
                    lineHeight: 1.66,
                    letterSpacing: '0.4px',
                  }}
                >
                  {rowsPerPage}
                </Typography>
                <KeyboardArrowDownIcon sx={{ fontSize: 24, color: 'rgba(0,0,0,0.54)' }} />
              </Box>
            </Box>
            <Typography
              sx={{
                fontSize: 12,
                color: 'rgba(0,0,0,0.87)',
                lineHeight: 1.66,
                letterSpacing: '0.4px',
              }}
            >
              {startIndex}-{endIndex} of {documents.length}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                size="small"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                sx={{ p: 1 }}
              >
                <ChevronLeftIcon sx={{ fontSize: 24 }} />
              </IconButton>
              <IconButton
                size="small"
                disabled={currentPage >= totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                sx={{ p: 1 }}
              >
                <ChevronRightIcon sx={{ fontSize: 24 }} />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Bottom Buttons */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            p: 4,
            pt: 2,
          }}
        >
          <Button
            variant="outlined"
            fullWidth
            onClick={onClose}
            sx={{
              textTransform: 'none',
              borderColor: colors.blue[500],
              color: colors.blue[500],
              fontSize: 15,
              fontWeight: 500,
              height: 42,
              '&:hover': {
                borderColor: colors.blue[600],
                backgroundColor: 'rgba(33, 150, 243, 0.04)',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            fullWidth
            onClick={handleSave}
            sx={{
              textTransform: 'none',
              backgroundColor: colors.blue[500],
              fontSize: 15,
              fontWeight: 500,
              height: 42,
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
