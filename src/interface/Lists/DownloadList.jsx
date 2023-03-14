import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { DownloadButton } from '../Buttons/DownloadButton'


const listDownloadD = [
  {item:'Cosas por hacer 1',link:'https://www.utm.mx/~minirobotica/formatos/Formato_Registro_Talleres.docx'}, 
  {item:'Cosas por hacer 2',link:''}, 
  {item:'Cosas por hacer 3',link:''},]

//Este componente solo funciona con largas listas de codigo
export const DownloadList = ({icon=1 , pdT= 0.5, fS='0.9em', list= listDownloadD}) => {
  return (
    <Grid
        container
       // spacing={0}
        direction="row"
        //alignItems="center"
        //justifyContent="center"
        sx={{paddingTop:0.5}}
    >
      
      {
        
        list.map(({item,link}) => {
            return(         
              <>
                <Grid container>
                  <Typography variant='body' align='justify' sx={{paddingTop: pdT, fontSize:fS}}  > 
                    &bull; {item}
                  </Typography>
                  {
                    (link!='' )
                    ? (<DownloadButton link={link}/>)
                    : (<></>)
                  
                  }
                </Grid>
              </>
            )
        })
        
      }   


    </Grid>
  )
}
