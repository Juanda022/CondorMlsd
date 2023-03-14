import { Sequelize } from "sequelize";

const db = new Sequelize('condormlsd','root','juan9028',{
    host: 'localhost',
    dialect:'mysql'
});

export default db