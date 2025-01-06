import { DataTypes } from "sequelize";
import sequelize from "../config/mysql.js";

const User = sequelize.define('User', {
    username: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false, unique:true},
    password: {type: DataTypes.STRING, allowNull: false, unique: true},
    phone: {type: DataTypes.STRING, allowNull: false, unique: true}
}, {timestamps: true})

export default User;