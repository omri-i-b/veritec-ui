import { Box, IconButton, Avatar, Tooltip, SvgIcon } from '@mui/material';
import { colors } from '../theme/theme';

// Veritec "V" Logo from Figma
const VeritecLogo = () => (
  <SvgIcon sx={{ width: 40, height: 40 }} viewBox="0 0 40 40">
    <rect width="40" height="40" rx="8" fill={colors.blue[500]} />
    <path
      d="M12 12L20 28L28 12"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </SvgIcon>
);

// Layers/Stack icon (disabled state)
const LayersIcon = () => (
  <SvgIcon sx={{ fontSize: 24 }} viewBox="0 0 24 24">
    <path
      d="M11.99 18.54L4.62 12.81L3 14.07L12 21.07L21 14.07L19.37 12.8L11.99 18.54ZM12 16L19.36 10.27L21 9L12 2L3 9L4.63 10.27L12 16ZM12 4.53L17.74 9L12 13.47L6.26 9L12 4.53Z"
      fill="currentColor"
    />
  </SvgIcon>
);

// Document/File icon (active state)
const DocumentIcon = () => (
  <SvgIcon sx={{ fontSize: 24 }} viewBox="0 0 24 24">
    <path
      d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"
      fill="currentColor"
    />
  </SvgIcon>
);

// Help/Support icon for bottom
const HelpIcon = () => (
  <SvgIcon sx={{ fontSize: 20 }} viewBox="0 0 24 24">
    <path
      d="M11 18H13V16H11V18ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10H10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 12 11 11.75 11 15H13C13 12.75 16 12.5 16 10C16 7.79 14.21 6 12 6Z"
      fill="currentColor"
    />
  </SvgIcon>
);

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, label, active = false, disabled = false, onClick }: NavItemProps) => (
  <Tooltip title={label} placement="right">
    <IconButton
      onClick={onClick}
      disabled={disabled}
      sx={{
        width: 34,
        height: 34,
        borderRadius: 1,
        color: disabled ? 'rgba(0, 0, 0, 0.38)' : active ? colors.blue[500] : 'rgba(0, 0, 0, 0.54)',
        backgroundColor: active ? '#E9F5FE' : 'transparent',
        '&:hover': {
          backgroundColor: active ? '#E9F5FE' : 'rgba(0, 0, 0, 0.04)',
        },
        '&.Mui-disabled': {
          color: 'rgba(0, 0, 0, 0.38)',
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
        backgroundColor: '#F5F5F5',
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
      <Box sx={{ mb: 2 }}>
        <VeritecLogo />
      </Box>

      {/* Main Navigation */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, flex: 1 }}>
        <NavItem icon={<LayersIcon />} label="Cases" disabled />
        <NavItem icon={<DocumentIcon />} label="Events" active />
      </Box>

      {/* Bottom Navigation */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5, mt: 'auto' }}>
        {/* Help Button */}
        <IconButton
          sx={{
            width: 34,
            height: 34,
            borderRadius: 1,
            backgroundColor: colors.blue[500],
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: colors.blue[600],
            },
          }}
        >
          <HelpIcon />
        </IconButton>

        {/* User Avatar */}
        <Avatar
          sx={{
            width: 34,
            height: 34,
            fontSize: 12,
            fontWeight: 600,
            backgroundColor: '#BDBDBD',
            color: '#FFFFFF',
            cursor: 'pointer',
          }}
        >
          OB
        </Avatar>
      </Box>
    </Box>
  );
};
