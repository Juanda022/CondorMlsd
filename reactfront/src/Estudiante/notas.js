import React from "react";
import axios from "axios";
import {Login} from "../Login/login"
import { useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom";



export const Notas = () =>{
    const {state} = useLocation();
    console.log(state);
    const URI ="http://localhost:3001/Route/tabla/"+state.userData.email;/*+<Login.toString.id/>*/
    const [Notas,SetNotas]=useState([])
    useEffect(()=>{
        getTablaNotas()
    },[])

    const getTablaNotas = async () =>{
        const res = await axios.get(URI)
        SetNotas(res.data)
        console.log(<Login/>)
    }

    return(
        
        <div className="container">
            <h1>Notas estudiante</h1>
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>Id</th>
                                <th>Asignatura</th>
                                <th>Estudiante</th>
                                <th>Nota</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Notas.map((nota) =>(
                                <tr key={nota.id}>
                                    <td>{nota.id}</td>
                                    <td>{nota.asignatura}</td>
                                    <td>{nota.estudiante}</td>
                                    <td>{nota.nota}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div> 
    ) 
}