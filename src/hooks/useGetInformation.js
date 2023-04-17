import {useState} from 'react';

export const useGetInformation = ({fileName='home'}) => {

    const [information, setInformation] = useState({});

    const getInformation = async() =>{
        try{
        const header= `https://ronchon-vin-08117.herokuapp.com/`;
            //const header='';
            //const url = header +`https://www.simcompanies.com/api/v2/market/${encodeURI(id)}`;
        const url = header + `https://www.utm.mx/Semana_EyM/json/${encodeURI(fileName)}.json`;
            //const url = 'https://www.utm.mx/Semana_EyM/json/home.json';
        const resp = await fetch(url,
            {
              'mode':'no-cors',
              'headers': { 'Access-Control-Allow-Origin': '*' }
            }
        );

        const info = await resp.json();
        
        console.log(resp)


        console.log(info)
       return resp;

    //fetch('https://www.utm.mx/Semana_EyM/json/home.json')
    //.then((response) => response.json())
    //.then((json) => console.log(json));
    //
        }catch(error){
            console.log(error);
        }

    };


    return {getInformation, information };
}