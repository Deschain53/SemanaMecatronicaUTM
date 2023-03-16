import { WebLayout } from "../layout/WebLayout"
import { Grid, Typography } from '@mui/material'
//import flyer from '../../img/flyer.jpeg'
//import LogoElectronica from '../../img/logoElec.jpeg'
//import LogoMecatronica from '../../img/logoMeca.jpeg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import GroupsIcon from '@mui/icons-material/Groups';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import { InfoEvent } from "../../interface/Cards/InfoEvent";
import { Box } from "@mui/system";
import { ListIconText } from "../../interface/Lists/ListIconText";
//import { ImageTextIcon } from "../../interface/ImageTextIcon/ImageTextIcon";

const invitacion = "La Universidad Tecnológica de la Mixteca a través del Instituto de Electrónica y Mecatrónica invitan a la: "
const titleSemana = "VII SEMANA DE ELECTRONICA Y MECATRONICA";
const inter1 = "que tendrá lugar en: "
const fecha = "26 al 28 de Abril de 2023"
const inter2 = "en las instalaciones de la misma institución: Carretera a Acatlima km. 2.5, Huajuapan de León, Oaxaca.";
const inter3 = "Durante la VI Semana de Electrónica y Mecatrónica se tendrán las siguientes actividades:";

export const HomePage = () => {
  return (
    <>
    <WebLayout/>
      <Grid container sx={{padding:1}} spacing={2}>
        {/*Imagen de flyer: */}
        
        <Grid                                               
            item sm={12} xs={12} md={12} lg={5} xl={5}  //Configuracion con imagen
            //item sm={12} xs={12} md={12} lg={3} xl={3}    //Configuracion sin imagen
          >
          { 
          <Box container sx={{padding:2}}>
            <img //src={flyer}//(mode === 'dark' ? logoObs : logoClaro)} ///DESECTRUCTURAR
              src="https://www.utm.mx/Semana_EyM/assets/flyer.jpeg"
              style={{width:'100%'}}/>
          </Box>
          }     
        </Grid>
        {/*Informacion*/}

        <Grid 
          item sm={12} xs={12} md={12} lg={7} xl={7}  //Configuracion con imagen
          //item sm={12} xs={12} md={12} lg={6} xl={6}    //Configuracion sin imagen        
        >


          <Box container sx={{paddingTop:2}}>
            <Typography variant='h6' sx={{fontWeight:'700'}} >{invitacion}</Typography>
            <Grid 
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center">
              <Typography variant='h5' color='primary' sx={{fontWeight:'700',mt:2,mb:2}} >{titleSemana}</Typography>
            </Grid>
            <Typography variant='h6' sx={{fontWeight:'700', mb:2}}>{inter1}</Typography>
          </Box>

          <Grid 
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Box container sx={{paddingLeft:1}} >
              <ListIconText Icon={LocationOnIcon} texto='Carretera a Acatlima km. 2.5, Huajuapan de León, Oaxaca'/>
              <ListIconText Icon={SchoolIcon} texto='Universidad Tecnológica de la Mixteca'/>
              <ListIconText Icon={EventAvailableIcon} texto='Abril 26 - 28 del 2023'/>
            </Box>
          </Grid>

        </Grid>

        
        <Grid                                          
            //item sm={12} xs={12} md={12} lg={3} xl={3}  //Configuracion sin imagen
            item sm={12} xs={12} md={12} lg={5} xl={5}  //Configuracion con imagen
        ></Grid>
        
        </Grid>

      <Grid container sx={{pr:1,pl:1, pt:5}} spacing={4} >
          <Grid item sx={12} sm={12} md={4} lg={4} xl={4}>
            <InfoEvent 
              Icon = {GroupsIcon}
              title = 'Conferencias'
              description = 'Un ciclo de Conferencias para divulgar los resultados de la investigación aplicada en las áreas de Electrónica y Mecatrónica. Investigación que se realiza en nuestra universidad y en otros centros del país.'
              link='/Semana_EyM/conferences'
            />
          </Grid>
          <Grid item sx={12} sm={12} md={4} lg={4} xl={4}>
            <InfoEvent 
              Icon = {PrecisionManufacturingIcon}
              title = 'Concursos'
              description = 'El 11º Concurso de Minirobótica, en donde los participantes podrán integrar conocimiento y habilidades, de manera divertida, creativa e innovadora.'
              link='/Semana_EyM/contest'
            />
          </Grid>
          <Grid item sx={12} sm={12} md={4} lg={4} xl={4}>
            <InfoEvent 
              Icon = {HomeRepairServiceIcon}
              title = 'Talleres'
              description = 'Una serie de Talleres para promover e incentivar el conocimiento relacionado con las ingenierías en Electrónica y Mecatrónica, motivando a estudiantes, profesionistas y aficionados para la adquisición de nuevas habilidades.'
              link='/Semana_EyM/workshops'
            />
          </Grid>

      </Grid>



    </>
  )
}

/*
        <Grid item sm={12} xs={12} md={4} lg={4}>

          <div className="container">
            <div className="row">
              <LocationOnIcon />
              <Typography >Acatlima</Typography>  
            </div> 
          </div>
        </Grid>


*/

/*
      <Grid container sx={{padding:1}} spacing={2}>
        <Grid item><GroupsIcon/> <Typography variant="h6"> Conferencias </Typography> </Grid>
        <Grid item><PrecisionManufacturingIcon/> <Typography variant="h6"> Concursos </Typography> </Grid>
        <Grid item><HomeRepairServiceIcon/> <Typography variant="h6"> Talleres </Typography> </Grid>

      </Grid>

*/

//          {/*
//          <Box container sx={{pl:5}} > 
//            <Grid 
//              container
//              spacing={4}
//              direction="row"
//              alignItems="center"
//              justifyContent="center"
//            >
//              <Box container sx={{pt:2}}>
//                <img src={LogoElectronica}//(mode === 'dark' ? logoObs : logoClaro)} ///DESECTRUCTURAR
//                     style={{width:'100px'}}/>
//              </Box>
//              <Box container sx={{pt:2}}>
//                <img src={LogoMecatronica}//(mode === 'dark' ? logoObs : logoClaro)} ///DESECTRUCTURAR
//                     style={{width:'120px'}}/>
//              </Box>
//          </Grid>
//          </Box>*/}