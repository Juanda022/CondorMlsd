import db from "../database/db.js";
import { DataTypes } from "sequelize"; //importamos sequelize

const asignatura = db.define('asignatura',{
    id:{type: DataTypes.NUMBER, primaryKey: true},
    nombre:{type: DataTypes.STRING},
    codigo:{type: DataTypes.STRING},
    creditos:{type: DataTypes.NUMBER},
    carrera_id:{type: DataTypes.NUMBER},
})

export default asignatura;