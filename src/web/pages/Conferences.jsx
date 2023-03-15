import { Grid, Typography } from "@mui/material"
import { Schedule } from "../../interface/Schedule/Schedule"
import { TitleSection } from "../../interface/Typo/TitleSection";
import { WebLayout } from "../layout/WebLayout"

function createData(horario = '9:00', autor, titulo, universidad ) {
  return { horario, autor, titulo, universidad };
}

const introduccionConferencias = "Se realizarán los días 27 y 28 de abril y se llevarán a cabo en el Auditorio de la Universidad Tecnológica de la Mixteca. El acceso a las mismas "
const accesoSinCosto = 'NO TIENE COSTO.';

const conferenciasDia1 = [
  createData('9:00 - 10:00' , 'Ing. Omar Hernández Gallegos', '5G Technology: Enabler of the new networked society.', 'Ericsson'),
  createData('10:00 - 11:00', 'Dr. Ramiro Velazquez', 'Tecnologías de asistencia para personas con discapacidades físicas.', 'Universidad Panamericana'),
  createData('11:00 - 12:00', 'Ing. Luis Sergio Martínez Villanueva', 'The Future Mobility.', 'Continental Automotive'),
  createData('12:00 - 13:00', 'M.C. Eric William Zurita', 'Control Robusto: PID y Rechazo Activo de Perturbaciones.', 'Cinvestav'),
];

const conferenciasDia2 = [
  createData('9:00 - 10:00' , 'Dr. Hebert Sira Ramírez', 'La disciplina de la mecatrónica: logros, avances y retos.', 'Universidad 1'),
  createData('10:00 - 11:00', 'Dr. Pedro Bañuelos Sánchez', 'Generación de energía eléctrica por medio de olas de mar en México.', 'UDLAP'),
  createData('11:00 - 12:00', 'Dr. José Fermi Guerrero Castellanos', 'Los Vehículos Aéreos no tripulados: desarrollo y perspectivas para científicos e ingenieros.', 'BUAP'),
  createData('12:00 - 13:00', 'Dr. Jesus Linares Flores', 'Por definir', 'UTM'),
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
        <Typography sx={{mt:1}}>{introduccionConferencias}</Typography>
        <Typography>{accesoSinCosto}</Typography>

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