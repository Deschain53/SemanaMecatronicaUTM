import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { Typography } from "@mui/material"
//import { styled } from '@mui/system';

export const SimpleEvent = ({eventoObject}) => {
  return (
    <>
      <TableBody>
        <TableRow key={eventoObject.name} >
            <TableCell sx={{borderBottom:'0', paddingBottom:0}}>
              <Typography>
                {eventoObject.horario}
              </Typography>
            </TableCell>
            <TableCell sx={{borderBottom:'0', paddingBottom:1, paddingTop:0}} colSpan={2}>
              <Typography sx={{ fontSize:'1.2em', fontWeight:600 }}> 
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
