import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { Typography } from "@mui/material"
import { boxSX } from '../../theme/hoverTheme';
import { Box } from '@mui/system';
//import { styled } from '@mui/system';

export const Evento = ({eventoObject}) => {
  return (
    <>
      <TableBody >
       
          <TableRow key={eventoObject.name} >
              <TableCell sx={{borderBottom:'0', paddingBottom:0}}>
                <Typography sx={{fontSize:'1em' , fontWeight:'600'}}>
                  {eventoObject.horario}
                </Typography>
              </TableCell>
              <TableCell sx={{borderBottom:'0', paddingBottom:0, pt:0}} colSpan={2}>
                <Typography sx={{ fontSize:'1.2em', fontWeight:600 }}> 
                  {eventoObject.titulo} 
                </Typography>
              </TableCell>
          </TableRow>
          <TableRow key={eventoObject.name}>
              <TableCell sx={{borderBottom:'0', paddingBottom:0, paddingTop:0}} ></TableCell>

              <TableCell sx={{borderBottom:'0', paddingBottom:1}}>
                <Typography color="grey" sx={{fontSize:'0.8em'}}>
                  {eventoObject.autor} 
                </Typography>
                </TableCell>
              <TableCell sx={{borderBottom:'0', paddingBottom:1}}>
                <Typography sx={{fontSize:'0.8em',  fontStyle: 'italic'}}> 
                  {eventoObject.universidad }
                </Typography>
              </TableCell>
          </TableRow>
      </TableBody>
   </>

  )
}

//hover={{ backgroundColor:'grey', opacity: [0.9, 0.8, 0.7], }}

//const EventWrapper = styled('div')({
//  backgroundColor: 'aliceblue',
//  paddingBottom: 8,
//  hover: { backgroundColor:'grey', opacity: [0.9, 0.8, 0.7], }
//  //borderRadius: 4,
//});
