import db from "../database/db.js";
import { DataTypes } from "sequelize"; //importamos sequelize

const estudiante = db.define('estudiante',{
    id:{type: DataTypes.NUMBER, primaryKey:true},
    nombre:{type: DataTypes.STRING},
    email:{type: DataTypes.STRING},
    telefono:{type: DataTypes.STRING},
    direccion:{type: DataTypes.STRING},
    fecha_nacimiento:{type: DataTypes.DATE},
    carrera_id:{type:DataTypes.NUMBER},
})

export default estudiante;