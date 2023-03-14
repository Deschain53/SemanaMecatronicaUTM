import { Grid, Typography } from "@mui/material"
import { ListText } from "../../interface/Lists/ListText"
import { WebLayout } from "../layout/WebLayout"

const titleConcurso = "11° Concurso de minirobótica";

export const Contest = () => {
  return (
    <>
    <WebLayout/>
    <Grid 
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{paddingTop:1}}
      >
        <Typography variant='h5' color='primary' sx={{fontWeight:'700'}} >{titleConcurso}</Typography>
    </Grid>

    </>
  )
}
