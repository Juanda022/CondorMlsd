import React from "react";
import { useState , useEffect } from 'react';
import Axios from 'axios';

//const URI ="http://localhost:3001/Route"

export const Verify = () =>{
    const[id, setid] = useState("")
    const[email,setemail] = useState("")
    const[loginStatues, setLoginStatus] = useState("")


    Axios.defaults.withCredentials = true;

    const verify = async () => {

        Axios.put("http://localhost:3001/Route/verify/"+id,{
            id:id,
            email:email,
            estado: true,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message)
            } else {
                setLoginStatus(response.data[0].id)
            }
        });
    };

    return(
        <>
            <h1>Confirme sus datos para validar</h1>

            <h3>Usuario</h3>
            <input type= "text" placeholder = "Username..." 
            onChange={(e) =>{
                setid(e.target.value)
            }}/>

            <h3>Email</h3>
            <input type="text" placeholder= "Email..."
            onChange={(e) => {
                setemail(e.target.value)
            }}/>
            
            <h3></h3>
            <button onClick={verify} className='btn btn-primary'>Confirmar</button>
            <h1>{loginStatues}</h1>
            
            
        </> 
    ) 
}