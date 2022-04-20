import { Container, Grid, Typography } from '@mui/material'

import Formulario from './components/Formulario'

function App() {

  return (
    <Container>
      <header>
        <Typography align='center' marginY={5} component='h1' variant='h1' >
          Buscador de Noticias 
        </Typography>
      </header>
      <Formulario />
    </Container>
  )
}

export default App
