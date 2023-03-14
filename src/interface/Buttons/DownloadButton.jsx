import React from 'react'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { IconButton } from '@mui/material';

const linkD = 'https://www.utm.mx/~minirobotica/formatos/Formato_Registro_Talleres.docx';

export const DownloadButton = ({link = linkD}) => {
  return (
    <>
        <IconButton href={link} >
            <FileDownloadIcon color="primary"/>
        </IconButton>
    </>
  )
}
