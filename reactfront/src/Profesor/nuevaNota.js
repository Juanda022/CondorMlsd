import React from "react";
import Axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export const CreateNota = () =>{
    const [email] = useState(localStorage.getItem('email'));
    const [id_estu] = useState(localStorage.getItem('id_estu'));
    const [id_curso] = useState(localStorage.getItem('idCurso'));
    const[nota, setNota] = useState("")
    const history = useNavigate();

    const update = async () => {
        if (nota > 5.0 || nota < 0) {
            alert('La nota no puede ser superior a 5.0 o inferior a 0')
        } else {
            await Axios.post(`http://localhost:3001/Route/CreaNota`,{
            estudiante_id:id_estu,
            curso_id:id_curso,
            nota:nota,
            }).then((response) => {
                {response.data.message ? alert(response.data.message):alert('La nota ha sido creada con exito');} //if-else
            });
            
        }
    }

    const regresarNotaCurso = () => {
        history('/prof/notas',{replace: true});
    }

    if (email) {        
        return(
            <div>
                <div className="container">
                    <div className="contenedor">
                        <button className="btn btn-success ajustarButton separar"
                        onClick={regresarNotaCurso}>🡰</button>
                        <h1>Crear nota</h1>
                        
                    </div>
                    <input type= "notas" placeholder = "Nota..." 
                        onChange={(e) => {
                        setNota(e.target.value);
                    }}/>
                    <button onClick={update} className="btn btn-success">Actualizar</button>
                </div> 
            </div> 
        ) 
    } else {
        return(history('/',{replace: true}));
    } 
}