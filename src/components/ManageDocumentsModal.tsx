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
  Link,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { colors } from '../theme/theme';

interface Document {
  id: string;
  name: string;
  date: string;
  excluded: boolean;
}

const mockDocuments: Document[] = [
  { id: '1', name: 'ali_tom24.pdf', date: '17/12/2023', excluded: false },
  { id: '2', name: 'ali_tt.pdf', date: '17/12/2023', excluded: false },
  { id: '3', name: 'alice_tomson.pdf', date: '15/12/2023', excluded: true },
  { id: '4', name: 'medical_records_2023.pdf', date: '14/12/2023', excluded: false },
  { id: '5', name: 'lab_results_q4.pdf', date: '12/12/2023', excluded: false },
  { id: '6', name: 'imaging_report.pdf', date: '10/12/2023', excluded: true },
  { id: '7', name: 'patient_history.pdf', date: '08/12/2023', excluded: false },
  { id: '8', name: 'consultation_notes.pdf', date: '05/12/2023', excluded: false },
];

interface ManageDocumentsModalProps {
  open: boolean;
  onClose: () => void;
  onSave?: (excludedDocIds: string[]) => void;
}

export const ManageDocumentsModal = ({ open, onClose, onSave }: ManageDocumentsModalProps) => {
  const [documents, setDocuments] = useState<Document[]>(mockDocuments);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectAll, setSelectAll] = useState(false);
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

  const handleToggleExclude = (id: string) => {
    setDocuments((prev) =>
      prev.map((doc) => (doc.id === id ? { ...doc, excluded: !doc.excluded } : doc))
    );
  };

  const handleToggleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setDocuments((prev) => prev.map((doc) => ({ ...doc, excluded: !newSelectAll })));
  };

  const handleSave = () => {
    const excludedIds = documents.filter((d) => d.excluded).map((d) => d.id);
    onSave?.(excludedIds);
    onClose();
  };

  const excludedCount = documents.filter((d) => d.excluded).length;

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700,
          maxHeight: '80vh',
          bgcolor: 'white',
          borderRadius: 1,
          boxShadow: '0px 2px 8px -2px rgba(21,21,21,0.08), 0px 20px 24px -4px rgba(21,21,21,0.08)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <Box sx={{ p: 3, pb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
            <Typography sx={{ fontSize: 24, fontWeight: 400, color: 'rgba(0,0,0,0.87)' }}>
              Manage Documents
            </Typography>
            <IconButton onClick={onClose} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography sx={{ fontSize: 16, color: 'rgba(0,0,0,0.6)', mb: 2 }}>
            Select the documents to exclude from this view
          </Typography>

          {/* Toolbar */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <ListAltIcon sx={{ color: 'rgba(0,0,0,0.54)' }} />
              <Typography sx={{ fontSize: 16, color: 'rgba(0,0,0,0.87)' }}>
                All Documents
              </Typography>
              {excludedCount > 0 && (
                <Typography sx={{ fontSize: 14, color: colors.red[500] }}>
                  ({excludedCount} excluded)
                </Typography>
              )}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button
                variant="outlined"
                startIcon={<FilterAltIcon />}
                sx={{
                  borderColor: '#bebebe',
                  color: 'rgba(0,0,0,0.6)',
                  textTransform: 'none',
                  height: 36,
                }}
              >
                Filters
              </Button>
              <TextField
                placeholder="Search documents..."
                size="small"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{
                  width: 200,
                  '& .MuiOutlinedInput-root': {
                    height: 36,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: 'rgba(0,0,0,0.54)' }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* Table */}
        <TableContainer sx={{ flex: 1, overflow: 'auto' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#fafafa' }}>
                <TableCell padding="checkbox" sx={{ backgroundColor: '#fafafa' }}>
                  <Checkbox
                    checked={selectAll}
                    indeterminate={excludedCount > 0 && excludedCount < documents.length}
                    onChange={handleToggleSelectAll}
                    sx={{
                      color: 'rgba(0,0,0,0.38)',
                      '&.Mui-checked': { color: colors.blue[500] },
                    }}
                  />
                </TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: 14, backgroundColor: '#fafafa' }}>
                  Document Name
                </TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: 14, backgroundColor: '#fafafa' }}>
                  Date Added
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: 600, fontSize: 14, width: 80, backgroundColor: '#fafafa' }}
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedDocuments.map((doc) => (
                <TableRow
                  key={doc.id}
                  hover
                  sx={{
                    backgroundColor: doc.excluded ? 'rgba(0,0,0,0.04)' : 'transparent',
                    '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' },
                  }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={!doc.excluded}
                      onChange={() => handleToggleExclude(doc.id)}
                      sx={{
                        color: 'rgba(0,0,0,0.38)',
                        '&.Mui-checked': { color: colors.blue[500] },
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <InsertDriveFileIcon
                        sx={{
                          fontSize: 20,
                          color: doc.excluded ? 'rgba(0,0,0,0.38)' : colors.blue[500],
                        }}
                      />
                      <Link
                        href="#"
                        underline="hover"
                        sx={{
                          fontSize: 14,
                          color: doc.excluded ? 'rgba(0,0,0,0.38)' : colors.blue[500],
                          textDecoration: doc.excluded ? 'line-through' : 'none',
                        }}
                      >
                        {doc.name}
                      </Link>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{
                        fontSize: 14,
                        color: doc.excluded ? 'rgba(0,0,0,0.38)' : 'rgba(0,0,0,0.87)',
                      }}
                    >
                      {doc.date}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      size="small"
                      onClick={() => handleToggleExclude(doc.id)}
                      sx={{
                        color: doc.excluded ? 'rgba(0,0,0,0.38)' : colors.blue[500],
                      }}
                    >
                      {doc.excluded ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Footer */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2,
            py: 1,
            backgroundColor: '#f5f5f5',
            borderTop: '1px solid rgba(0,0,0,0.12)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography sx={{ fontSize: 12, color: 'rgba(0,0,0,0.6)' }}>Rows per page:</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <Typography sx={{ fontSize: 12, color: 'rgba(0,0,0,0.87)' }}>{rowsPerPage}</Typography>
                <KeyboardArrowDownIcon sx={{ fontSize: 20, color: 'rgba(0,0,0,0.54)' }} />
              </Box>
            </Box>
            <Typography sx={{ fontSize: 12, color: 'rgba(0,0,0,0.87)' }}>
              {(currentPage - 1) * rowsPerPage + 1}-
              {Math.min(currentPage * rowsPerPage, filteredDocuments.length)} of{' '}
              {filteredDocuments.length}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                size="small"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
              >
                <ChevronLeftIcon />
              </IconButton>
              <IconButton
                size="small"
                disabled={currentPage >= totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
              >
                <ChevronRightIcon />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant="outlined"
              onClick={onClose}
              sx={{
                textTransform: 'none',
                borderColor: 'rgba(0,0,0,0.23)',
                color: 'rgba(0,0,0,0.87)',
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
                '&:hover': { backgroundColor: colors.blue[600] },
              }}
            >
              Apply Changes
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
