import db from "../database/db.js";
import { DataTypes } from "sequelize"; //importamos sequelize

const inscripciones = db.define('inscripciones',{
    id:{type: DataTypes.NUMBER, primaryKey:true},
    estudiante_id:{type:DataTypes.NUMBER},
    curso_id:{type:DataTypes.NUMBER},
})

export default inscripciones;