import React from "react";
import Axios from 'axios';
import { useState,useEffect } from "react";
import {InfoEstudiante} from '../components/DataEstudiante'
import { useNavigate } from "react-router-dom";



export const Notas = () =>{
    const [email] = useState(localStorage.getItem('email'));
    const [Notas,SetNotas]=useState([]);
    const history = useNavigate();

    useEffect(()=>{
        const URI = `http://localhost:3001/Route/tabla/${email}`;
        getTablaNotas(URI)
    },[])

    const getTablaNotas = async (URI) =>{
        try {
            const res = await Axios.get(URI);
            SetNotas(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    if (email) {        
        return(
            <div>
                <div>
                <InfoEstudiante/>
                </div>
                <div className="container">
                    <h1>Notas estudiante</h1>
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <thead className="table-primary">
                                <tr>
                                    <th>Id</th>
                                    <th>Asignatura</th>
                                    <th>Nota</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Notas.map((nota) =>(
                                    <tr key={nota.id}>
                                        <td>{nota.id}</td>
                                        <td>{nota.asignatura}</td>
                                        <td>{nota.nota}</td>
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