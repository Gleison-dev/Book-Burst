import express from "express";
import dotenv from "dotenv";
import { testConnection } from "./database/connection.js";
import { routes } from "./routes/index.route.js";
import cors from "cors"

dotenv.config();

const corsOptions = {
    origin: 'http://localhost:5137',
    optionsSuccessStatus: 200
}
const app = express();
const port = process.env.PORT;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5137");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.use(cors(corsOptions))
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    testConnection();
    console.log(`Servidor rodando na porta ${port}`);
});