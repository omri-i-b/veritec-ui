import { Box, Avatar, Tooltip } from '@mui/material';

interface NavItemProps {
  src: string;
  label: string;
  size?: number;
  onClick?: () => void;
}

const NavItem = ({ src, label, size = 34, onClick }: NavItemProps) => (
  <Tooltip title={label} placement="right">
    <Box
      component="img"
      src={src}
      alt={label}
      onClick={onClick}
      sx={{
        width: size,
        height: size,
        borderRadius: 1,
        cursor: 'pointer',
        '&:hover': {
          opacity: 0.8,
        },
      }}
    />
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
        <Box
          component="img"
          src="/icons/veritec_logo.jpg"
          alt="Veritec"
          sx={{ width: 40, height: 40, borderRadius: 2 }}
        />
      </Box>

      {/* Main Navigation */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5, flex: 1 }}>
        <NavItem src="/icons/fileflow.jpg" label="Cases" />
        <NavItem src="/icons/lithub.jpg" label="Events" />
      </Box>

      {/* Bottom Navigation */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5, mt: 'auto' }}>
        {/* Help Button */}
        <NavItem src="/icons/help.jpg" label="Help" />

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
