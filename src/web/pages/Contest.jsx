import { Button, Grid, Link, Typography } from "@mui/material"
import { Box } from "@mui/system";
import { ListIconText } from "../../interface/Lists/ListIconText";
import { ListText } from "../../interface/Lists/ListText"
import { WebLayout } from "../layout/WebLayout"
import { Subsection } from "../../interface/Typo/Subsection";
import { SimpleList } from "../../interface/Lists/SimpleList";

//Iconos de lista de categorias:
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BorderOuterIcon from '@mui/icons-material/BorderOuter';

//Iconos de lista de premios:
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
import { TitleSection } from "../../interface/Typo/TitleSection";
import { DownloadList } from "../../interface/Lists/DownloadList";
import { TypoLink } from "../../interface/Typo/TypoLink";
import { SimpleEventList } from "../../interface/Schedule/SimpleEventList";

function createData(horario = '9:00 -10:00', titulo,  ) {
  return { horario, titulo, };
}

//Informacion con la que rellenar la pagina: ----------------------------------------------
const titleConcurso = "11° Concurso de minirobótica";
const intro1 = "El 11° Concurso de Minirobótica se apertura con tres categorías de participación:";
const intro2 = "La contienda está dirigida a estudiantes que cursen los niveles medio superior o superior de cualquier institución educativa, quienes deberán avalar su condición de estudiantes por medio de una credencial vigente."

const objetivo = "Fomentar el espíritu creativo y de innovación en los participantes, promoviendo el uso de sus conocimientos y habilidades para resolver problemas de carácter práctico de una forma ingeniosa y divertida."

const competidoresIntro = '';
const listCompetidores = [
  {item:"La participación será por equipos hasta de 3 integrantes en todas las categorías.", link:''},
  {item:"La inscripción tendrá una cuota de recuperación de $300.00 por prototipo, con un descuento para estudiantes del SUNEO.", link:''},
  {item:"Un equipo puede registrar más de un prototipo en la misma categoría siempre y cuando sus prototipos tengan diseños diferentes.", link:''},
  {item:"Los equipos participantes deberán llenar el formato de registro.", link:'https://www.utm.mx/~minirobotica/formatos/Formato_Registro_Concurso.docx'},
  {item:"Una vez llenado el formato, deberán entregarlo junto con copias de las credenciales de estudiantes vigentes en la mesa de registro el día del evento, en donde también se recibirán los pagos en efectivo.", link:''},
  {item:"Si durante la competencia se observa que personas sin registro manipulan o corrigen un mini-robot, el equipo automáticamente quedará eliminado.", link:''},
  {item:"Una categoría podrá declararse desierta si tiene menos de 5 competidores.", link:''},
]

const duranteIntro= '';
const listDurante = [
  'Los equipos deberán estar listos en cada competencia, una vez que un equipo sea llamado, tendrá 2 minutos para presentarse. Transcurrido ese tiempo, automáticamente perderá esa contienda.',
  'Las características de los robots y las reglas de competencia se definen de manera independiente para cada una de las categorías.',
  'Antes de comenzar el concurso se comprobará que los prototipos cumplan con las especificaciones para la prueba.',
  'Los jueces serán designados por el comité organizador.',
  'Será responsabilidad de los jueces evaluar cualquier situación no considerada en las bases y reglas del concurso.',
  'Las decisiones de los jueces serán inapelables.',
]

const byrIntro = '';
const listByR = [
  {item:'Descargar Reglamento - Seguidor de línea  ',link:'https://www.utm.mx/~minirobotica/reglamentos/Reglamento_Seguidor.pdf'},
  {item:'Descargar Reglamento - Robot de laberinto ',link:'https://www.utm.mx/~minirobotica/reglamentos/Reglamento_Seguidor.pdf'},
  {item:'Descargar Reglamento - Mini-sumo           ',link:'https://www.utm.mx/~minirobotica/reglamentos/Reglamento_Minisumo.pdf'},
]

//Lista de premios
const listPremios = [
  'Todos los concursantes recibirán constancias individuales de participación. Se entregarán en los horarios destinados para ello.',
  'Se premiarán los tres primeros lugares de cada categoría con las siguientes cantidades:',
]

//Programa de actividades
const programaActividades = 'Todas las actividades se realizarán en el auditorio de la Universidad Tecnológica de la Mixteca. A un costado del mismo se tendrá un espacio para pruebas y recarga de baterías. En el espacio del escenario sólo estarán los equipos mientras realizan sus pruebas eliminatorias o en las competencias finales.'
const actividadesHorario = [
  createData('9:30 - 10:30' , 'Titulo de conferencia/taller/Concurso 1',),
  createData('10:30 - 11:00', 'Titulo de conferencia/taller/Concurso 2',),
  createData('11:00 - 11:30', 'Titulo de conferencia/taller/Concurso 3',),
];
const fechaO = {dia:16,mes:6}

//Informacion adicional
const infoElement1 = 'Las noticias y posibles cambios en las reglas y acontecimientos relevantes se anunciarán por medio de la página oficial de la V Semana de Electrónica y Mecatrónica y la página del evento en '
const infoElement2 = "Los organizadores y otros vinculados al desarrollo del concurso no se responsabilizarán por daños, pérdidas u otros perjuicios a las herramientas y robot, que en forma accidental o no se pueda provocar en el evento."


export const Contest = () => {

  const preventDefault = (event) => event.preventDefault();
  return (
    <>
    <WebLayout/>

    <Grid container sx={{pr:2,pl:2}}> 
      <Grid item direction="column" xs={12} sm={12} md={12} lg={3}></Grid>
      <Grid item direction="column" xs={12} sm={12} md={12} lg={6}>

        <TitleSection text={titleConcurso}/>

        <Typography variant='h6' sx={{pt:2, fontWeight:'700'}}>{intro1}</Typography>

        <Box container>
          <ListIconText Icon={DirectionsCarIcon} texto='Seguidores de linea' download="Reglamento_Seguidor.pdf"/>
          <ListIconText Icon={BorderOuterIcon} texto='Robot Laberinto'/>
          <ListIconText Icon={SmartToyIcon} texto='Mini-sumo'/>
        </Box>

        <Typography sx={{paddingTop:2}} align='justify' >{intro2}</Typography>

        <Subsection text="Objetivo"/>
          <Typography align='justify'>{objetivo}</Typography>

        <Subsection text="Competidores"/>
          <Typography align='justify'>{competidoresIntro}</Typography>
          <DownloadList list={listCompetidores}/>

        <Subsection text="Durante la competencia"/>
          <Typography align='justify'>{duranteIntro}</Typography>
          <SimpleList list={listDurante}/>

        <Subsection text="Bases y reglas de la competencia"/>
          <Typography align='justify'>{byrIntro}</Typography>
          <DownloadList list={listByR}/>


        <Subsection text="Premios"/>
            <SimpleList list={listPremios}/>
            <Box container>
              <ListIconText Icon={Filter1Icon} texto='$ 3000.00 MXN'/> 
              <ListIconText Icon={Filter2Icon} texto='$ 1500.00 MXN' />
              <ListIconText Icon={Filter3Icon} texto='Regalos con valor superior a $ 500.00'/>
            </Box>

        <Subsection text="Programa de actividades"/>
          <Typography align='justify'>{programaActividades}</Typography>
        {/*  <SimpleEventList  fecha ={fechaO} eventos = {actividadesHorario}/>
        */ 
          //
        }

        <Subsection text="Información adicional"/>
          <Box container>
              <Grid container>
                  <Typography variant='body' align='justify' sx={{paddingTop: 0.5, fontSize:'0.9em'}}  > 
                    &bull; {infoElement1} 
                  </Typography>
                  <TypoLink text='Facebook' link='https://www.facebook.com/Departamento-de-Servicios-Escolares-UTM-120820888621597'/>
              </Grid>
              <Grid container>
                  <Typography variant='body' align='justify' sx={{paddingTop: 0.5, fontSize:'0.9em'}}  > 
                    &bull; {infoElement2}
                  </Typography>
              </Grid>
          </Box>
  

      </Grid>
      <Grid item direction="column" xs={12} sm={12} md={12} lg={3}></Grid>
    </Grid>




    </>
  )
}
