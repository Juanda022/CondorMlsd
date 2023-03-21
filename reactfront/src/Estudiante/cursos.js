import React from "react";
import Axios from 'axios';
import { useState,useEffect } from "react";
import {InfoEstudiante} from '../components/DataEstudiante'
import { useNavigate } from "react-router-dom";



export const InfoCursos = () =>{
    const [id_estudiante] = useState(localStorage.getItem('id_estudiante'))
    const [Asignaturas,SetAsignaturas]=useState([]);
    const history = useNavigate();

    useEffect(()=>{
        const URI = `http://localhost:3001/Route/infoCursos/${id_estudiante}`;
        getTablaNotas(URI)
    },[])

    const getTablaNotas = async (URI) =>{
        try {
            const res = await Axios.get(URI);
            SetAsignaturas(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const inscribir = (id) => {
        localStorage.setItem('id_materias', id);
        history('/estu/grupos',{replace: true});
    }

     
        return(
            <div>
                <div>
                <InfoEstudiante/>
                </div>
                <div className="container">
                    <h1>Materias disponibles</h1>
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <thead className="table-primary">
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Inscribir</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Asignaturas.map((asigna) =>(
                                    <tr key={asigna.id}>
                                        <td>{asigna.id}</td>
                                        <td>{asigna.nombre}</td>
                                        <td>
                                            <button onClick={() => inscribir(asigna.id)} className="btn btn-success">✓</button>
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
    } 