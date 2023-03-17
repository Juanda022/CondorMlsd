import React from "react";
import Axios from 'axios';
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";



export const UpdateNota = () =>{
    const [email] = useState(localStorage.getItem('email'));
    const [id_nota] = useState(localStorage.getItem('idNota'));
    const[nota, setNota] = useState("")
    const history = useNavigate();

    const update = async () => {
        await Axios.put(`http://localhost:3001/Route/UpNota/${id_nota}`,{
            nota:nota,
        })

    }

    if (email) {        
        return(
            <div>
                <div className="container">
                    <h1>Editar nota</h1>
                    <input type= "text" placeholder = "Nota..." 
                        onChange={(e) => {
                        setNota(e.target.value);
                    }}/>
                    <button onClick={update}>Actualizar</button>
                </div> 
            </div> 
        ) 
    } else {
        return(
            history('/',{replace: true}));
    } 
}