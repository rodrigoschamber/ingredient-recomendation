import {Box, Button, Container, Typography} from '@mui/material'
export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Ingredient Builder
        </Typography>
        <Button>Pesquisar</Button>
      </Box>
    </Container>
  );
}
