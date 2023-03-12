import React from 'react'
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import {EventoList} from './EventoList'
import Typography from '@mui/material/Typography';

export const Schedule = ({titulo = 'Horario'}) => {
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
        <Grid item  xs={12}  sm={12}  md={4}  lg={4} >  <EventoList/>  </Grid>
        <Grid item  xs={12}  sm={12}  md={4}  lg={4} >  <EventoList/>  </Grid>
        <Grid item  xs={12}  sm={12}  md={4}  lg={4} >  <EventoList/>  </Grid>
      </Grid>
    </>

  )
}
