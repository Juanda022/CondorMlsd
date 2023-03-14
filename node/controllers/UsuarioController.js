import { response } from "express";
import { and, where } from "sequelize";
import UsuarioModel from "../models/UsuarioModel.js";


import bcrypt from 'bcrypt';
const saltRounds = 10;

export const getAllUsuario = async (req,res) =>{
    try {
        const Usuarios = await UsuarioModel.findAll()
        res.json(Usuarios)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getUsuario = async (req,res)=>{
    try {
        const usuarioIn = await UsuarioModel.findAll({
            where:{id:req.params.id}
        })
        res.json(usuarioIn[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getUsuarioLoginCookies = async (req,res)=>{
    if (req.session.user) {
        res.send({loggedIn: true, user:req.session.user})
    } else {
        res.send({loggedIn: false})
    }
}


export const getUsuarioLogin = async (req,res)=>{
    try {
        const usuarioIn = await UsuarioModel.findAll({
            where:{id:req.body.id, estado:req.estado = true}
        })

        const usuarioProf = await UsuarioModel.findAll({
            where:{id:req.body.id, role:req.role = "admin"}
        })

        const usuarioEstu = await UsuarioModel.findAll({
            where:{id:req.body.id, role:req.role = "user"}
        })

        if (usuarioIn.length > 0) {
            if (usuarioEstu.length > 0) {
                bcrypt.compare(req.body.password,usuarioIn[0].password,(error,response) =>{
                    if(response){
                        const Datos = req.session.user = usuarioIn[0].dataValues;
                        console.log(Datos);
                        console.log("Es estudiante");
                        res.send(usuarioIn)
                    }else{
                        res.send({message: "Contraseña incorrecta o correo no validado"}) 
                    }
                })
            } else if(usuarioProf.length > 0){
                bcrypt.compare(req.body.password,usuarioIn[0].password,(error,response) =>{
                    if(response){
                        const Datos = req.session.user = usuarioIn[0].dataValues;
                        console.log(Datos);
                        res.send(usuarioIn)
                    }else{
                        res.send({message: "Contraseña incorrecta o correo no validado"}) 
                    }
                })
            }
                
            
        } else {
            res.send({message: "No encontrado"}) 
        }
        //res.json(usuarioIn[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createUsuario = async(req,res)=>{
    const id = req.body.id;
    const email = req.body.email;
    const password = req.body.password;

    
    try {
        bcrypt.hash(password, saltRounds ,(err,hash) =>{
            UsuarioModel.create({id:id,email:email,password:hash})
            res.json({"message":"¡Registro creado correctamente!"})
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateUsuario = async(req,res)=>{
    try {
        await UsuarioModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({"message":"¡Registro creado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteUsuario = async (req,res) =>{
    try {
        await UsuarioModel.destroy({
            where: {id: req.params.id}
        })
        res.json({"message":"¡Registro borrado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const confirmEmail = async(req,res) =>{
    try {
        await UsuarioModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({"message":"¡Usuario validado!"})
    } catch (error) {
        res.json({message: error.message})
    }
}