import SedeModel from  "../models/SedeModel.js";


export const getAllSede = async (req,res) =>{
    try {
        const Sedes = await SedeModel.findAll()
        res.json(Sedes)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Individual

export const getSede = async (req,res)=>{
    try {
        const sedeIn = await SedeModel.findAll({
            where:{id:req.params.id}
        })
        res.json(sedeIn)
    } catch (error) {
        res.json({message: error.message})
    }
}


// Crear
export const createSede = async(req,res)=>{
    try {
        await SedeModel.create(req.body)
        res.json({"message":"¡Registro creado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

//Actualizar

export const updateSede = async(req,res)=>{
    try {
        await SedeModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({"message":"¡Registro creado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

//Eliminar
export const deleteSede = async (req,res) =>{
    try {
        await SedeModel.destroy({
            where: {id: req.params.id}
        })
        res.json({"message":"¡Registro borrado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}