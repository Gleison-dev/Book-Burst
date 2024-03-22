import { BookEntity } from "../entities/Book.entity.js";
import { ERRORS, SUCESS } from "../shared/messages.js";

class BookService{
    async createUserService(title, genre, writer, tags, link_book){
        try {
            await BookEntity.sync();
            const bookAlreadyExists = await BookEntity.findAll({
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
            return `Livro ${SUCESS}`, newBook
        } catch (error) {
            return error;
        }
    }
}