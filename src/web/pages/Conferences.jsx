import { Grid, Typography } from "@mui/material"
import { Schedule } from "../../interface/Schedule/Schedule"
import { TitleSection } from "../../interface/Typo/TitleSection";
import { WebLayout } from "../layout/WebLayout"

function createData(horario = '9:00', autor, titulo, universidad ) {
  return { horario, autor, titulo, universidad };
}

const introduccionConferencias = "Se realizarán los días 27 y 28 de abril y se llevarán a cabo en el Auditorio de la Universidad Tecnológica de la Mixteca. El acceso a las mismas NO TIENE COSTO"
const accesoSinCosto = 'NO TIENE COSTO.';

const conferenciasDia1 = [
  createData('9:00 - 10:00' , 'MC. Felipe Santigo Espinoza', 'Microcontroladores basados en ARM y el estándar de CMSIS.', 'Inspiring Software Tecnology'),
  createData('10:00 - 11:00', 'Dr. Oscar David Ramirez Cárdenaz', 'Introducción a la robótica móvil: navegando en el mundo de los robots autónomos', 'División de estudios de posgrado UTM'),
  createData('11:00 - 12:00', 'Dr. Jaime Julián Cid Monjaraz', 'Innovación y mecatrónica', 'Benemérita Universidad Autónoma de Puebla'),
  createData('12:00 - 13:00', 'Dr. José de Jesus Rangel Magdaleno', 'Aplicaciones de los FPGAS en la instrumentación y procesamiento de señales', 'Instituto Nacional de Astrofísica, Óptica y Electrónica'),
  createData('13:00 - 14:00', 'Dra. Esther Lugo Gonzalez', 'Técnicas de optimización implementadas en el diseño de prototipos', 'Instituto de Electrónica y Mecatrónica UTM'),
];

const conferenciasDia2 = [
  createData('9:00 - 10:00' , 'Dr. José Emilio Vargas Soto', 'Metodología de proyectos mecatrónicos', 'Universidad Autónoma de Querétero'),
  createData('10:00 - 11:00', 'Dra. Yara Perez Maldonado', 'Modelos matemáticos para la estimación de incertidumbre en tanques de grandes volúmenes', 'Instituto Politecnico Nacional'),
  createData('11:00 - 12:00', 'M.C. Genoveva Ramirez Castillo', 'Las habilidades de un ingeniero 4.0', 'Universidad Autónoma de la Ciudad de México'),
  createData('12:00 - 13:00', 'Dr. Jose Antonio Juárez Abad', 'La rectificación activa en los sistemas de energía para alta eficiencia', 'Instituto de Electrónica y Mecatrónica UTM'),
  createData('13:00 - 14:00', 'Dra. Verónica Rodriguez Lopez', 'Inteligencia artificial e internet de las cosas', 'Instituto de Computación UTM'),
];

const infoConferencias = [
  {fecha:{dia:27,mes:4}, conferencias: conferenciasDia1},
  {fecha:{dia:28,mes:4}, conferencias: conferenciasDia2},
]

export const Conferences = () => {
  return (
    <>
    <WebLayout/>
    <Grid container sx={{pr:2,pl:2}}> 
      <Grid item direction="column" xs={12} sm={12} md={12} lg={3}></Grid>
      <Grid item direction="column" xs={12} sm={12} md={12} lg={6}>

        <TitleSection text='Conferencias' />
        <Typography variant='h6' sx={{ mt:2, fontWeight:'700'}}>{introduccionConferencias}</Typography>


        <Schedule titulo='Horario' infoConferencias = {infoConferencias}/> 

      </Grid>
      <Grid item direction="column" xs={12} sm={12} md={12} lg={3}></Grid>
    </Grid>

    </>
    
  )
}
 
/*

    <Grid container> 
      <Grid item direction="column" xs={12} sm={12} md={12} lg={1}></Grid>
      <Grid item direction="column" xs={12} sm={12} md={12} lg={10}>


      </Grid>
      <Grid item direction="column" xs={12} sm={12} md={12} lg={1}></Grid>
    </Grid>
      
*/