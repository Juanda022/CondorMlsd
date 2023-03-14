import db from "../database/db.js";
import { DataTypes } from "sequelize";

const sede = db.define('sede',{
    id:{type: DataTypes.NUMBER,primaryKey: true},
    nombre:{type: DataTypes.STRING},
    direccion:{type: DataTypes.STRING},
})

export default sede;