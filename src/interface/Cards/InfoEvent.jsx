import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';

const eventDescripcionD = "El 10º Concurso de Minirobótica, en donde los participantes podrán integrar conocimiento y habilidades, de manera divertida, creativa e innovadora."

export const InfoEvent = ({Icon = GroupsIcon, title = 'Conferencias', description = eventDescripcionD }) => {
  return (
    <Grid container sx={{padding:2}} spacing={2}  >
      <Grid item xs={4} sm={3} md={12} lg={4} >
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            //sx={{paddingRight:5}}
          >
            <Icon sx={{ fontSize: 100}} color='secondary'/> 
            <Typography variant="h6" color='secondary' sx={{ fontWeight:'600' }}> 
                  {title} 
            </Typography> 
          </Grid>
      </Grid>
      <Grid item xs={8} sm={9} md={12} lg={8} >
          <Typography variant='body2' align='justify' >
              {description}
          </Typography>
      </Grid>
    </Grid>
  )
}
