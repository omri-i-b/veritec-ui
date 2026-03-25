import { Box, Tabs, Tab } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CaseHeader } from '../components/CaseHeader';
import { FilterToolbarWithDocs } from '../components/FilterToolbarWithDocs';
import { EventsTable } from '../components/EventsTable';
import { Pagination } from '../components/Pagination';
import { ManageDocumentsModal } from '../components/ManageDocumentsModal';
import { colors } from '../theme/theme';

// Main tabs with completion status
const mainTabs = [
  { label: 'Overview', completed: true },
  { label: 'Events', completed: true },
  { label: 'Documents', completed: false },
  { label: 'Billing', completed: false },
  { label: 'DocIntel', completed: false },
  { label: 'Drafting', completed: false },
  { label: 'Report', completed: false },
  { label: 'Indexing', completed: false },
  { label: 'Case Settings', completed: false },
  { label: 'Deposition', completed: false },
];

export const DocumentFilterPage = () => {
  const [mainTab, setMainTab] = useState(1); // Events tab active
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [modalOpen, setModalOpen] = useState(false);
  const [excludedDocs, setExcludedDocs] = useState<string[]>([]);
  const totalPages = 12; // Mock total pages

  const handleSaveExclusions = (excludedDocIds: string[]) => {
    setExcludedDocs(excludedDocIds);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          ml: '56px', // Sidebar width
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Content Area */}
        <Box sx={{ px: 3, py: 2 }}>
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: 'MedChron', href: '#' },
              { label: 'All Cases', href: '#' },
              { label: 'TEST CASE-20260325102623-RUN1' },
            ]}
          />

          {/* Case Header */}
          <CaseHeader caseId="TEST CASE-20260325102623-RUN1" />

          {/* Main Tabs */}
          <Box sx={{ borderBottom: 1, borderColor: 'rgba(0, 0, 0, 0.12)', mb: 1 }}>
            <Tabs
              value={mainTab}
              onChange={(_, newValue) => setMainTab(newValue)}
              sx={{
                minHeight: 48,
                '& .MuiTab-root': {
                  fontSize: 14,
                  fontWeight: 500,
                  color: 'rgba(0, 0, 0, 0.6)',
                  minHeight: 48,
                  padding: '12px 16px',
                  textTransform: 'none',
                  '&.Mui-selected': {
                    color: colors.blue[500],
                  },
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: colors.blue[500],
                  height: 2,
                },
              }}
            >
              {mainTabs.map((tab) => (
                <Tab
                  key={tab.label}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                      {tab.label}
                      {tab.completed && (
                        <CheckCircleIcon
                          sx={{
                            fontSize: 20,
                            color: '#4CAF50', // Green from Figma
                          }}
                        />
                      )}
                    </Box>
                  }
                />
              ))}
            </Tabs>
          </Box>

          {/* Filter Toolbar with Documents Filter */}
          <FilterToolbarWithDocs
            excludedDocsCount={excludedDocs.length}
            onManageDocuments={() => setModalOpen(true)}
            onClearDocumentFilter={() => setExcludedDocs([])}
          />

          {/* Events Table */}
          <Box
            sx={{
              mt: 1.5,
              border: `1px solid ${colors.grey[200]}`,
              borderRadius: 1,
              overflow: 'hidden',
            }}
          >
            <EventsTable />
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              rowsPerPage={rowsPerPage}
              onPageChange={setCurrentPage}
              onRowsPerPageChange={setRowsPerPage}
            />
          </Box>
        </Box>
      </Box>

      {/* Manage Documents Modal */}
      <ManageDocumentsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveExclusions}
      />
    </Box>
  );
};
