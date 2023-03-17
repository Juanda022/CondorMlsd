import React from "react";
import { useState , useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";


//const URI ="http://localhost:3001/Route"

export const Login = () =>{
    const[id, setid] = useState("")
    const[password, setpassword] = useState("")
    const[loginStatues, setLoginStatus] = useState("")
    const history = useNavigate();


    Axios.defaults.withCredentials = true;

    const login = async () => {

        Axios.post("http://localhost:3001/Route/login",{
            id:id,
            password:password,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message)
            } else {
                setLoginStatus(response.data[0].email)
                localStorage.setItem('email',response.data[0].email)

                {response.data[0].role == "user" ? history('/estu',{replace: true}):history('/prof',{replace: true});} //if-else
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

    const register = () => {
        history('/register',{replace: true});
    }

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
            
            <h3>{loginStatues}</h3>
            <button onClick={login} className='btn btn-primary'>Entrar</button>
            <button onClick={register} className='btn btn-primary'>Registrar</button>
        </>
    ) 
}