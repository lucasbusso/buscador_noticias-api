import {Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from '@mui/material'

const Noticia = ({noticia}) => {

  const { urlToImage, url, title, description, source } = noticia
  return (
    <Grid item md={6} lg={4} >
      <Card sx={{ cursor: 'pointer' }}>
        {urlToImage && (
          <CardMedia 
            component="img"
            alt={`Imagen de la noticia ${title}`}
            image={urlToImage}
            maxHeight={'250'}
        />
        )}
        <CardContent>
          <Typography variant='body1' color='error'>
            {source.name}
          </Typography>

          <Typography variant='h5' component="div">
            {title}
          </Typography>

          <Typography variant='body2'>
            {description}
          </Typography>
        </CardContent>

        <CardActions>
          <Link
           href={url}
           target="_blank"
           variant="button"
           width={'100%'}
           textAlign={"center"}
           sx={{
             textDecoration: 'none'
           }}
          >Leer esta noticia
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Noticia