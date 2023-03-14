import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const tituloD = "Titulo del taller"
const objetivoD = "Este es un texto por defaul, el verdadero objetivo del taller debera ser reemplazado aqui. Este texto un solo una muestra para mostrar como se comportaria el componente en la pagina we"
const contenidoD = ["Contenido 1 para taller","Contenido 2 taller", "Contenido 3", "Contenido 4 para taller"]
const requisitosD = ["Conocimiento en lenguaje X", "Manejo de paqueteria Y", "Uso de herramienta Z"]
const instructorD = "Nombre del instructor"
const lugarD = "Sala de computo X"

export const WorkShopCard = ({
        taller={titulo:tituloD, objetivo:objetivoD, contenido:contenidoD, requisitos:requisitosD, 
        instructor:instructorD, lugar:lugarD, maxParticipantes:10}
    }) => {
  return (
    <>
      <Box sx={{paddingTop:1, margin:1, }}>
        <div>
          <div>
            {/*imagen alusiva */}
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
            {/*Icono de aula */} 
            <Typography>Lugar de impartición: </Typography>
            <Typography>{taller.lugar}</Typography>
        </Grid>

        <Grid container>
            {/*Icono de personas*/} 
            <Typography>Máximo de participantes: </Typography>
            <Typography>{taller.maxParticipantes}</Typography>
        </Grid>

      </Box>
    </>
  )
}
