import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';

const eventDescripcionD = "El 10º Concurso de Minirobótica, en donde los participantes podrán integrar conocimiento y habilidades, de manera divertida, creativa e innovadora."

export const InfoEvent = ({Icon = GroupsIcon, title = 'Conferencias', description = eventDescripcionD }) => {
  return (
    <Grid container sx={{pl:2,pr:2,pb:2}} spacing={2}  >
      <Grid item xs={4} sm={3} md={12} lg={12} >
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            //sx={{paddingRight:5}}
          >
            <Icon sx={{ fontSize: 100}} color='black'/> 
            <Typography variant="h6" color='primary' sx={{ fontWeight:'600' }}> 
                  {title} 
            </Typography> 
          </Grid>
      </Grid>
      <Grid item xs={8} sm={9} md={12} lg={12} >
          <Typography variant='body' align='justify'  >
              {description}
          </Typography>
      </Grid>
    </Grid>
  )
}
