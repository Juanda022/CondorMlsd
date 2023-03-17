import React from "react";
import Axios from 'axios';
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";



export const Cursos = () =>{
    const [email] = useState(localStorage.getItem('email'));
    const [Cursos,SetCursos]=useState([]);
    const history = useNavigate();

    useEffect(()=>{
        const URI = `http://localhost:3001/Route/cursos/${email}`;
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

    const estudiantesCurso = (id) => {
        localStorage.setItem('idCurso', id);
        history('/prof/notas',{replace: true});
    }

    if (email) {        
        return(
            <div>
                <div className="container">
                    <h1>Cursos asignados</h1>
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <thead className="table-primary">
                                <tr>
                                    <th>Id</th>
                                    <th>Curso</th>
                                    <th>Notas</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Cursos.map((curso) =>(
                                    <tr key={curso.id}>
                                        <td>{curso.id}</td>
                                        <td>{curso.nombre_curso}</td>
                                        <td><button className='btn btn-primary' onClick={() => estudiantesCurso(curso.id)}>+</button></td>
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