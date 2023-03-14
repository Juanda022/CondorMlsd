import db from "../database/db.js";
import { DataTypes } from "sequelize"; //importamos sequelize
import CursoModel from "../models/CursoModel.js";
import EstudianteModel from "../models/EstudianteModel.js";

const nota = db.define('nota',{
    id:{type: DataTypes.NUMBER,primaryKey: true},
    estudiante_id:{type: DataTypes.NUMBER,references:{model:EstudianteModel,key:'id'}},
    curso_id:{type: DataTypes.NUMBER, references:{model:CursoModel,key:'id'}},
    nota:{type: DataTypes.FLOAT},
})

export default nota;