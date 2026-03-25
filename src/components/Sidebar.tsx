import { Box, IconButton, Avatar, Tooltip } from '@mui/material';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import ViewTimelineRoundedIcon from '@mui/icons-material/ViewTimelineRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { colors } from '../theme/theme';

// Veritec Logo SVG
const VeritecLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4L28 28H4L16 4Z" stroke={colors.blue[500]} strokeWidth="2" fill="none" />
    <path d="M16 10L22 22H10L16 10Z" fill={colors.blue[500]} />
  </svg>
);

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, label, active = false, onClick }: NavItemProps) => (
  <Tooltip title={label} placement="right">
    <IconButton
      onClick={onClick}
      sx={{
        width: 40,
        height: 40,
        borderRadius: 2,
        color: active ? colors.blue[500] : colors.grey[500],
        backgroundColor: active ? colors.blue[50] : 'transparent',
        '&:hover': {
          backgroundColor: active ? colors.blue[50] : colors.grey[100],
        },
      }}
    >
      {icon}
    </IconButton>
  </Tooltip>
);

export const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 56,
        height: '100vh',
        backgroundColor: '#FFFFFF',
        borderRight: `1px solid ${colors.grey[200]}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 2,
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 1200,
      }}
    >
      {/* Logo */}
      <Box sx={{ mb: 3 }}>
        <VeritecLogo />
      </Box>

      {/* Main Navigation */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, flex: 1 }}>
        <NavItem icon={<LayersRoundedIcon />} label="Cases" active />
        <NavItem icon={<ViewTimelineRoundedIcon />} label="Timeline" />
      </Box>

      {/* Bottom Navigation */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 'auto' }}>
        <NavItem icon={<PeopleRoundedIcon />} label="Team" />
        <NavItem icon={<ReportProblemRoundedIcon />} label="Alerts" />
        <NavItem icon={<SettingsRoundedIcon />} label="Settings" />

        {/* User Avatar */}
        <Avatar
          sx={{
            width: 32,
            height: 32,
            mt: 1,
            fontSize: 12,
            fontWeight: 600,
            backgroundColor: colors.blue[500],
            cursor: 'pointer',
          }}
        >
          OP
        </Avatar>
      </Box>
    </Box>
  );
};
