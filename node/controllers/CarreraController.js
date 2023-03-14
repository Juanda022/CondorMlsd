import CarreraModel from "../models/CarreraModel.js";

export const getAllCarrera = async (req,res) =>{
    try {
        const Carreras = await CarreraModel.findAll()
        res.json(Carreras)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getCarrera = async (req,res)=>{
    try {
        const carreraIn = await CarreraModel.findAll({
            where:{id:req.params.id}
        })
        res.json(carreraIn)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createCarrera = async(req,res) => { 
    try {
        await CarreraModel.create(req.body)
        res.json({"message":"¡Registro creado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateCarrera = async(req,res)=>{
    try {
        await CarreraModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({"message":"¡Registro creado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteCarrera = async (req,res) =>{
    try {
        await CarreraModel.destroy({
            where: {id: req.params.id}
        })
        res.json({"message":"¡Registro borrado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}