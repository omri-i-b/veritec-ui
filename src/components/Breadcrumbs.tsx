import { Breadcrumbs as MuiBreadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { colors } from '../theme/theme';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <MuiBreadcrumbs
      separator={<NavigateNextIcon fontSize="small" sx={{ color: colors.grey[400] }} />}
      sx={{ mb: 1 }}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        if (isLast) {
          return (
            <Typography
              key={item.label}
              sx={{
                fontSize: 13,
                color: colors.grey[600],
              }}
            >
              {item.label}
            </Typography>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href || '#'}
            underline="hover"
            sx={{
              fontSize: 13,
              color: colors.grey[500],
              '&:hover': {
                color: colors.blue[500],
              },
            }}
          >
            {item.label}
          </Link>
        );
      })}
    </MuiBreadcrumbs>
  );
};
