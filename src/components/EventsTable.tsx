import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Link,
  Button,
} from '@mui/material';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import AddIcon from '@mui/icons-material/Add';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { colors } from '../theme/theme';

interface Document {
  name: string;
  pages: number;
}

interface Event {
  id: string;
  date: string;
  facility: string;
  medicalProvider: string;
  eventType: string;
  eventDetails: string[];
  documents: Document[];
  tags: string[];
}

const mockEvents: Event[] = [
  {
    id: '1',
    date: '06/10/11',
    facility: 'Happy Health',
    medicalProvider: 'Dr. Smith',
    eventType: 'Patient Complains & Limitations',
    eventDetails: [
      'Developed hives, facial swelling, and breathing difficulty after eating. Diagnosed with acute allergic reaction, treated with epinephrine.',
      'Patient was involved in an electric bicycle incident, where he collided with a vehicle and fell on his right shoulder',
    ],
    documents: [
      { name: 'ali_tom24.pdf', pages: 3 },
      { name: 'ali_tt.pdf', pages: 3 },
      { name: 'alice_tomson.pdf', pages: 1 },
    ],
    tags: [],
  },
  {
    id: '2',
    date: '06/10/11',
    facility: 'Happy Health',
    medicalProvider: 'Dr. Smith',
    eventType: 'Diagnostic Tests & Findings form This Visit',
    eventDetails: [
      'Patient had a fasting lipid panel drawn',
      'Red blood cell count was found to be 5.50H',
      'Hermatocrit was measured at 45.7H',
    ],
    documents: [
      { name: 'ali_tom24.pdf', pages: 3 },
      { name: 'ali_tt.pdf', pages: 3 },
    ],
    tags: [],
  },
  {
    id: '3',
    date: '06/10/11',
    facility: 'Happy Health',
    medicalProvider: 'Dr. Jones',
    eventType: 'Patient Complains & Limitations',
    eventDetails: [
      'Developed hives, facial swelling, and breathing difficulty after eating. Diagnosed with acute allergic reaction, treated with epinephrine.',
      'Patient was involved in an electric bicycle incident, where he collided with a vehicle',
    ],
    documents: [
      { name: 'ali_tom24.pdf', pages: 3 },
      { name: 'ali_tt.pdf', pages: 3 },
      { name: 'alice_tomson.pdf', pages: 1 },
    ],
    tags: [],
  },
];

const DocumentLink = ({ doc }: { doc: Document }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
    <DescriptionRoundedIcon sx={{ fontSize: 16, color: colors.blue[500] }} />
    <Link
      href="#"
      underline="hover"
      sx={{
        fontSize: 13,
        color: colors.blue[500],
        '&:hover': {
          color: colors.blue[600],
        },
      }}
    >
      {doc.name}
    </Link>
    <Typography variant="caption" sx={{ color: colors.grey[500] }}>
      ({doc.pages} pages)
    </Typography>
  </Box>
);

const ColumnHeader = ({ children }: { children: React.ReactNode }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
    <Typography
      sx={{
        fontSize: 13,
        fontWeight: 600,
        color: colors.grey[700],
      }}
    >
      {children}
    </Typography>
    <DragIndicatorIcon
      sx={{
        fontSize: 16,
        color: colors.grey[400],
        cursor: 'grab',
        '&:hover': { color: colors.grey[600] },
      }}
    />
  </Box>
);

export const EventsTable = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 900 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: 180 }}>
              <ColumnHeader>Date & Facility Provider</ColumnHeader>
            </TableCell>
            <TableCell sx={{ width: 140 }}>
              <ColumnHeader>Medical Provider</ColumnHeader>
            </TableCell>
            <TableCell sx={{ width: 380 }}>
              <ColumnHeader>Event Type</ColumnHeader>
            </TableCell>
            <TableCell sx={{ width: 200 }}>
              <ColumnHeader>Document Name</ColumnHeader>
            </TableCell>
            <TableCell sx={{ width: 120 }}>
              <ColumnHeader>Tags</ColumnHeader>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockEvents.map((event) => (
            <TableRow
              key={event.id}
              sx={{
                '&:hover': {
                  backgroundColor: colors.grey[50],
                },
                verticalAlign: 'top',
              }}
            >
              {/* Date & Facility */}
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: colors.grey[900],
                    mb: 0.5,
                  }}
                >
                  {event.date}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 13,
                    color: colors.grey[600],
                  }}
                >
                  {event.facility}
                </Typography>
              </TableCell>

              {/* Medical Provider */}
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: colors.grey[900],
                  }}
                >
                  {event.medicalProvider}
                </Typography>
              </TableCell>

              {/* Event Type & Details */}
              <TableCell>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: colors.grey[900],
                    mb: 1,
                  }}
                >
                  {event.eventType}
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 2 }}>
                  {event.eventDetails.map((detail, idx) => (
                    <Box
                      component="li"
                      key={idx}
                      sx={{
                        fontSize: 13,
                        color: colors.grey[700],
                        mb: 0.5,
                        lineHeight: 1.5,
                      }}
                    >
                      {detail}
                    </Box>
                  ))}
                </Box>
              </TableCell>

              {/* Documents */}
              <TableCell>
                {event.documents.map((doc, idx) => (
                  <DocumentLink key={idx} doc={doc} />
                ))}
              </TableCell>

              {/* Tags */}
              <TableCell>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<AddIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    borderColor: colors.grey[300],
                    color: colors.grey[600],
                    fontSize: 12,
                    fontWeight: 500,
                    '&:hover': {
                      borderColor: colors.grey[400],
                      backgroundColor: colors.grey[50],
                    },
                  }}
                >
                  Add tags
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
