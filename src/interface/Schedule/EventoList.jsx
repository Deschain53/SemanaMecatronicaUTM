import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Evento } from './Evento';
import Typography from '@mui/material/Typography';

function createData(horario = '9:00', autor, titulo, numeroIcono) {
  return { horario, autor, titulo, numeroIcono};
}

const rows = [
  createData('9:30' , 'Nombre de autor 1', 'Titulo de conferencia/taller/Concurso 1', 1),
  createData('10:30', 'Nombre de autor 2', 'Titulo de conferencia/taller/Concurso 2', 2),
  createData('11:00', 'Nombre de autor 3', 'Titulo de conferencia/taller/Concurso 3', 3),
];

const fechaDefault = {dia:0,mes:5};

//Lo siguiente se agrega para evitar errores de props desde el DOM:
//const EventoTable = ({borderAxis,hoverRow,...props}) => <Table {...props}/>

const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

export const EventoList = ({ fecha= fechaDefault, eventos=rows}) => { //Como props se le pasara arreglo de  

  //const [borderAxis, setBorderAxis] = useState('none')

  return (
    <Paper sx={{ width: '100%' }}>
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader  size="small"  aria-label="sticky table" sx={{paddingTop:1}}>
        <TableHead >
          <TableRow >
            <TableCell align="left" colSpan={3} sx={{border:'0',paddingBottom:1.5}}>
              <Typography 
                variant="h6"
                sx={{paddingLeft:0, paddingTop:0, fontWeight:'bold'}}
              >{fecha.dia + ' de ' + meses[fecha.mes-1]}</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        
          {eventos.map((evento) => (
            <Evento eventoObject={evento}/>
          ))}
        
      </Table>
    </TableContainer>
  </Paper>
  );
}
   /*           return (
                <TableRow hover role="checkbox" tabIndex={-1} key={evento.code}>

                </TableRow>
              );
            })}
/*
    <>
      <Typography>{fecha.dia + ' de ' + meses[fecha.mes-1]}</Typography>
      <EventoTable 
        //borderAxis={borderAxis}
        //hoverRow = 'true'
        >
        <tbody>
          {eventos.map((evento) => (
            <Evento eventoObject={evento}/>
            ))}
        </tbody>
      </EventoTable>
    </>
*/