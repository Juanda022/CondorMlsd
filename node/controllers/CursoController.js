import CursoModel from "../models/CursoModel.js";

export const getAllCurso = async (req,res) =>{
    try {
        const Cursos = await CursoModel.findAll()
        res.json(Cursos)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getCurso = async (req,res)=>{
    try {
        const CursoIn = await CursoModel.findAll({
            where:{id:req.params.id}
        })
        res.json(CursoIn)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createCurso = async(req,res)=>{
    try {
        await CursoModel.create(req.body)
        res.json({"message":"¡Registro creado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateCurso = async(req,res)=>{
    try {
        await CursoModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({"message":"¡Registro creado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteCurso = async (req,res) =>{
    try {
        await CursoModel.destroy({
            where: {id: req.params.id}
        })
        res.json({"message":"¡Registro borrado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}