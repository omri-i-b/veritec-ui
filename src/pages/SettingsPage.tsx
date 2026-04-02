import { Box, Tabs, Tab, Typography, Button, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { colors } from '../theme/theme';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import FolderIcon from '@mui/icons-material/Folder';
import GavelIcon from '@mui/icons-material/Gavel';
import ShareIcon from '@mui/icons-material/Share';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LinkIcon from '@mui/icons-material/Link';
import OutputIcon from '@mui/icons-material/Output';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

// Settings navigation items
const settingsNavItems = [
  { label: 'General', icon: SettingsIcon },
  { label: 'Team Members', icon: GroupIcon },
  { label: 'FileFlow', icon: FolderIcon },
  { label: 'LitHub', icon: GavelIcon },
  { label: 'Sharing', icon: ShareIcon },
  { label: 'API Keys', icon: VpnKeyIcon },
];

// FileFlow tabs
const fileFlowTabs = ['Settings', 'Sources', 'Destinations', 'Structure & Rules', 'Calendars', 'Usage'];

// LitHub tabs
const litHubTabs = ['Billing', 'Medical Events', 'DocIntel', 'Drafting', 'Reports', 'Statuses', 'Tags', 'Keywords', 'Prompt Library', 'Usage'];

// Checklist items
const checklistItems = [
  { label: 'Settings', icon: SettingsIcon, completed: true },
  { label: 'Sources', icon: LinkIcon, active: true },
  { label: 'Destinations', icon: OutputIcon, completed: false },
  { label: 'Structure & Rules', icon: AccountTreeIcon, completed: false },
];

export const SettingsPage = () => {
  const [activeNav, setActiveNav] = useState('FileFlow');
  const [activeTab, setActiveTab] = useState(1); // Sources tab active (FileFlow)
  const [litHubTab, setLitHubTab] = useState(0); // Billing tab active (LitHub)

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#FFFEFC' }}>
      {/* Main Sidebar */}
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
              { label: 'Veritec AI', href: '#' },
              { label: 'Company Settings', href: '#' },
              { label: activeNav },
            ]}
          />

          {/* Page Title */}
          <Typography
            variant="h4"
            sx={{
              fontSize: 24,
              fontWeight: 400,
              color: '#000',
              mt: 2,
              mb: 3,
            }}
          >
            Company Settings
          </Typography>

          {/* Settings Layout */}
          <Box sx={{ display: 'flex', gap: 3 }}>
            {/* Settings Navigation */}
            <Box sx={{ width: 280, flexShrink: 0 }}>
              <List sx={{ pt: 1 }}>
                {settingsNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeNav === item.label;
                  return (
                    <ListItemButton
                      key={item.label}
                      selected={isActive}
                      onClick={() => setActiveNav(item.label)}
                      sx={{
                        borderRadius: 2,
                        mb: 1,
                        py: 1.5,
                        backgroundColor: isActive ? 'rgba(33, 150, 243, 0.08)' : 'transparent',
                        '&:hover': {
                          backgroundColor: isActive ? 'rgba(33, 150, 243, 0.12)' : 'rgba(0, 0, 0, 0.04)',
                        },
                        '&.Mui-selected': {
                          backgroundColor: 'rgba(33, 150, 243, 0.08)',
                        },
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <Icon sx={{ color: isActive ? '#2196F3' : 'rgba(0, 0, 0, 0.54)' }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: 16,
                          fontWeight: isActive ? 600 : 400,
                          color: isActive ? '#2196F3' : '#000',
                        }}
                      />
                    </ListItemButton>
                  );
                })}
              </List>
            </Box>

            {/* Main Content Panel */}
            <Box
              sx={{
                flex: 1,
                backgroundColor: '#fff',
                border: '1px solid #E1E1E1',
                borderRadius: 1,
                overflow: 'hidden',
              }}
            >
              {/* FileFlow Content */}
              {activeNav === 'FileFlow' && (
                <Box sx={{ backgroundColor: '#F5F5F5', display: 'flex' }}>
                  {/* Content Area */}
                  <Box sx={{ flex: 1, backgroundColor: '#fff' }}>
                    {/* Section Header */}
                    <Box sx={{ px: 3, pt: 2 }}>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: 500,
                          color: '#000',
                          mb: 2,
                        }}
                      >
                        FileFlow
                      </Typography>

                      {/* Tabs */}
                      <Tabs
                        value={activeTab}
                        onChange={(_, newValue) => setActiveTab(newValue)}
                        sx={{
                          minHeight: 42,
                          '& .MuiTab-root': {
                            fontSize: 14,
                            fontWeight: 400,
                            color: '#666',
                            minHeight: 42,
                            padding: '12px 16px',
                            textTransform: 'none',
                            borderRadius: 2,
                            '&.Mui-selected': {
                              color: '#1976D2',
                              fontWeight: 500,
                              backgroundColor: 'rgba(25, 118, 210, 0.08)',
                            },
                          },
                          '& .MuiTabs-indicator': {
                            display: 'none',
                          },
                        }}
                      >
                        {fileFlowTabs.map((tab) => (
                          <Tab key={tab} label={tab} />
                        ))}
                      </Tabs>
                    </Box>

                    {/* Tab Content */}
                    <Box sx={{ px: 3, py: 3 }}>
                      {/* Sources Tab Content */}
                      {activeTab === 1 && (
                        <Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                            <Typography sx={{ fontSize: 20, fontWeight: 400, color: '#000' }}>
                              Connect sources to FileFlow
                            </Typography>
                            <Box
                              sx={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                '&:hover': {
                                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                },
                              }}
                            >
                              <HelpOutlineIcon sx={{ color: 'rgba(0, 0, 0, 0.54)' }} />
                            </Box>
                          </Box>

                          {/* Source Card */}
                          <Box
                            sx={{
                              border: '1px solid #E0E0E0',
                              borderRadius: 1,
                              p: 2,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}
                          >
                            <Box>
                              <Typography sx={{ fontSize: 14, color: '#666', mb: 0.5 }}>
                                Source
                              </Typography>
                              <Typography sx={{ fontSize: 16, color: '#000' }}>
                                Connect your first source
                              </Typography>
                            </Box>
                            <Button
                              variant="contained"
                              startIcon={<AddIcon />}
                              sx={{
                                backgroundColor: '#2196F3',
                                textTransform: 'none',
                                fontWeight: 500,
                                px: 2,
                                '&:hover': {
                                  backgroundColor: '#1976D2',
                                },
                              }}
                            >
                              Add Source
                            </Button>
                          </Box>
                        </Box>
                      )}

                      {/* Settings Tab Content */}
                      {activeTab === 0 && (
                        <Box>
                          <Typography sx={{ fontSize: 20, fontWeight: 400, color: '#000', mb: 3 }}>
                            General Settings
                          </Typography>
                          <Typography sx={{ fontSize: 14, color: '#666' }}>
                            Configure general FileFlow settings here.
                          </Typography>
                        </Box>
                      )}

                      {/* Destinations Tab Content */}
                      {activeTab === 2 && (
                        <Box>
                          <Typography sx={{ fontSize: 20, fontWeight: 400, color: '#000', mb: 3 }}>
                            Configure destinations
                          </Typography>
                          <Box
                            sx={{
                              border: '1px solid #E0E0E0',
                              borderRadius: 1,
                              p: 2,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}
                          >
                            <Box>
                              <Typography sx={{ fontSize: 14, color: '#666', mb: 0.5 }}>
                                Destination
                              </Typography>
                              <Typography sx={{ fontSize: 16, color: '#000' }}>
                                Connect your first destination
                              </Typography>
                            </Box>
                            <Button
                              variant="contained"
                              startIcon={<AddIcon />}
                              sx={{
                                backgroundColor: '#2196F3',
                                textTransform: 'none',
                                fontWeight: 500,
                                px: 2,
                                '&:hover': {
                                  backgroundColor: '#1976D2',
                                },
                              }}
                            >
                              Add Destination
                            </Button>
                          </Box>
                        </Box>
                      )}

                      {/* Structure & Rules Tab Content */}
                      {activeTab === 3 && (
                        <Box>
                          <Typography sx={{ fontSize: 20, fontWeight: 400, color: '#000', mb: 3 }}>
                            Structure & Rules
                          </Typography>
                          <Typography sx={{ fontSize: 14, color: '#666' }}>
                            Define document structure and processing rules.
                          </Typography>
                        </Box>
                      )}

                      {/* Calendars Tab Content */}
                      {activeTab === 4 && (
                        <Box>
                          <Typography sx={{ fontSize: 20, fontWeight: 400, color: '#000', mb: 3 }}>
                            Calendars
                          </Typography>
                          <Typography sx={{ fontSize: 14, color: '#666' }}>
                            Manage calendar integrations.
                          </Typography>
                        </Box>
                      )}

                      {/* Usage Tab Content */}
                      {activeTab === 5 && (
                        <Box>
                          <Typography sx={{ fontSize: 20, fontWeight: 500, color: '#000', mb: 1 }}>
                            Usage
                          </Typography>
                          <Typography sx={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.6)', mb: 3 }}>
                            Track document and page volume processed through FileFlow.
                          </Typography>

                          {/* Usage Cards */}
                          <Box sx={{ display: 'flex', gap: 3 }}>
                            {/* Document Counter */}
                            <Box
                              sx={{
                                flex: 1,
                                border: '1px solid #E0E0E0',
                                borderRadius: 1,
                                p: 2,
                              }}
                            >
                              <Typography sx={{ fontSize: 14, color: '#666', mb: 0.5 }}>
                                Documents
                              </Typography>
                              <Typography sx={{ fontSize: 16, color: '#000' }}>
                                0
                              </Typography>
                            </Box>

                            {/* Page Counter */}
                            <Box
                              sx={{
                                flex: 1,
                                border: '1px solid #E0E0E0',
                                borderRadius: 1,
                                p: 2,
                              }}
                            >
                              <Typography sx={{ fontSize: 14, color: '#666', mb: 0.5 }}>
                                Pages
                              </Typography>
                              <Typography sx={{ fontSize: 16, color: '#000' }}>
                                0
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      )}
                    </Box>
                  </Box>

                  {/* Checklist Sidebar */}
                  <Box
                    sx={{
                      width: 300,
                      backgroundColor: '#fff',
                      borderLeft: '1px solid #E0E0E0',
                      p: 3,
                    }}
                  >
                    <Typography sx={{ fontSize: 16, fontWeight: 400, color: '#000', mb: 1 }}>
                      Checklist
                    </Typography>
                    <Typography sx={{ fontSize: 14, color: '#666', mb: 3 }}>
                      Before you enable FileFlow, you need to configure the steps listed below
                    </Typography>

                    {/* Checklist Items */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {checklistItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = item.active;
                        const isCompleted = item.completed;
                        return (
                          <Box
                            key={item.label}
                            sx={{
                              border: isActive ? '1px solid #1976D2' : '1px solid #E0E0E0',
                              borderRadius: 2,
                              p: 2,
                              backgroundColor: isActive ? 'rgba(25, 118, 210, 0.08)' : '#fff',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1.5,
                              cursor: 'pointer',
                              '&:hover': {
                                backgroundColor: isActive ? 'rgba(25, 118, 210, 0.12)' : 'rgba(0, 0, 0, 0.02)',
                              },
                            }}
                          >
                            {isCompleted ? (
                              <CheckCircleOutlineIcon sx={{ fontSize: 20, color: '#666' }} />
                            ) : (
                              <Icon sx={{ fontSize: 20, color: isActive ? '#1976D2' : '#666' }} />
                            )}
                            <Typography
                              sx={{
                                fontSize: 14,
                                fontWeight: isActive ? 500 : 400,
                                color: isActive ? '#1976D2' : '#666',
                              }}
                            >
                              {item.label}
                            </Typography>
                          </Box>
                        );
                      })}
                    </Box>
                  </Box>
                </Box>
              )}

              {/* LitHub Content */}
              {activeNav === 'LitHub' && (
                <Box sx={{ flex: 1, backgroundColor: '#fff' }}>
                  {/* Section Header */}
                  <Box sx={{ px: 3, pt: 2 }}>
                    {/* Tabs */}
                    <Tabs
                      value={litHubTab}
                      onChange={(_, newValue) => setLitHubTab(newValue)}
                      variant="scrollable"
                      scrollButtons="auto"
                      sx={{
                        minHeight: 42,
                        '& .MuiTab-root': {
                          fontSize: 14,
                          fontWeight: 400,
                          color: '#666',
                          minHeight: 42,
                          padding: '12px 16px',
                          textTransform: 'none',
                          borderRadius: 2,
                          '&.Mui-selected': {
                            color: '#1976D2',
                            fontWeight: 500,
                            backgroundColor: 'rgba(25, 118, 210, 0.08)',
                          },
                        },
                        '& .MuiTabs-indicator': {
                          display: 'none',
                        },
                      }}
                    >
                      {litHubTabs.map((tab) => (
                        <Tab key={tab} label={tab} />
                      ))}
                    </Tabs>
                  </Box>

                  {/* Tab Content */}
                  <Box sx={{ px: 3, py: 3 }}>
                    {/* Billing Tab Content */}
                    {litHubTab === 0 && (
                      <Box>
                        <Typography sx={{ fontSize: 20, fontWeight: 500, color: '#000', mb: 1 }}>
                          Billing
                        </Typography>
                        <Typography sx={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.6)', mb: 3 }}>
                          Configure automated billing workflows.
                        </Typography>
                      </Box>
                    )}

                    {/* Medical Events Tab Content */}
                    {litHubTab === 1 && (
                      <Box>
                        <Typography sx={{ fontSize: 20, fontWeight: 500, color: '#000', mb: 1 }}>
                          Medical Events
                        </Typography>
                        <Typography sx={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.6)', mb: 3 }}>
                          Configure medical event extraction settings.
                        </Typography>
                      </Box>
                    )}

                    {/* DocIntel Tab Content */}
                    {litHubTab === 2 && (
                      <Box>
                        <Typography sx={{ fontSize: 20, fontWeight: 500, color: '#000', mb: 1 }}>
                          DocIntel
                        </Typography>
                        <Typography sx={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.6)', mb: 3 }}>
                          Configure document intelligence settings.
                        </Typography>
                      </Box>
                    )}

                    {/* Drafting Tab Content */}
                    {litHubTab === 3 && (
                      <Box>
                        <Typography sx={{ fontSize: 20, fontWeight: 500, color: '#000', mb: 1 }}>
                          Drafting
                        </Typography>
                        <Typography sx={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.6)', mb: 3 }}>
                          Configure document drafting settings.
                        </Typography>
                      </Box>
                    )}

                    {/* Reports Tab Content */}
                    {litHubTab === 4 && (
                      <Box>
                        <Typography sx={{ fontSize: 20, fontWeight: 500, color: '#000', mb: 1 }}>
                          Reports
                        </Typography>
                        <Typography sx={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.6)', mb: 3 }}>
                          Configure report generation settings.
                        </Typography>
                      </Box>
                    )}

                    {/* Statuses Tab Content */}
                    {litHubTab === 5 && (
                      <Box>
                        <Typography sx={{ fontSize: 20, fontWeight: 500, color: '#000', mb: 1 }}>
                          Statuses
                        </Typography>
                        <Typography sx={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.6)', mb: 3 }}>
                          Manage case status configurations.
                        </Typography>
                      </Box>
                    )}

                    {/* Tags Tab Content */}
                    {litHubTab === 6 && (
                      <Box>
                        <Typography sx={{ fontSize: 20, fontWeight: 500, color: '#000', mb: 1 }}>
                          Tags
                        </Typography>
                        <Typography sx={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.6)', mb: 3 }}>
                          Manage document and case tags.
                        </Typography>
                      </Box>
                    )}

                    {/* Keywords Tab Content */}
                    {litHubTab === 7 && (
                      <Box>
                        <Typography sx={{ fontSize: 20, fontWeight: 500, color: '#000', mb: 1 }}>
                          Keywords
                        </Typography>
                        <Typography sx={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.6)', mb: 3 }}>
                          Configure keyword extraction settings.
                        </Typography>
                      </Box>
                    )}

                    {/* Prompt Library Tab Content */}
                    {litHubTab === 8 && (
                      <Box>
                        <Typography sx={{ fontSize: 20, fontWeight: 500, color: '#000', mb: 1 }}>
                          Prompt Library
                        </Typography>
                        <Typography sx={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.6)', mb: 3 }}>
                          Manage AI prompt templates.
                        </Typography>
                      </Box>
                    )}

                    {/* Usage Tab Content */}
                    {litHubTab === 9 && (
                      <Box>
                        <Typography sx={{ fontSize: 20, fontWeight: 500, color: '#000', mb: 1 }}>
                          Usage
                        </Typography>
                        <Typography sx={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.6)', mb: 3 }}>
                          Track page and case volume processed through LitHub.
                        </Typography>

                        {/* Usage Cards */}
                        <Box sx={{ display: 'flex', gap: 3 }}>
                          {/* Page Counter */}
                          <Box
                            sx={{
                              flex: 1,
                              border: '1px solid #E0E0E0',
                              borderRadius: 1,
                              p: 2,
                            }}
                          >
                            <Typography sx={{ fontSize: 14, color: '#666', mb: 0.5 }}>
                              Pages
                            </Typography>
                            <Typography sx={{ fontSize: 16, color: '#000' }}>
                              0
                            </Typography>
                          </Box>

                          {/* Case Counter */}
                          <Box
                            sx={{
                              flex: 1,
                              border: '1px solid #E0E0E0',
                              borderRadius: 1,
                              p: 2,
                            }}
                          >
                            <Typography sx={{ fontSize: 14, color: '#666', mb: 0.5 }}>
                              Cases
                            </Typography>
                            <Typography sx={{ fontSize: 16, color: '#000' }}>
                              0
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    )}
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
