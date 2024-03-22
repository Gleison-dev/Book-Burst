import express from "express";
import dotenv from "dotenv";
import { testConnection } from "./database/connection.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.listen(port, () => {
    testConnection();
    console.log(`Servidor rodando na porta ${port}`);
});