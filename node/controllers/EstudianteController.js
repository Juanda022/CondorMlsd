import EstudianteModel from "../models/EstudianteModel.js";

export const getAllEstudiante = async (req,res) =>{
    try {
        const Estudiantes = await EstudianteModel.findAll()
        res.json(Estudiantes)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getEstudiante = async (req,res)=>{
    try {
        const estudianteIn = await EstudianteModel.findAll({
            where:{id:req.params.id}
        })
        res.json(estudianteIn[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createEstudiante = async(req,res)=>{
    try {
        await EstudianteModel.create(req.body)
        res.json({"message":"¡Registro creado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateEstudiante = async(req,res)=>{
    try {
        await EstudianteModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({"message":"¡Registro creado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteEstudiante = async (req,res) =>{
    try {
        await EstudianteModel.destroy({
            where: {id: req.params.id}
        })
        res.json({"message":"¡Registro borrado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}