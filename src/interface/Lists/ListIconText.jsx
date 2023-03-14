import { Grid, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react'

export const ListIconText = ({Icon=LocationOnIcon, texto = ''}) => {
  return (
    <Grid container sx={{paddingTop:1}}> 
        <Icon color='primary'/>
        <Typography color='primary' sx={{paddingLeft:1, fontWeight:'600'}}> {texto}</Typography>
    </Grid>
  )
}
