import { Breadcrumbs as MuiBreadcrumbs, Link, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
      separator={<ChevronRightIcon sx={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.6)' }} />}
      sx={{ mb: 1.5 }}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        if (isLast) {
          return (
            <Typography
              key={item.label}
              sx={{
                fontSize: 16,
                color: 'rgba(0, 0, 0, 0.87)',
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
              fontSize: 16,
              color: 'rgba(0, 0, 0, 0.6)',
              '&:hover': {
                color: 'rgba(0, 0, 0, 0.87)',
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
