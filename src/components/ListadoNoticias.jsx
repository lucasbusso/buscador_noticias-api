import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'

const ListadoNoticias = () => {
  const { noticias, totalNoticias } = useNoticias()
    
  const totalPaginas = Math.ceil(totalNoticias / 20)
  
  return (
    <>
        <Typography
            textAlign={'center'}
            marginY={5}
            variant='h3'
            component={'h2'}    
        >
            Últimas Noticias
        </Typography>

        <Stack spacing={2} justifyContent='center' alignItems='center' sx={{marginY:5}}>
            <Pagination count={totalPaginas} color="primary" />
        </Stack>
        
        <Grid
            container
            spacing={2}
        >
            {noticias.map( noticia => (
                <Noticia 
                    KEY={noticia.url}
                    noticia={noticia}
                />
            ))}
        </Grid>
        <Stack spacing={2} justifyContent='center' alignItems='center' sx={{marginY:5}}>
            <Pagination count={totalPaginas} color="primary" />
        </Stack>
    </>
  )
}

export default ListadoNoticias