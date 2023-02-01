import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

//database fileds types
const User = db.define('users', {
    fname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: true,
            min: 5,
            max: 10
        }
    },
    lname:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: true,
            min: 5,
            max: 10
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true,
        }
    },
    picture: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: true,
        }
    },
}, {
    freezeTableName: true
});

export default User;

(async () => {
    await db.sync();
})();