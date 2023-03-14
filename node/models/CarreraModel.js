import db from "../database/db.js";
import { DataTypes } from "sequelize"; //importamos sequelize


const carrera = db.define('carrera',{
    id:{type: DataTypes.NUMBER,primaryKey: true},
    nombre:{type: DataTypes.STRING},
    codigo:{type: DataTypes.STRING},
})

export default carrera;