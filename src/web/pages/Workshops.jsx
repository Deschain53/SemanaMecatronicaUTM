import { Typography } from "@mui/material"
import { WorkShopCard } from "../../interface/Cards/WorkShopCard"
import { WebLayout } from "../layout/WebLayout"

const talleresInfo = "Los talleres se realizarán los días 25 y 26 de abril en los laboratorios y salas de cómputo de la Universidad Tecnológica de la Mixteca. Su horario será de 16:00 a 19:00 horas."
const registro = "Los interesados deberán llenar el formato de registro"
const inscripcion = "La inscripción tendrá un costo de 120 pesos."

export const Workshops = () => {
  return (
    <>
    <WebLayout/>
      <Typography >Talleres</Typography>
      <Typography >{talleresInfo}</Typography>
      <Typography >{registro}</Typography>
      <Typography >{inscripcion}</Typography>

      <WorkShopCard/>
    </>
  )
}
