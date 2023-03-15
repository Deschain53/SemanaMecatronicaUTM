import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { boxSX } from '../../theme/hoverTheme'
import { Wsc } from './WSC'
import { Wsg } from './WSG'


export const WorkShopCard = ({taller}) => {
  const [expandible, setExpandible] = useState(false)

  console.log(expandible)
    //    <Box sx={boxSX} >
  return ( 

      <>
        {
          expandible
          ?
            (
              <Wsg taller = {taller} expandible={expandible} setExpandible={setExpandible}/>
            )
          :
            (
              <Wsc taller = {taller} expandible={expandible} setExpandible={setExpandible}/>
            )
        }
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