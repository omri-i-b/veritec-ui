import { Box, Tabs, Tab, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CaseHeader } from '../components/CaseHeader';
import { FilterToolbar } from '../components/FilterToolbar';
import { EventsTable } from '../components/EventsTable';
import { colors } from '../theme/theme';

// Main tabs
const mainTabs = ['Overview', 'Events', 'Documents', 'Billing', 'DocIntel'];

// Sub-tabs for Events
const eventSubTabs = [
  { label: 'All (117)', value: 'all' },
  { label: 'Visits', value: 'visits' },
  { label: 'Data gaps', value: 'gaps' },
];

export const EventsPage = () => {
  const [mainTab, setMainTab] = useState(1); // Events tab active
  const [eventTab, setEventTab] = useState('all');

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
                  '&.Mui-selected': {
                    color: colors.blue[500],
                  },
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: colors.blue[500],
                },
              }}
            >
              {mainTabs.map((tab) => (
                <Tab key={tab} label={tab} />
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
          <EventsTable />
        </Box>
      </Box>
    </Box>
  );
};
