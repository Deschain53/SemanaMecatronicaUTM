import { Grid, outlinedInputClasses, TextField, Typography } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { SimpleList } from '../Lists/SimpleList';
import { SubsectionCard } from '../Typo/SubsectionCard';


const tituloD     = "Titulo del taller"
const objetivoD   = "Este es un texto por defaul, el verdadero objetivo del taller debera ser reemplazado aqui. Este texto un solo una muestra para mostrar como se comportaria el componente en la pagina we"
const contenidoD  = ["Contenido 1 para taller","Contenido 2 taller", "Contenido 3", "Contenido 4 para taller"]
const requisitosD = ["Conocimiento en lenguaje X", "Manejo de paqueteria Y", "Uso de herramienta Z"]
const instructorD = "Nombre del instructor"
const lugarD      = "Sala de computo X"


const StyledCard = styled(Card)({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "green"  , border: 1
  },
  [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "red"  , border: 1
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "purple" , border: 1
  },
});




export const WorkShopCard = ({
        taller={titulo:tituloD, objetivo:objetivoD, contenido:contenidoD, requisitos:requisitosD, 
        instructor:instructorD, lugar:lugarD, maxParticipantes:10}
    }) => {
  return (
    <>
    <StyledCard sx={{ minWidth: 275, m:1 }} variant="outlined">
      <CardContent>

        <Grid container> 
          <Grid item sx={12} sm={12} md={12} lg={12}>
            <Box>
              <Typography sx={{ fontSize: 16 }} color="grey" gutterBottom>
                {taller.instructor}
              </Typography>
              <Typography variant="h5" component="div">
                {taller.titulo}
              </Typography>
              <Typography sx={{ fontSize: 12,mb: 1.2, mt:0 }} color="text.secondary">
                {taller.lugar}
              </Typography>
            </Box>
          </Grid>
          {
            //Se puede agregar una imagen aqui y ajustar el grid 
            //<Grid item sx={12} sm={12} md={12} lg={12}></Grid>
          }
        </Grid>


        <Box  >
          <SubsectionCard texto='Objetivo'/>
          <Typography align='justify' variant='body2'>
            {taller.objetivo}
          </Typography>
        </Box>

        <Box  sx={{mt:1.5}}>
          <SubsectionCard texto='Requisitos'/>
          <SimpleList  list={taller.requisitos} fS='0.8em'/>
        </Box>

        <Box  sx={{mt:1.5}}>
          <SubsectionCard texto='Contenido'/>
          <SimpleList list={taller.contenido} fS='0.8em'/>
        </Box>

      </CardContent>

    </StyledCard>
    </>
  )
}


/*

      <Box sx={{paddingTop:1, margin:1, }}>
        <div>
          <div>
            {/*imagen alusiva }
            <Typography>{taller.titulo}</Typography>
          </div>
          
          <div>
            <Typography>Objetivo</Typography>
            <Typography>{taller.objetivo}</Typography>
          </div>

          <div>
            <Typography>Contenido</Typography>
            {taller.contenido.map(contenidoElement => { 
                return(
                    <Typography key={contenidoElement} >{contenidoElement}</Typography>
                )})}
          </div>
        </div>

        <div>
           <Typography>Conocimientos necesarios:</Typography>
           {taller.requisitos.map(requisito => { 
                return(
                    <Typography key={requisito} >{requisito}</Typography>
                )})}
        </div>
         
        
        <Grid container>
            <Typography>Instructor: </Typography>
            <Typography>{taller.instructor}</Typography>
        </Grid>

        <Grid container>
            {/*Icono de aula } 
            <Typography>Lugar de impartición: </Typography>
            <Typography>{taller.lugar}</Typography>
        </Grid>

        <Grid container>
            {/*Icono de personas} 
            <Typography>Máximo de participantes: </Typography>
            <Typography>{taller.maxParticipantes}</Typography>
        </Grid>

      </Box>


            <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
*/