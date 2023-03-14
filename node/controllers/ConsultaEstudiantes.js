//import { and, Sequelize, where } from "sequelize";
import db from "../database/db.js";
//import {NotaModel,CursoModel,AsignaturaModel,EstudianteModel} from "../models";


export const getTablaNotas = async (req,res)=>{
    try {
        const email = await db.query(
        `SELECT n.id, a.nombre as asignatura, e.nombre as estudiante, n.nota FROM notas n JOIN cursos c ON n.curso_id = c.id JOIN asignaturas a ON c.asignatura_id = a.id JOIN estudiantes e ON n.estudiante_id = e.id where e.email = "${req.params.email}";`)
        res.json(email[0]) 
    } catch (error) {
        res.json({message: error.message})
    }
}