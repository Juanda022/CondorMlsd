import React from "react";
import Axios from 'axios';
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";



export const NotaCrs = () =>{
    const [email] = useState(localStorage.getItem('email'));
    const [id_curso] = useState(localStorage.getItem('idCurso'));
    const [Cursos,SetCursos]=useState([]);
    const history = useNavigate();

    useEffect(()=>{
        const URI = `http://localhost:3001/Route/Notas/${email}/${id_curso}`;
        getTablaNotas(URI)
    },[])

    const getTablaNotas = async (URI) =>{
        try {
            const res = await Axios.get(URI);
            SetCursos(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const estudiantesNota = (id) => {
        localStorage.setItem('idNota', id);
        history('/prof/nota',{replace: true});
    }

    if (email) {        
        return(
            <div>
                <div className="container">
                    <h1>Notas curso</h1>
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <thead className="table-primary">
                                <tr>
                                    <th>Id</th>
                                    <th>Asignatura</th>
                                    <th>Estudiante</th>
                                    <th>Nota</th>
                                    <th>Cambio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Cursos.map((Notas) =>(
                                    <tr key={Notas.id}>
                                        <td>{Notas.id}</td>
                                        <td>{Notas.asignatura}</td>
                                        <td>{Notas.estudiante}</td>
                                        <td>{Notas.nota}</td>
                                        <td><button className='btn btn-primary'
                                         onClick={() => estudiantesNota(Notas.id)}
                                         >+</button></td>
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