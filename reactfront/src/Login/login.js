import React from "react";
import { useState , useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import user from "../assets/img/user.png"


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

                {response.data[0].role === "user" ? history('/estu',{replace: true}):history('/prof',{replace: true});} //if-else
            } 
        });

    };
        
    useEffect(() => {
        Axios.get("http://localhost:3001/Route/loginCook").then((response) => {
            if (response.data.loggedIn === true) {
                setLoginStatus(response.data.user[0])
            }   
        })
    }, [])

    const register = () => {
        history('/register',{replace: true});
    }

    return(
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <h2 className="active"> Login </h2>
                    <h2 className="inactive underlineHover" onClick={register}>Register </h2>
                
                    <div className="fadeIn first">
                        <img className='pequeña' src={user} />
                    </div>

                    <h3>Usuario</h3>
                    <input type= "text-login" placeholder = "Username..." 
                    onChange={(e) =>{
                        setid(e.target.value);
                    }}/>

                    <h3>Contraseña</h3>
                    <input type= "password" placeholder = "Password..." 
                        onChange={(e) => {
                        setpassword(e.target.value);
                    }}/>

                    <input type="submit" className="fadeIn fourth" value="Log In"
                        onClick={login}
                    />
                    <h3>{loginStatues}</h3>
                </div>
            </div>
    ) 


}