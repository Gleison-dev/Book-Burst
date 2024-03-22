import { Router } from "express";
import { bookRoute } from "../routes/book.route.js";

const routes = Router();

routes.use(bookRoute);

export { routes }