import { Grid, Typography } from "@mui/material"
import { Schedule } from "../../interface/Schedule/Schedule"
import { TitleSection } from "../../interface/Typo/TitleSection";
import { WebLayout } from "../layout/WebLayout"

function createData(horario = '9:00', autor, titulo, universidad ) {
  return { horario, autor, titulo, universidad };
}

const introduccionConferencias = "Se realizarán los días 26 y 27 de abril y se llevarán a cabo en el Auditorio de la Universidad Tecnológica de la Mixteca. El acceso a las mismas "
const accesoSinCosto = 'NO TIENE COSTO.';

const conferenciasDia1 = [
  createData('9:30' , 'Nombre de autor 1', 'Titulo de conferencia/taller/Concurso 1', 'Universidad 1'),
  createData('10:30', 'Nombre de autor 2', 'Titulo de conferencia/taller/Concurso 2', 'Universidad 2'),
  createData('11:00', 'Nombre de autor 3', 'Titulo de conferencia/taller/Concurso 9', 'Universidad 4'),
];

const conferenciasDia2 = [
  createData('9:30' , 'Nombre de autor 1', 'Titulo de conferencia/taller/Concurso 1', 'Universidad 1'),
  createData('10:30', 'Nombre de autor 2', 'Titulo de conferencia/taller/Concurso 2', 'Universidad 2'),
  createData('11:00', 'Nombre de autor 3', 'Titulo de conferencia/taller/Concurso 3', 'Universidad 3'),
];

const infoConferencias = [
  {fecha:{dia:26,mes:6}, conferencias: conferenciasDia1},
  {fecha:{dia:27,mes:6}, conferencias: conferenciasDia2},
]

export const Conferences = () => {
  return (
    <>
    <WebLayout/>
    <Grid container> 
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