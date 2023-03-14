import SemestreModel from "../models/SemestreModel.js";

export const getAllSemestre = async (req,res) =>{
    try {
        const Semestres = await SemestreModel.findAll()
        res.json(Semestres)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getSemestre = async (req,res)=>{
    try {
        const semestreIn = await SemestreModel.findAll({
            where:{id:req.params.id}
        })
        res.json(semestreIn)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createSemestre = async(req,res)=>{
    try {
        await SemestreModel.create(req.body)
        res.json({"message":"¡Registro creado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateSemestre = async(req,res)=>{
    try {
        await SemestreModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({"message":"¡Registro creado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteSemestre = async (req,res) =>{
    try {
        await SemestreModel.destroy({
            where: {id: req.params.id}
        })
        res.json({"message":"¡Registro borrado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}