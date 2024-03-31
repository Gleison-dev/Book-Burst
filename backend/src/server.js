import express from "express";
import dotenv from "dotenv";
import { testConnection } from "./database/connection.js";
import { routes } from "./routes/index.route.js";
import cors from "cors"

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    testConnection();
    console.log(`Servidor rodando na porta ${port}`);
});