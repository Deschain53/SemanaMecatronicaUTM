import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

//Sobreescribe las propiedades del thema con lo deseado
export const purpleTheme = createTheme({
    palette:{
        primary:{
            main: '#09417C'//'#2196f3'
        },
        secundary:{
            main: '#74A8BD'//'#78B2BF'//'#3d5afe'
        },
        error:{
            main:red.A400
        }
    }
})