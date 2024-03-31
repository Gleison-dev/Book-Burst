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

app.use(cors(corsOptions))
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    testConnection();
    console.log(`Servidor rodando na porta ${port}`);
});