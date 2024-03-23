import { Router } from "express";
import {
    createBook,
    getAllBooks,
    getBookByTitle,
    getBookByGenre,
    getBookByWriter,
    deleteBook
} from "../controllers/book.controller.js";

const bookRoute = Router();

bookRoute.post("/new-book", createBook);
bookRoute.get("/books", getAllBooks);
bookRoute.get("/book-title", getBookByTitle);
bookRoute.get("/book-genre", getBookByGenre);
bookRoute.get("/book-writer", getBookByWriter);
bookRoute.delete("/delete-book/:id", deleteBook);

export { bookRoute }