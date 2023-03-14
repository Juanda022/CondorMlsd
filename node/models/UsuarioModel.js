import db from "../database/db.js";
import { DataTypes } from "sequelize"; //importamos sequelize


const usuario = db.define('usuario',{
    
    id:{type: DataTypes.NUMBER,primaryKey: true},
    email:{type: DataTypes.STRING},
    password:{type: DataTypes.STRING},
    role:{type: DataTypes.STRING},
    estado:{type: DataTypes.BOOLEAN}
})

export default usuario;