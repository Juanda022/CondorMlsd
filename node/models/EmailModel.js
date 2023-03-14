import db from "../database/db.js";
import { DataTypes } from "sequelize"; //importamos sequelize

const email = db.define('emails',{
    email: {type: DataTypes.STRING(50),primaryKey: true},
})

export default email;


