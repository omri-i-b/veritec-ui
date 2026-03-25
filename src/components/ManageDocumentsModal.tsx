import {
  Box,
  Modal,
  Typography,
  IconButton,
  Button,
  Checkbox,
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { colors } from '../theme/theme';

interface Document {
  id: string;
  name: string;
  selected: boolean;
}

const mockDocuments: Document[] = [
  { id: '1', name: 'ali_tom24.pdf', selected: true },
  { id: '2', name: 'ali_tt.pdf', selected: true },
  { id: '3', name: 'alice_tomson.pdf', selected: false },
  { id: '4', name: 'medical_records_2023.pdf', selected: true },
  { id: '5', name: 'lab_results_q4.pdf', selected: true },
  { id: '6', name: 'imaging_report.pdf', selected: false },
  { id: '7', name: 'patient_history.pdf', selected: true },
  { id: '8', name: 'consultation_notes.pdf', selected: true },
  { id: '9', name: 'referral_letter.pdf', selected: true },
  { id: '10', name: 'discharge_summary.pdf', selected: true },
  { id: '11', name: 'prescription_records.pdf', selected: true },
  { id: '12', name: 'insurance_claim.pdf', selected: false },
  { id: '13', name: 'test_results.pdf', selected: true },
];

interface ManageDocumentsModalProps {
  open: boolean;
  onClose: () => void;
  onSave?: (excludedDocIds: string[]) => void;
}

export const ManageDocumentsModal = ({ open, onClose, onSave }: ManageDocumentsModalProps) => {
  const [documents, setDocuments] = useState<Document[]>(mockDocuments);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedCount = documents.filter((d) => d.selected).length;

  const handleToggleSelect = (id: string) => {
    setDocuments((prev) =>
      prev.map((doc) => (doc.id === id ? { ...doc, selected: !doc.selected } : doc))
    );
  };

  const handleSave = () => {
    const excludedIds = documents.filter((d) => !d.selected).map((d) => d.id);
    onSave?.(excludedIds);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 480,
          bgcolor: 'white',
          borderRadius: '8px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <Box sx={{ px: 3, pt: 3, pb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 500,
                color: 'rgba(0,0,0,0.87)',
              }}
            >
              Select Documents
            </Typography>
            <IconButton onClick={onClose} size="small" sx={{ mr: -1 }}>
              <CloseIcon sx={{ fontSize: 20, color: 'rgba(0,0,0,0.54)' }} />
            </IconButton>
          </Box>

          {/* Search Field - Always visible */}
          <TextField
            fullWidth
            placeholder="Search documents"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            size="small"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                backgroundColor: '#f5f5f5',
                '& fieldset': {
                  border: 'none',
                },
                '&:hover fieldset': {
                  border: 'none',
                },
                '&.Mui-focused fieldset': {
                  border: `2px solid ${colors.blue[500]}`,
                },
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

        {/* Document List */}
        <List
          sx={{
            flex: 1,
            overflow: 'auto',
            maxHeight: 360,
            px: 1,
            py: 0,
          }}
        >
          {filteredDocuments.map((doc) => (
            <ListItem key={doc.id} disablePadding>
              <ListItemButton
                onClick={() => handleToggleSelect(doc.id)}
                sx={{
                  py: 1,
                  px: 2,
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.04)',
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <Checkbox
                    checked={doc.selected}
                    edge="start"
                    disableRipple
                    sx={{
                      p: 0,
                      color: 'rgba(0,0,0,0.38)',
                      '&.Mui-checked': {
                        color: colors.blue[500],
                      },
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={doc.name}
                  primaryTypographyProps={{
                    sx: {
                      fontSize: 14,
                      color: 'rgba(0,0,0,0.87)',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* Footer Buttons */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            px: 3,
            py: 2,
            borderTop: '1px solid rgba(0,0,0,0.08)',
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
              fontSize: 14,
              fontWeight: 500,
              height: 40,
              borderRadius: '8px',
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
              fontSize: 14,
              fontWeight: 500,
              height: 40,
              borderRadius: '8px',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: colors.blue[600],
                boxShadow: 'none',
              },
            }}
          >
            Add ({selectedCount})
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
