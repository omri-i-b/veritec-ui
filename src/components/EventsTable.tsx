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
} from '@mui/material';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
  party: string;
  eventType: string;
  eventText: string;
  documents: Document[];
}

const mockEvents: Event[] = [
  {
    id: '1',
    date: '06/10/11',
    facility: 'Happy Health',
    medicalProvider: 'Dr. Smith',
    party: 'Plaintiff',
    eventType: 'Patient Complains & Limitations',
    eventText: 'Developed hives, facial swelling, and breathing difficulty after eating. Diagnosed with acute allergic reaction, treated with epinephrine.',
    documents: [
      { name: 'ali_tom24.pdf', pages: 3 },
      { name: 'ali_tt.pdf', pages: 3 },
    ],
  },
  {
    id: '2',
    date: '06/10/11',
    facility: 'Happy Health',
    medicalProvider: 'Dr. Smith',
    party: 'Plaintiff',
    eventType: 'Diagnostic Tests & Findings',
    eventText: 'Patient had a fasting lipid panel drawn. Red blood cell count was found to be 5.50H.',
    documents: [
      { name: 'ali_tom24.pdf', pages: 3 },
    ],
  },
  {
    id: '3',
    date: '06/10/11',
    facility: 'Happy Health',
    medicalProvider: 'Dr. Jones',
    party: 'Defendant',
    eventType: 'Patient Complains & Limitations',
    eventText: 'Patient was involved in an electric bicycle incident, where he collided with a vehicle and fell on his right shoulder.',
    documents: [
      { name: 'alice_tomson.pdf', pages: 1 },
    ],
  },
];

const DocumentLink = ({ doc }: { doc: Document }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
    <DescriptionRoundedIcon sx={{ fontSize: 14, color: colors.blue[500] }} />
    <Link
      href="#"
      underline="hover"
      sx={{
        fontSize: 12,
        color: colors.blue[500],
        '&:hover': {
          color: colors.blue[600],
        },
      }}
    >
      {doc.name}
    </Link>
  </Box>
);

const ColumnHeader = ({ children }: { children: React.ReactNode }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <Typography
      sx={{
        fontSize: 12,
        fontWeight: 600,
        color: colors.grey[700],
      }}
    >
      {children}
    </Typography>
    <MoreVertIcon
      sx={{
        fontSize: 16,
        color: colors.grey[400],
        cursor: 'pointer',
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
          <TableRow sx={{ backgroundColor: colors.grey[50] }}>
            <TableCell sx={{ width: 160, py: 1.5 }}>
              <ColumnHeader>Event Date & Facility Provider</ColumnHeader>
            </TableCell>
            <TableCell sx={{ width: 140, py: 1.5 }}>
              <ColumnHeader>Medical Provider</ColumnHeader>
            </TableCell>
            <TableCell sx={{ width: 100, py: 1.5 }}>
              <ColumnHeader>Party</ColumnHeader>
            </TableCell>
            <TableCell sx={{ width: 400, py: 1.5 }}>
              <ColumnHeader>Event Text & Event Type</ColumnHeader>
            </TableCell>
            <TableCell sx={{ width: 160, py: 1.5 }}>
              <ColumnHeader>Document Name</ColumnHeader>
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
              {/* Date & Facility Provider */}
              <TableCell sx={{ py: 1.5 }}>
                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: colors.grey[900],
                    mb: 0.25,
                  }}
                >
                  {event.date}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12,
                    color: colors.grey[600],
                  }}
                >
                  {event.facility}
                </Typography>
              </TableCell>

              {/* Medical Provider */}
              <TableCell sx={{ py: 1.5 }}>
                <Typography
                  sx={{
                    fontSize: 13,
                    color: colors.grey[900],
                  }}
                >
                  {event.medicalProvider}
                </Typography>
              </TableCell>

              {/* Party */}
              <TableCell sx={{ py: 1.5 }}>
                <Typography
                  sx={{
                    fontSize: 13,
                    color: colors.grey[900],
                  }}
                >
                  {event.party}
                </Typography>
              </TableCell>

              {/* Event Text & Event Type */}
              <TableCell sx={{ py: 1.5 }}>
                <Typography
                  sx={{
                    fontSize: 12,
                    color: colors.grey[700],
                    mb: 0.5,
                    lineHeight: 1.5,
                  }}
                >
                  {event.eventText}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: colors.grey[500],
                  }}
                >
                  {event.eventType}
                </Typography>
              </TableCell>

              {/* Document Name */}
              <TableCell sx={{ py: 1.5 }}>
                {event.documents.map((doc, idx) => (
                  <DocumentLink key={idx} doc={doc} />
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
