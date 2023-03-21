import React from "react";
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

export const Register = () =>{
    const[id, setid] = useState("")
    const[email,setemail] = useState("")
    const[password, setpassword] = useState("")
    const[registerStatues, setRegisterStatus] = useState("")

    const history = useNavigate();

    const login = () => {
        history('/',{replace: true});
    }

    const register = async () => {
        await Axios.post("http://localhost:3001/Route/creaEmail",{
            email:email,
        })


        await Axios.post("http://localhost:3001/Route/creaUsua",{
            id:id,
            email:email,
            password:password,
        }).then((response) => {
            if (response.data.message) {
                setRegisterStatus(response.data.message)
            } else {    
                setRegisterStatus(response.data[0].id)
            }
        });

        await Axios.put("http://localhost:3001/Route/sendEmail/"+email,{
            email:email,
        })
    };
        
    return(
        <div className="wrapper fadeInDown">
            <div id="formContent">
            <h2 className="inactive underlineHover" onClick={login}> Login </h2>
            <h2 className="active">Register </h2>

            <h3>Usurario</h3>
            <input type= "text-login" placeholder = "Username..." 
            onChange={(e) =>{
                setid(e.target.value)
            }}/>

            <h3>Email</h3>
            <input type="text-login" placeholder= "Email..."
            onChange={(e) => {
                setemail(e.target.value)
            }}/>
            
            <h3>Contraseña</h3>
            <input type= "password" placeholder = "Password..." 
                onChange={(e) => {
                setpassword(e.target.value);
            }}/>
            <h3></h3>
            <input type="submit" className="fadeIn fourth" value="Register"
                onClick={register}
            />
            <h1>{registerStatues}</h1>
            </div>
        </div>
    ) 
}