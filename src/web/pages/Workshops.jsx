import { Grid, Typography } from "@mui/material"
import { WorkShopCard } from "../../interface/Cards/WorkShopCard"
import { SimpleList } from "../../interface/Lists/SimpleList"
import { TitleSection } from "../../interface/Typo/TitleSection"
import { WebLayout } from "../layout/WebLayout"

const talleresTitle = 'Talleres'
const talleresInfo = "Los talleres se realizarán los días 25 y 26 de abril en los laboratorios y salas de cómputo de la Universidad Tecnológica de la Mixteca. Su horario será de 16:00 a 19:00 horas."
const registro = "Los interesados deberán llenar el formato de registro"
const inscripcion = "La inscripción tendrá un costo de 120 pesos."
const listTalleres = [registro, inscripcion]

export const Workshops = () => {
  return (
    <>
    <WebLayout/>
    <Grid container> 
      <Grid item direction="column" xs={12} sm={12} md={12} lg={3}></Grid>
      <Grid item direction="column" xs={12} sm={12} md={12} lg={6}>
        

        <TitleSection text={talleresTitle} />
        <Typography sx={{paddingTop:1}}>{talleresInfo}</Typography>
        <SimpleList list={listTalleres}/>

      <WorkShopCard />

      </Grid>
      <Grid item direction="column" xs={12} sm={12} md={12} lg={3}></Grid>
    </Grid>
    </>
  )
}
