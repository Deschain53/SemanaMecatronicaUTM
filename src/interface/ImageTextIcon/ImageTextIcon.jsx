import React from 'react'
import { Grid, Typography } from '@mui/material'
import Flier from '../../img/flyer.jpeg'


export const ImageTextIcon = ({srcImg = Flier,text='Texto por defecto', categories = categoryInfoDefault}) => {
  return (
    <>
      <Grid container sx={{padding:1}} spacing={2}>
        <Grid item sm={12} xs={12} md={4} lg={4}>
          <img    src={srcImg}//(mode === 'dark' ? logoObs : logoClaro)} ///DESECTRUCTURAR
                style={{width:'100%'}}/>
        </Grid>

        <Grid item>
            <Typography>
                {text}
            </Typography>
        </Grid>

      </Grid>
    </>
  )
}


/*

//Para componenete Img-Text-Icon
import { Grid, Typography } from '@mui/material'
import React from 'react'
//import LogoUTM from '../../img/utm1.jpg'
//import Flier from '../../img/flyer.jpeg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const categoryInfoDefault = [
  {icon:{LocationOnIcon},texto:"Text 1"}, 
  {icon:{SchoolIcon},texto:"Text 1"},
  {icon:{EventAvailableIcon},texto:"Text 1"},
]

export const Iti= ({srcImg = Flier, hImg = 100 , wImg, texto, categoryInfo = categoryInfoDefault}) => {
  return (
    <>
      
        <Grid container sx={{padding:1}} spacing={2}>
            <Grid item sm={12} xs={12} md={4} lg={4}>
              {/*<img    src={srcImg}//(mode === 'dark' ? logoObs : logoClaro)} ///DESECTRUCTURAR
                style={{width:'100%'}}
  />}
  </Grid>

  <Grid item sm={6} xs={4} md={4} lg={4}>
    <Typography
      variant="body1"
    >
      HOla dfd
    </Typography>
  </Grid>

  <Grid item >
    {categoryInfo.map( ({icon,texto} )=> {
      
      <Typography>ho fdfdla</Typography>
    } )}
  </Grid>

</Grid>

</>
)
}
*/