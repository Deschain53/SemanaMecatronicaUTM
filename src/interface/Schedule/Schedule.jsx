import React from 'react'
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import {EventoList} from './EventoList'
import Typography from '@mui/material/Typography';



export const Schedule = ({titulo = 'Horario', infoConferencias = []}) => {
  
  //Se puede definir funcion para definir el numero de elementos por columna grid a mostrar

  return (
    <>
    <div>
        <Typography 
            variant="h4"
            sx={{paddingLeft:2, paddingTop:2}}
            >{titulo}</Typography>
        <Divider />
    </div>
      <Grid  container spacing={1.5} sx={{paddingLeft:1, paddingRight:1}}>
        {infoConferencias.map(({fecha,conferencias}) => {
          return(
            <Grid item  xs={12}  sm={12}  md={6}  lg={6} > <
              EventoList fecha = {fecha} eventos = {conferencias}/>  
            </Grid>
          )
        })}
      </Grid>
    </>

  )
}

/*
        <Grid item  xs={12}  sm={12}  md={4}  lg={4} >  <EventoList/>  </Grid>
        <Grid item  xs={12}  sm={12}  md={4}  lg={4} >  <EventoList/>  </Grid>
        <Grid item  xs={12}  sm={12}  md={4}  lg={4} >  <EventoList/>  </Grid>
*/