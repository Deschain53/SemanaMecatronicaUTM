import { Typography } from "@mui/material"
import { Schedule } from "../../interface/Schedule/Schedule"
import { WebLayout } from "../layout/WebLayout"

function createData(horario = '9:00', autor, titulo, universidad ) {
  return { horario, autor, titulo, universidad };
}

const introduccionConferencias = "Se realizarán los días 25 y 26 de abril y se llevarán a cabo en el Auditorio de la Universidad Tecnológica de la Mixteca. El acceso a las mismas "
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
      <Typography variant="h3">Conferencias</Typography>
      <Typography>{introduccionConferencias}</Typography>
      <Typography>{accesoSinCosto}</Typography>
      <Schedule titulo='Horario' infoConferencias = {infoConferencias}/> 
    </>
    
  )
}
