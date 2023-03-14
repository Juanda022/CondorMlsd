import db from "../database/db.js";
import { DataTypes } from "sequelize";

const semestre = db.define('semestre',{
    id:{type: DataTypes.NUMBER,primaryKey: true},
    nombre:{type: DataTypes.STRING},
    fecha_inicio:{type: DataTypes.DATE},
    fecha_fin:{type: DataTypes.DATE},
})

export default semestre;