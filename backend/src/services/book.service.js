import { BookEntity } from "../entities/Book.entity.js";
import { ERRORS, SUCESS } from "../shared/messages.js";

class BookService{
    async createUserService(title, genre, writer, tags, link_book){
        try {
            await BookEntity.sync();
            const bookAlreadyExists = await BookEntity.findOne({
                where:{
                    title, genre, writer, tags, link_book
                }
            });
            if(bookAlreadyExists){
                return `Livro ${ERRORS.ALREADY_EXISTS}`;
            }
            const newBook = await BookEntity.create({
                title, genre, writer, tags, link_book
            });
            return `Livro ${SUCESS}`, newBook;
        } catch (error) {
            return error;
        }
    }

    async getAllBooksServices(){
        try {
            const books = await BookEntity.findAll();
            return books;
        } catch (error) {
            return error;
        }
    }

    async getBookByTitleService(title){
        try {
            const titleBook = await BookEntity.findAll({
                where: {
                    title
                }
            });
            if(!titleBook){
                return `Livro ${ERRORS.NOT_FOUND}`;
            }
            return titleBook;
        } catch (error) {
            return error;
        }
    }

    async getBookByWriterService(writer){
        try {
            const bookWriter = await BookEntity.findAll({
                where: {
                    writer
                }
            });
            if(!bookWriter){
                return `Autor ${ERRORS.NOT_FOUND}`;
            }
            return bookWriter;
        } catch (error) {
            return error;
        }
    }

    async getBookByGenreService(genre){
        try {
            const genreBook = await BookEntity.findAll({
                where: {
                    genre
                }
            });
            if(!genreBook){
                return `Genêro ${ERRORS.NOT_FOUND}`;
            }
            return genreBook;
        } catch (error) {
            return error;
        }
    }

    async deleteBookService(id){
        try {
            const bookId = await BookEntity.findByPk(id);
            if(!bookId){
                return `Livro ${ERRORS.NOT_FOUND}`;
            }
            await BookEntity.destroy({
                where: {
                    id
                }
            });
            return `Livro ${SUCESS.DELETED}`;
        } catch (error) {
            return error;
        }
    }
}

export { BookService }