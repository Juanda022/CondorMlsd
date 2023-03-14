import React from "react";
import { useState , useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import axios from "axios";


//const URI ="http://localhost:3001/Route"

export const Login = () =>{
    const[id, setid] = useState("")
    const[password, setpassword] = useState("")
    const[loginStatues, setLoginStatus] = useState("")
    const history = useNavigate();


    Axios.defaults.withCredentials = true;

    const login = async () => {
        const Email = await axios.get("http://localhost:3001/Route/getUsu/"+id);

        Axios.post("http://localhost:3001/Route/login",{
            id:id,
            password:password,
        }).then((response) => {
            const email = response.data;
            if (response.data.message) {
                setLoginStatus(response.data.message)
            } else {
                setLoginStatus(response.data[0].id)
                console.log(Email)
            }

           if (response.data[0].role = "user") {
                history('/notas',{state:{userData:Email.data},replace: true});
                
            } else {
                history('/profes',{replace: true});
            }
        });

    };
        
    useEffect(() => {
        Axios.get("http://localhost:3001/Route/loginCook").then((response) => {
            if (response.data.loggedIn == true) {
                setLoginStatus(response.data.user[0])
            }   
        })
    }, [])

    return(
        <>
            <h1>Login</h1>

            <h3>Usuario</h3>
            <input type= "text" placeholder = "Username..." 
            onChange={(e) =>{
                setid(e.target.value)
            }}/>
            
            <h3>Contraseña</h3>
            <input type= "password" placeholder = "Password..." 
                onChange={(e) => {
                setpassword(e.target.value);
            }}/>
            
            <h3></h3>
            <button onClick={login} className='btn btn-primary'>Register</button>
            <h1>{loginStatues}</h1>
            
            
        </> 
    ) 
}