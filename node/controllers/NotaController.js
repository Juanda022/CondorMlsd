import NotaModel from "../models/NotaModel.js";

export const getAllNota = async (req,res) =>{
    try {
        const Notas = await NotaModel.findAll()
        res.json(Notas)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getNota = async (req,res)=>{
    try {
        const NotaIn = await NotaModel.findAll({
            where:{id:req.params.id}
        })
        res.json(NotaIn)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createNota = async(req,res)=>{
    try {
        await NotaModel.create(req.body)
        res.json({"message":"¡Registro creado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateNota = async(req,res)=>{
    try {
        await NotaModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({"message":"¡Registro creado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteNota= async (req,res) =>{
    try {
        await NotaModel.destroy({
            where: {id: req.params.id}
        })
        res.json({"message":"¡Registro borrado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}