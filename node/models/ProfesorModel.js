import db from "../database/db.js";
import { DataTypes } from "sequelize"; //importamos sequelize

const profesor = db.define('profesor',{
    id:{type: DataTypes.NUMBER,primaryKey: true},
    nombre:{type: DataTypes.STRING},
    email:{type: DataTypes.STRING},
    telefono:{type: DataTypes.STRING},
    titulo:{type: DataTypes.STRING},
})

export default profesor;