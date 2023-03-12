import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { Typography } from "@mui/material"
//import { styled } from '@mui/system';

export const Evento = ({eventoObject}) => {
  return (
    <>
      <TableBody>
        <TableRow key={eventoObject.name} >
            <TableCell sx={{borderBottom:'0', paddingBottom:0}}>
              <Typography>
                {eventoObject.horario}
              </Typography>
            </TableCell>
            <TableCell sx={{borderBottom:'0', paddingBottom:0}}>
              {eventoObject.numeroIcono /*SUSTITUIR iconos[numeroIcono] */}
              </TableCell>
            <TableCell sx={{borderBottom:'0', paddingBottom:0}}>
              <Typography sx={{fontSize:'0.8em'}}> 
                {eventoObject.autor} 
              </Typography>
            </TableCell>
        </TableRow>
        <TableRow key={eventoObject.name}>
            <TableCell sx={{borderBottom:'0', paddingBottom:1, paddingTop:0}} colSpan={2}></TableCell>
            <TableCell sx={{borderBottom:'0', paddingBottom:1, paddingTop:0}} >
            <Typography sx={{ fontSize:'1.2em'}}> 
                {eventoObject.titulo} 
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
