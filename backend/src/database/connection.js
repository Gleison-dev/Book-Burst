import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql"
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexão com o banco de dados realizada com sucesso!");
    } catch (error) {
        console.log("Conexão mal sucedida :(", error);
    }
}

export { sequelize, testConnection }