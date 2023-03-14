import { Box, Grid, IconButton, Typography, Card } from '@mui/material'
import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import { Link } from 'react-router-dom';

const eventDescripcionD = "El 10º Concurso de Minirobótica, en donde los participantes podrán integrar conocimiento y habilidades, de manera divertida, creativa e innovadora."

import { boxSX } from '../../theme/hoverTheme'; 

export const InfoEvent = ({Icon = GroupsIcon, title = 'Conferencias', description = eventDescripcionD, link='' }) => {
  return (
  <Box sx={boxSX}>
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
            <IconButton href={link} LinkComponent={Link} to={link}>
              <Icon sx={{ fontSize: 100}} color='black'/> 
            </IconButton>
            <Typography variant="h6" color='primary' sx={{ fontWeight:'600' }} > 
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
  </Box>
  )
}
