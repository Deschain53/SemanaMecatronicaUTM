import { Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { WorkShopCard } from "../../interface/Cards/WorkShopCard"
import { DownloadList } from "../../interface/Lists/DownloadList"
import { TitleSection } from "../../interface/Typo/TitleSection"
import { WebLayout } from "../layout/WebLayout"
//import talleres from '../../informacion/talleres.json'


const talleresTitle = 'Talleres'
const talleresInfo = "Los talleres se realizarán los días 27 y 28 de Abril en los laboratorios y salas de cómputo de la Universidad Tecnológica de la Mixteca. Su horario será de 16:00 a 19:00 horas."
const registro = "Los interesados deberán llenar el formato de registro"
const inscripcion = "La inscripción tendrá un costo de 150 pesos."
const listTalleres = [
  {item:registro, link:'https://www.utm.mx/Semana_EyM/formatos/Formato_Registro_Talleres-2023.docx'}, 
  {item:inscripcion, link: ''}
]


//Informacion de talleres a detalle
const createTaller = (tituloD='', objetivoD='', contenidoD=[''], requisitosD=[''], instructorD='', lugarD='', max=20 ) => {
  return {titulo:tituloD, objetivo:objetivoD, contenido:contenidoD, requisitos:requisitosD, instructor:instructorD, lugar:lugarD,max} 
}

const talleresList = [
  createTaller(
    'TALLER 1. PROGRAMACIÓN EN ARDUINO DE LA PLACA DE DESARROLLO ESP32',
    ' Dar una visión general de las características del microcontrolador ESP32 así como de la programación de los principales recursos, en alto nivel, usando el ambiente de programación de Arduino.',
    [
      'Introducción',
      'Introducción al microcontrolador ESP32',
      'Configuración del IDE de Arduino para usar el ESP32',
      'Entradas y salidas digitales',
      'Entradas y salidas analógicas',
      'Salida de modulación de ancho de pulso (PWM)',
      'Interrupciones externas',
      'Interrupciones de temporizador',
      'Comunicación Serial',
    ],
    [
      'Conocimiento básico de programación en lenguaje C',
      'Conocimiento de uso de protoboard ',
      'Haber trabajado con la placa Arduino Uno (preferible)'
    ],
    ' Dr. Fermín Hugo Ramírez Layeva',
    ' Laboratorio de potencia y sistemas electromecánicos',
    20
  ),
  createTaller(
    'TALLER 2. DISEÑO E IMPLEMENTACIÓN DE CIRCUITOS IMPRESOS',
    'El objetivo del taller es proporcionar el conocimiento para diseñar e implementar una tarjeta de circuito impreso, con base a un prototipo electrónico.',
    [
      'Introducción a los circuitos impresos',
      'Entorno del programa para el diseño de la tarjeta de circuito impreso (PCB)',
      'Edición del esquemático del circuito electrónico',
      'Edición del PCB (Ruteo de pistas, vías y plano de tierra)',
      'Impresión del negativo del PCB y fabricación',
      'Detalles de la síntesis del PCB',
    ],
    [
      'Conocimiento básicos de electrónica ',
      'Uso del protoboard'
    ],
    'Dr. Edgardo Yescas Mendoza',
    ' Sala de cómputo 1',
    20
  ),
  createTaller(
    'TALLER 3. DIBUJO, ENSAMBLE Y ANIMACIÓN DE MECANISMOS EN SOLIDWORKS',
    'El alumno aprenderá a diseñar piezas de elementos mecánicos, así como, a hacer el ensamble, la animación y el análisis. También aprenderá a representar las piezas en hojas de dibujo utilizando las vistas necesarias y los ensambles en vista explosionada.',
    [
      'Herramientas de croquizar y relaciones geométricas',
      'Ensamble y animación de mecanismos',
      'Análisis de piezas y de mecanismos',
      'Representación por medio de vistas y reglas de acotación',
      'Vista explosionada de ensambles',
    ],
    [
      'No se requiere conocimiento previo alguno.',
    ],
    'Dr. Alberto Antonio García',
    'Sala de cómputo 2',
    30
  ),
  createTaller(
    'TALLER 4. INTRODUCCIÓN A ANSYS WORKBENCH',
    'En este taller se abordará de forma general el uso de la herramienta Ansys Workbench, para el modelado por elementos finitos de problemas de ingeniería.',
    [
      'Interfaz de Ansys Workbench',
      'Modelado con space claim',
      'Mallado',
      'Solución',
      'Pos-procesamiento',
    ],
    [
      'No se requiere conocimiento previo alguno.',
    ],
    'Dr. José Gabriel Mendoza Larios',
    'Sala de cómputo 3',
    25
  ),
  createTaller(
    'TALLER 5. ROBÓTICA - PROGRAMACIÓN DE LEGO® MINDSTORMS MEDIANTE EL SOFTWARE ROBOTC',
    'En este taller se aprenderá a programar la plataforma LEGO Mindstorms® mediante el software ROBOTC® con el objetivo de mostrar un panorama generalizado de lo que es la robótica, contemplando en este curso las interrogantes de ¿Qué es la robótica?, ¿Para qué se utiliza? Y ¿Cómo generar soluciones a una problemática ingenieril?, ante esas interrogantes es importante conocer los elementos básicos que contiene un robot (mcu, sensores y actuadores), así como también, mostrar lo tangible de la programación en lenguaje en c y su aplicación en desafíos y solución de problemáticas en la ingeniería, por lo que, los participantes tendrán que generar su código del comportamiento de los periféricos en los que se pueden conectar sensores y actuadores para llevar acabo la solución de una tarea.',
    [
      'Introducción a la robótica y programación LEGO',
      'Actuadores - servomotores - motores en LEGO (configuraciones de velocidad y giro)',
      'Sensores - sensor de contacto, sensor de distancia, sensor de color y sensor infrarrojo',
      'Seguimiento de trayectoria de un montacargas parte 1.',
      'Seguimiento de trayectoria de un montacargas (con obstáculos) parte 2.',
      'Procesos concurrentes - acarreo de cargas en un proceso de producción',
    ],
    [
      'Conocimientos básicos de programación en algún lenguaje (C, Java, Phyton) ',
      'Conocimientos básicos en electrónica (sensores ópticos, sensores de contacto y servomotores).'
    ],
    'Ing. Mario Enrique Herrera Cordero',
    'Laboratorio de electrónica analógica',
    14
  ),
  createTaller(
    'TALLER 6. SIMULACIÓN DE SISTEMAS MECATRÓNICOS UTILIZANDO EL PROGRAMA MSC ADAMS VIEW™ ',
    'El participante aprenderá a utilizar el software ADAMS View™ con el objetivo de simular sistemas mecánicos, robóticos y mecatrónicos para visualizar el comportamiento de variables como la cinemática y la dinámica. Esta herramienta es compatible con Matlab® y Solidworks® entre otros, lo que permite importar y exportar datos para realizar los análisis pertinentes. Como resultado se tendrá el conocimiento básico del software, así como la interpretación de los resultados obtenidos, además del material necesario para desarrollar prácticas complementarias.',
    [
      'Introducción de ADAMS View™',
      'Construcción de un mecanismo',
      'Simulación del mecanismo',
      'Ploteo de resultados',
      'Creación de medidas',
      'Exportación e importación de datos',
      'Co-simulación ADAMS-Matlab',
    ],
    [
      'Conocimiento de algun software CAD (preferible)',
      'Manejo de lectura en inglés'
    ],
    'Dra. Esther Lugo González',
    'Sala de cómputo 4',
    20
  ),

] 


export const Workshops = () => {
  return (
    <>
    <WebLayout/>
    <Grid container sx={{pr:2,pl:2}}> 
      <Grid item direction="column" xs={12} sm={12} md={12} lg={3}></Grid>
      <Grid item direction="column" xs={12} sm={12} md={12} lg={6}>
        

        <TitleSection text={talleresTitle} />
        <Typography variant='h6' sx={{fontWeight:'700', pt:2}}>{talleresInfo}</Typography>
        <DownloadList list={listTalleres} fS='1.2em'/>
      
      </Grid>
      <Grid item direction="column" xs={12} sm={12} md={12} lg={3}></Grid>
    </Grid>

      <Box container sx={{pl:2,pr:2, pt:2}}>
        <Grid container fluid>
          {
            talleresList.map( (taller) => {
              return(
                <WorkShopCard taller={taller}/>
                
                )
              })
            }
        </Grid>
      </Box>
    </>

  )
}
