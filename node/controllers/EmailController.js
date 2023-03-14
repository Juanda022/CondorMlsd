import { transporter } from "../config/mailer.js";
import EmailModel from "../models/EmailModel.js";


//** Metodos para la crud**/

//Mostrar todo
export const getAllEmail = async (req,res) => {
    try {
        const email = await EmailModel.findAll()
        res.json(email)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Mostrar individual
export const getEmail = async (req,res)=>{
    try {
        const email = await EmailModel.findAll({
            where:{email:req.params.email}
        })
        res.json(email[0])
    } catch (error) {
        res.json({message: error.message})
    }
}


//Crear
export const createEmail = async(req,res) => { 
    try {
        await EmailModel.create(req.body)
        res.json({"message":"¡Registro creado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

//Actualizar
export const updateEmail = async(req,res)=>{
    try {
        await EmailModel.update(req.body,{
            where:{email:req.params.email}
        })
        res.json({"message":"¡Registro actualizado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

//Eliminar
export const deleteEmail = async (req,res) =>{
    try {
        await EmailModel.destroy({
            where: {email: req.params.email}
        })
        res.json({"message":"¡Registro borrado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

//Enviar al email 
export const sendEmail1 = async (req,res) =>{
    const Link = "http://localhost:3000/verify";
    try {
        
        
        transporter.sendMail({
            from: '"Validacion 👻" <juan90282.jdrt17@gmail.com>', // sender address
            to: req.body.email, // list of receivers
            subject: "Correo validacion", // Subject line
            html: `
            <b>Para validar el correo, pulse el siguiente link</b>
            <a href= "${Link}">${Link}</a>
            ` 
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
