import ProfesorModel from "../models/ProfesorModel.js";

export const getAllProfesor = async (req,res) =>{
    try {
        const Profesores = await ProfesorModel.findAll()
        res.json(Profesores)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getProfesor = async (req,res)=>{
    try {
        const profesorIn = await ProfesorModel.findAll({
            where:{id:req.params.id}
        })
        res.json(profesorIn)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createProfesor = async(req,res)=>{
    try {
        await ProfesorModel.create(req.body)
        res.json({"message":"¡Registro creado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateProfesor = async(req,res)=>{
    try {
        await ProfesorModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({"message":"¡Registro creado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteProfesor = async (req,res) =>{
    try {
        await ProfesorModel.destroy({
            where: {id: req.params.id}
        })
        res.json({"message":"¡Registro borrado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}