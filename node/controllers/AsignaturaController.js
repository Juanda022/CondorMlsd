import AsignaturaModel from "../models/AsignaturaModel.js";

export const getAllAsignatura = async (req,res) =>{
    try {
        const Asignaturas = await AsignaturaModel.findAll()
        res.json(Asignaturas)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getAsignatura = async (req,res)=>{
    try {
        const asignaturaIn = await AsignaturaModel.findAll({
            where:{id:req.params.id}
        })
        res.json(asignaturaIn)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createAsignatura = async(req,res)=>{
    try {
        await AsignaturaModel.create(req.body)
        res.json({"message":"¡Registro creado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateAsignatura = async(req,res)=>{
    try {
        await AsignaturaModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({"message":"¡Registro creado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteAsignatura = async (req,res) =>{
    try {
        await AsignaturaModel.destroy({
            where: {id: req.params.id}
        })
        res.json({"message":"¡Registro borrado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}