import { Box, Tabs, Tab, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CaseHeader } from '../components/CaseHeader';
import { FilterToolbar } from '../components/FilterToolbar';
import { EventsTable } from '../components/EventsTable';
import { Pagination } from '../components/Pagination';
import { colors } from '../theme/theme';

// Main tabs with completion status
const mainTabs = [
  { label: 'Overview', completed: true },
  { label: 'Events', completed: true },
  { label: 'Documents', completed: true },
  { label: 'Drafting', completed: false },
  { label: 'Report', completed: false },
  { label: 'Indexing', completed: false },
  { label: 'Billing', completed: false },
  { label: 'Case Settings', completed: false },
];

// Sub-tabs for Events
const eventSubTabs = [
  { label: 'All (117)', value: 'all' },
  { label: 'Visits', value: 'visits' },
  { label: 'Data gaps', value: 'gaps' },
];

export const EventsPage = () => {
  const [mainTab, setMainTab] = useState(1); // Events tab active
  const [eventTab, setEventTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const totalPages = 12; // Mock total pages

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
        <Box sx={{ p: 3 }}>
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: 'MedChron', href: '#' },
              { label: 'All Cases', href: '#' },
              { label: '2021-DCL-01187' },
            ]}
          />

          {/* Case Header */}
          <CaseHeader caseId="2021-DCL-01187" status="Processed" />

          {/* Main Tabs */}
          <Box sx={{ borderBottom: 1, borderColor: colors.grey[200], mb: 2 }}>
            <Tabs
              value={mainTab}
              onChange={(_, newValue) => setMainTab(newValue)}
              sx={{
                '& .MuiTab-root': {
                  fontSize: 14,
                  fontWeight: 500,
                  color: colors.grey[600],
                  minHeight: 48,
                  '&.Mui-selected': {
                    color: colors.blue[500],
                  },
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: colors.blue[500],
                },
              }}
            >
              {mainTabs.map((tab, index) => (
                <Tab
                  key={tab.label}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      {tab.completed && (
                        <CheckCircleIcon
                          sx={{
                            fontSize: 16,
                            color: index === mainTab ? colors.blue[500] : colors.green[500],
                          }}
                        />
                      )}
                      {tab.label}
                    </Box>
                  }
                />
              ))}
            </Tabs>
          </Box>

          {/* Filter Toolbar */}
          <FilterToolbar />

          {/* Event Sub-tabs */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mt: 2,
              mb: 2,
            }}
          >
            <Tabs
              value={eventTab}
              onChange={(_, newValue) => setEventTab(newValue)}
              sx={{
                minHeight: 36,
                '& .MuiTab-root': {
                  minHeight: 36,
                  fontSize: 13,
                  fontWeight: 500,
                  color: colors.grey[600],
                  padding: '8px 12px',
                  '&.Mui-selected': {
                    color: colors.blue[500],
                  },
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: colors.blue[500],
                },
              }}
            >
              {eventSubTabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </Tabs>

            <Button
              variant="text"
              size="small"
              startIcon={<AddIcon sx={{ fontSize: 18 }} />}
              sx={{
                color: colors.blue[500],
                fontSize: 13,
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: colors.blue[50],
                },
              }}
            >
              Create new
            </Button>
          </Box>

          {/* Events Table */}
          <Box
            sx={{
              border: `1px solid ${colors.grey[200]}`,
              borderRadius: 2,
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
    </Box>
  );
};
