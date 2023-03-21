import IncribirModel from "../models/IncribirModel.js"

export const getInscri = async (req,res)=>{
    try {
        const NotaIn = await IncribirModel.findAll({
            where:{id:req.params.id}
        })
        res.json(NotaIn)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createInscri = async(req,res)=>{
    try {
        await IncribirModel.create(req.body)
        res.json({"message":"¡Registro creado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateInscri = async(req,res)=>{
    try {
        await IncribirModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({"message":"¡Registro creado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteInscri = async (req,res) =>{
    try {
        await IncribirModel.destroy({
            where: {id: req.params.id}
        })
        res.json({"message":"¡Registro borrado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}