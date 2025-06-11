import { DataTypes } from 'sequelize';
import sequelize from '../config/connectDb.js';
const User = sequelize.define('users',
    {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        firstName: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING(30),
        },
        email: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        contact: {
            type : DataTypes.STRING(12),
            allowNull : false
        }
    }
);
export default User