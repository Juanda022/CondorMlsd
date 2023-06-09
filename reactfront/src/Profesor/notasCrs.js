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


    const deleteNota = async (id) => {
        Axios.delete(`http://localhost:3001/Route/Eliminar/${id}`)
        window.location.reload();
    };

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

    const estudiantesSinNota = () => {
        history('/prof/estu',{replace: true});
    }

    const regresarCursos = () => {
        history('/prof/cursos',{replace: true});
    }

    if (email) {        
        return(
            <div>
                <div className="container">
                    <div className="contenedor">
                    <button className="btn btn-success ajustarButton separar"
                        onClick={regresarCursos}>🡰</button>
                        <h1 className="separar">Notas curso</h1>
                        <button className="btn btn-success ajustarButton" onClick={estudiantesSinNota}>+</button>
                    </div>
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <thead className="table-primary">
                                <tr>
                                    <th>Id</th>
                                    <th>Asignatura</th>
                                    <th>Estudiante</th>
                                    <th>Nota</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Cursos.map((Notas) =>(
                                    <tr key={Notas.id}>
                                        <td>{Notas.id}</td>
                                        <td>{Notas.asignatura}</td>
                                        <td>{Notas.estudiante}</td>
                                        <td>{Notas.nota}</td>
                                        <td>
                                        <button className='btn btn-info separar'
                                         onClick={() => estudiantesNota(Notas.id)}
                                        >Editar</button>
                                        <button className='btn btn-danger'
                                         onClick={() => deleteNota(Notas.id)}
                                        >Borrar</button>
                                         
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