import db from "../database/db.js";
import { DataTypes } from "sequelize"; //importamos sequelize

const curso = db.define('curso',{
    id:{type: DataTypes.NUMBER, primaryKey: true},
    nombre:{type: DataTypes.STRING},
    profesor_id:{type: DataTypes.NUMBER},
    asignatura_id:{type: DataTypes.NUMBER},
    semestre_id:{type: DataTypes.NUMBER},
    sede_id:{type: DataTypes.NUMBER},
})

export default curso;