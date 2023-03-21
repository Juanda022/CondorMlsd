import React from "react";
import Axios from 'axios';
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";



export const SinNota = () =>{
    const [email] = useState(localStorage.getItem('email'));
    const [id_curso] = useState(localStorage.getItem('idCurso'));
    const [SinNota,SetSinNota]=useState([]);
    const history = useNavigate();

    useEffect(()=>{
        const URI = `http://localhost:3001/Route/SinNotas/${email}/${id_curso}`;
        getTablaSinNotas(URI)
    },[])

    const getTablaSinNotas = async (URI) =>{
        try {
            const res = await Axios.get(URI);
            SetSinNota(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const estudiantesSinNota = (id) => {
        localStorage.setItem('id_estu', id);
        history('/prof/crea',{replace: true});
    }

    const regresarNotas = () => {
        history('/prof/notas',{replace: true});
    }

    if (email) {        
        return(
            <div>
                <div className="container">
                    <div className="contenedor">
                    <button className="btn btn-success ajustarButton separar"
                        onClick={regresarNotas}>🡰</button>
                        <h1 className="separar">Estudiantes</h1>
                    </div>
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <thead className="table-primary">
                                <tr>
                                    <th>Id</th>
                                    <th>nombre</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {SinNota.map((Notas) =>(
                                    <tr key={Notas.id}>
                                        <td>{Notas.id}</td>
                                        <td>{Notas.nombre_e}</td>
                                        <td>
                                        <button className='btn btn-info separar'
                                         onClick={() => estudiantesSinNota(Notas.id)}
                                        >Crear</button>
                                         
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> 
            </div> 
        ) 
    } else {
        return(
            history('/',{replace: true}));
    } 
}