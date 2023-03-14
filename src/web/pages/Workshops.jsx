import { Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { DownloadButton } from "../../interface/Buttons/DownloadButton"
import BasicCard from "../../interface/Cards/ExampleCard"
import { WorkShopCard } from "../../interface/Cards/WorkShopCard"
import { DownloadList } from "../../interface/Lists/DownloadList"
import { SimpleList } from "../../interface/Lists/SimpleList"
import { TitleSection } from "../../interface/Typo/TitleSection"
import { WebLayout } from "../layout/WebLayout"

const talleresTitle = 'Talleres'
const talleresInfo = "Los talleres se realizarán los días 25 y 26 de abril en los laboratorios y salas de cómputo de la Universidad Tecnológica de la Mixteca. Su horario será de 16:00 a 19:00 horas."
const registro = "Los interesados deberán llenar el formato de registro"
const inscripcion = "La inscripción tendrá un costo de 120 pesos."
const listTalleres = [
  {item:registro, link:'https://www.utm.mx/~minirobotica/formatos/Formato_Registro_Talleres.docx'}, 
  {item:inscripcion, link: ''}
]


//Informacion de talleres a detalle
const createTaller = (tituloD='', objetivoD='', contenidoD=[''], requisitosD=[''], instructorD='', lugarD='', max=20 ) => {
  return {titulo:tituloD, objetivo:objetivoD, contenido:contenidoD, requisitos:requisitosD, instructor:instructorD, lugar:lugarD,max} 
}

const talleresList = [
  createTaller(
    'DISEÑO Y ANÁLISIS DE SISTEMAS MECÁNICOS Y ROBÓTICOS UTILIZANDO EL PROGRAMA MSC ADAMS VIEW',
    ' El participante aprenda a utilizar el software ADAMS View™ con el objetivo de diseñar y simular la cinemática y dinámica de sistemas mecánicos y robóticos. Este programa es compatible con Matlab® y Solidworks® entre otros, lo cual permite importar y exportar datos para realizar los análisis necesarios.',
    [
      'Introducción de ADAMS View™',
      'Construcción de un mecanismo',
      'Simulación del mecanismo',
      'Ploteo de resultados',
      'Creación de medidas',
      'Exportación e importación de datos',
      'Creación general de restricciones',
      'Co-simulación ADAMS-Matlab',
    ],
    [
      'Conocimiento del software SolidWorks',
      'Manejo de lectura en inglés'
    ],
    ' Dra. Esther Lugo González',
    ' Sala de cómputo 1',
    20
  ),
  createTaller(),
] 


export const Workshops = () => {
  return (
    <>
    <WebLayout/>
    <Grid container sx={{pr:2,pl:2}}> 
      <Grid item direction="column" xs={12} sm={12} md={12} lg={3}></Grid>
      <Grid item direction="column" xs={12} sm={12} md={12} lg={6}>
        

        <TitleSection text={talleresTitle} />
        <Typography sx={{pt:1}}>{talleresInfo}</Typography>
        <DownloadList list={listTalleres} fS='1em'/>



        <Box sx={{pt:2}}>
          {
            talleresList.map( (taller) => {
              return(
                <WorkShopCard taller={taller}/>
                
                )
              })
          }
        </Box>
      
      </Grid>
      <Grid item direction="column" xs={12} sm={12} md={12} lg={3}></Grid>
    </Grid>
    </>
  )
}
