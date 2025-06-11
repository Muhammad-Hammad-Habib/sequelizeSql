import { Sequelize } from "sequelize";

const sequelize = new Sequelize('sequelizedb', 'root', '', {
    dialect: "mysql",
    host: 'localhost'
});

export default sequelize;