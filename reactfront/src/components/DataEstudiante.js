import Axios from 'axios';
import { useState,useEffect } from "react";
import user from "../assets/img/user.png"

export const InfoEstudiante = () => {

    const [email] = useState(localStorage.getItem('email'));
    const [estudiante,setEstudiante]=useState([]);

    useEffect(()=>{
        const URI = `http://localhost:3001/Route/DataUser/${email}`;
        getDataStudent(URI)
    },[])

    const getDataStudent = async (URI) =>{
        try {
            const res = await Axios.get(URI);
            setEstudiante(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const dataEstudiantes =estudiante.length > 0 && estudiante.map((estudiante) => {
        return <p className='container' key={estudiante.id}> 
                    Id: {estudiante.id}<br/>
                    Nombre: {estudiante.nombre_e}<br/>
                    Carrera: {estudiante.nombre}
                </p>;
    });

    return(
        <div className="DataUser">
            <h3>Datos:</h3>
            <div>
                <img className='pequeña' src={user}/>
            </div>
            <div>
                {dataEstudiantes}
            </div>
        </div>
    )
}
