import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const listD = ['Cosa por hacer 1', 'Cosa por hacer 2', 'Cosas por hacer 3']

//Este componente solo funciona con largas listas de codigo
export const SimpleList = ({icon=1 , list = listD}) => {
  return (
    <Grid
        container
       // spacing={0}
        direction="row"
        //alignItems="center"
        //justifyContent="center"
        sx={{paddingTop:0.5}}
    >
        {list.map((element) => {
            return(         
            <Typography variant='body' align='justify' sx={{paddingTop:0.5, fontSize:'0.9em'}} > &bull; {element}</Typography>
            )
        })}   
    </Grid>
  )
}
