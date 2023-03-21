import React from "react";
import Axios from 'axios';
import { useState,useEffect } from "react";
import {InfoEstudiante} from '../components/DataEstudiante'
import { useNavigate } from "react-router-dom";



export const InfoGrupos = () =>{
    const [id_estudiante] = useState(localStorage.getItem('id_estudiante'))
    const [id_materias] = useState(localStorage.getItem('id_materias'))
    const [Asignaturas,SetAsignaturas]=useState([]);
    const history = useNavigate();

    useEffect(()=>{
        const URI = `http://localhost:3001/Route/grupos/${id_materias}`;
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

    //Va en el js de inscribir
    const Inscribir = async () => {
        await Axios.post(`http://localhost:3001/Route/Incribir`,{
            estudiante_id:id_estudiante,
            curso_id: Asignaturas[0].id,
        }).then((response) => {
            if (response.data.message) {
                alert(response.data.message)
            } else {    
                alert("Materia inscrita")
                window.location.reload();
            }
        });
    };


    if (id_estudiante) {        
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
                                            <button onClick={Inscribir}className="btn btn-success">✓</button>
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