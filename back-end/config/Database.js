import {Sequelize} from "sequelize";
//mysql database connection
const db = new Sequelize('crud_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;