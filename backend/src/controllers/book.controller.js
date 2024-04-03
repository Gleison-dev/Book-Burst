import { BookService } from "../services/book.service.js";
import { SUCESS } from "../shared/messages.js";

const instanceBookService = new BookService();

const createBook = async (req, res) => {
    const { title, genre, writer, tags, link_book } = req.body;
    const newBook = await instanceBookService.createUserService(title, genre, writer, tags, link_book);
    res
        .status(201)
        .json({ newBook })
}

const getAllBooks = async (req, res) => {
    const books = await instanceBookService.getAllBooksServices();
    res.json({ books });
}

const getBookByTitle = async (req, res) => {
    const title = req.query.title;
    const bookTitle = await instanceBookService.getBookByTitleService(title);
    res.json({ bookTitle });
}

const getBookByWriter = async (req, res) => {
    const { writer } = req.body;
    const bookWriter = await instanceBookService.getBookByWriterService(writer);
    res.json({ bookWriter });
}

const getBookByGenre = async (req, res) => {
    const { genre } = req.body;
    const bookGenre = await instanceBookService.getBookByGenreService(genre);
    res.json({ bookGenre })
}

const deleteBook = async (req, res) => {
    const { id } = req.params;
    const delBook = await instanceBookService.deleteBookService(id);
    res.json({
        message: `Livro ${SUCESS.DELETED}`
    });
}

export { createBook, getAllBooks, getBookByTitle, getBookByWriter, getBookByGenre, deleteBook }