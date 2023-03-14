import { WebLayout } from "../layout/WebLayout"
import { Grid, Typography } from '@mui/material'
//import flyer from '../../img/flyer.jpeg'
//import LocationOnIcon from '@mui/icons-material/LocationOn';
//import SchoolIcon from '@mui/icons-material/School';
//import EventAvailableIcon from '@mui/icons-material/EventAvailable';
//import { ImageTextIcon } from "../../interface/ImageTextIcon/ImageTextIcon";

const textoIntroduccion = "Hola mundo"


export const HomePage = () => {
  return (
    <>
    <WebLayout/>
      
      <Typography>
        HomePage df dfd fef fdf
      </Typography>
    </>
  )
}

/*

      <Grid container sx={{padding:1}} spacing={2}>
        <Grid item sm={12} xs={12} md={4} lg={4}>
          <img    src={flyer}//(mode === 'dark' ? logoObs : logoClaro)} ///DESECTRUCTURAR
                style={{width:'100%'}}/>
        </Grid>
        <Grid item>
            <Typography>
                {textoIntroduccion}
            </Typography>
        </Grid>
      </Grid>


*/