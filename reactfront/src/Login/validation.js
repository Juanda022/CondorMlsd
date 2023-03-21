import React from "react";
import { useState , useEffect } from 'react';
import Axios from 'axios';

export const Verify = () =>{
    const[id, setid] = useState("")
    const[id_Es, setid_Es] = useState("")
    const[nombre, setNombre] = useState("")
    const[email,setemail] = useState("")
    const[telefono, setTelefono] = useState("")
    const[direccion, setDireccion] = useState("")
    const[fecha_nacimiento, setFecha] = useState("")
    const[carrera_id, setCarrera] = useState("")
    const[loginStatues, setLoginStatus] = useState("")

    Axios.defaults.withCredentials = true;

    const verify = async () => {

        Axios.put("http://localhost:3001/Route/verify/"+id,{
            id:id,
            email:email,
            estado: true,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message)
            } else {
                setLoginStatus(response.data[0].id)
            }
        });

        Axios.post("http://localhost:3001/Route/creaEstudi",{
            id:id_Es,
            nombre_e:nombre,
            email:email,
            telefono:telefono,
            direccion:direccion,
            fecha_nacimiento:fecha_nacimiento,
            carrera_id:carrera_id
        })

    };

    return(
        <div className="background">
            <div className="wrapper fadeInDown">
                <div id="formContentAmpliado">
                <h1>Confirme sus datos para validar</h1>

                <h3>Usuario</h3>
                <input type= "text-login" placeholder = "Username..." 
                onChange={(e) =>{
                    setid(e.target.value)
                }}/>

                <h3>Id Estudiante</h3>
                <input type="text-login" placeholder= "Id..."
                onChange={(e) => {
                    setid_Es(e.target.value)
                }}/>

                <h3>Nombre</h3>
                <input type="text-login" placeholder= "Nombre..."
                onChange={(e) => {
                    setNombre(e.target.value)
                }}/>

                <h3>Email</h3>
                <input type="text-login" placeholder= "Email..."
                onChange={(e) => {
                    setemail(e.target.value)
                }}/>

                <h3>Telefono</h3>
                <input type="text-login" placeholder= "Telefono..."
                onChange={(e) => {
                    setTelefono(e.target.value)
                }}/>

                <h3>Direccion</h3>
                <input type="text-login" placeholder= "Direccion..."
                onChange={(e) => {
                    setDireccion(e.target.value)
                }}/>

                <h3>Fecha de nacimiento</h3>
                <input type="text-login" placeholder= "aaaa-mm-dd..."
                onChange={(e) => {
                    setFecha(e.target.value)
                }}/>

                <h3>Id Carrera</h3>
                <input type="text-login" placeholder= "ID carrera..."
                onChange={(e) => {
                    setCarrera(e.target.value)
                }}/>
                
                <h3></h3>
                <button onClick={verify} className='btn btn-primary'>Confirmar</button>
                <h1>{loginStatues}</h1>
                </div>
            </div>
        </div>
    ) 
}