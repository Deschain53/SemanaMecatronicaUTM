import { Button, Grid, Link, Typography } from "@mui/material"
import { Box } from "@mui/system";
import { ListIconText } from "../../interface/Lists/ListIconText";
import { ListText } from "../../interface/Lists/ListText"
import { WebLayout } from "../layout/WebLayout"
import { Subsection } from "../../interface/Typo/Subsection";
import { SimpleList } from "../../interface/Lists/SimpleList";

//Iconos de lista de categorias:
import EngineeringIcon from '@mui/icons-material/Engineering';
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
import { Schedule } from "../../interface/Schedule/Schedule";

function createData(horario = '9:00',  titulo, autor='Auditorio UTM', universidad='' ) {
  return { horario, autor, titulo, universidad };
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
  {item:"Los equipos participantes deberán llenar el formato de registro.", link:'http://www.utm.mx/Semana_EyM/formatos/Formato_Registro_Concurso-2023.docx'},
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
  {item:'Descargar Reglamento - Prototipos ',link:'https://www.utm.mx/Semana_EyM/formatos/Reglamento_Prototipos.pdf'},
  {item:'Descargar Reglamento - Robot de laberinto ',link:'https://www.utm.mx/Semana_EyM/formatos/Reglamento_Laberinto.pdf'},
  {item:'Descargar Reglamento - Mini-sumo           ',link:'https://www.utm.mx/Semana_EyM/formatos/Reglamento_Minisumo.pdf'},
]

//Lista de premios
const listPremios = [
  'Todos los concursantes recibirán constancias individuales de participación. Se entregarán en los horarios destinados para ello.',
  'Se premiarán los tres primeros lugares de cada categoría con las siguientes cantidades:',
]

//Programa de actividades
const programaActividades = 'Todas las actividades se realizarán en el auditorio de la Universidad Tecnológica de la Mixteca. A un costado del mismo se tendrá un espacio para pruebas y recarga de baterías. En el espacio del escenario sólo estarán los equipos mientras realizan sus pruebas eliminatorias o en las competencias finales.'
const actividadesDia1 = [
  createData('8:00 - 10:00'  , 'Registro de Competidores del XI Concurso de Mini Robótica', 'Mesa de registro - Entrada UTM', ''),
  createData('8:30 - 9:30'   , 'Exhibición del vehículo eléctrico', 'Explanada frente al auditorio', ''),
  createData('9:30 - 10:00'  , 'Inauguración de la VII Semana de Electrónica y Mecatrónica y  11° Concurso de Mini Robótica', 'Auditorio UTM', ''),
  createData('10:00 - 12:00' , 'Ronda eliminatoria de Robot de Laberinto', 'Auditorio UTM', ''),
  createData('12:00 - 14:00' , 'Ronda eliminatoria de Mini Sumo', 'Auditorio UTM', ''),
  createData('14:00 - 16:00' , 'Comida', '', ''),
  createData('17:00 - 17:45' , 'Ronda final de Robot de Laberinto', 'Auditorio UTM', ''),
  createData('17:45 - 18:30' , 'Ronda final de Mini Sumo', 'Auditorio UTM', ''),
  createData('16:00 - 18:30' , 'Concurso de Prototipos', 'Parte alta de la cafetería', ''),
]
const actividadesHorario = [{fecha:{dia:26,mes:4}, conferencias: actividadesDia1}]

const fechaO = {dia:16,mes:6}

//Informacion adicional
const infoElement1 = 'Las noticias y posibles cambios en las reglas y acontecimientos relevantes se anunciarán por medio de la página oficial de la VII Semana de Electrónica y Mecatrónica y la página del evento en '
const infoElement2 = "Los organizadores y otros vinculados al desarrollo del concurso no se responsabilizarán por daños, pérdidas u otros perjuicios a las herramientas y robot, que en forma accidental se pueda provocar en el evento."


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
          <ListIconText Icon={EngineeringIcon} texto='Prototipos'/>
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
          <Schedule titulo='' infoConferencias = {actividadesHorario}/> 


        <Subsection text="Información adicional"/>
          <Box container>
              <Grid container>
                  <Typography variant='body' align='justify' sx={{paddingTop: 0.5, fontSize:'0.9em'}}  > 
                    &bull; {infoElement1} 
                  </Typography>
                  <TypoLink text='Facebook' link='https://www.facebook.com/profile.php?id=100057444708199'/>
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
