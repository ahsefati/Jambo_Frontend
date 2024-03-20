import { Helmet } from 'react-helmet-async';

// @mui
import { Grid, Container, Stack, Typography, Paper, TableContainer, Table, TableBody, TableRow, TableCell, TablePagination } from '@mui/material';

// ----------------------------------------------------------------------
export default function SavedTools() {
  return (
    <>
      <Helmet>
        <title> Jambo | Recent Searches </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 1 }}>
          Recent Searches
        </Typography>
      </Container>
    </>
  );
}
