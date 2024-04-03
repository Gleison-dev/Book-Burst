import { useEffect, useState } from "react"
import Button from "../Button/Button"
import Input from "../Input/Input"
import Card from "../Card/Card.jsx"
import "./style.css"
import axios from "axios"

export default function Search() {
    const [books, setBooks] = useState({});
    const [titleBook, setTitle] = useState("");
    const [writerBook, setWriter] = useState("");

    async function getAllBooks() {
        try {
            const { data } = await axios.get("https://book-burst.onrender.com/books")
            setBooks(data.books || []);
        } catch (error) {
            console.error("Error fetching books:", error);
            setBooks([]);
        }
    }

    async function getBookByTitle() {
        try {
            const { data } = await axios.get(`https://book-burst.onrender.com/book-title`, {
                params: {
                    title: titleBook
                }
            });
            setBooks(data.bookTitle);
        } catch (error) {
            console.error(error);
        }
    }

    async function getBookByWriter() {
        try {
            const { data } = await axios.get(`https://book-burst.onrender.com/book-writer`, {
                params: {
                    writer: writerBook
                }
            });
            setBooks(data.bookWriter);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="div-search">
                <h3 id="title-search">Pesquisar Livros:</h3>
                <p id="subtitle-search">
                    Encontre o livro que você procura!
                </p>
                <div className="search">
                    <div className="search-all">
                        <Button handleClick={getAllBooks} name="Pesquisar todos" />
                    </div>
                    <div className="search-title">
                        <Input onChange={(e) => setTitle(e.target.value)} placeholder="Digite o titulo do livro" />
                        <Button handleClick={getBookByTitle} name="Pesquisar por título" />
                    </div>
                    <div className="search-writer">
                        <Input onChange={(e) => setWriter(e.target.value)} placeholder="Digite o nome do autor" />
                        <Button handleClick={getBookByWriter} name="Pesquisar por nome do autor" />
                    </div>
                </div>
            </div>
            <div className="results">
                {books.length > 0 && books.map((book, index) => (
                    <Card key={index} title={book.title} genre={book.genre} writer={book.writer} tags={book.tags} link_book={book.link_book} />
                ))}
                {books.length === 0 && <p>Nenhum livro encontrado.</p>}
            </div>
        </>
    )
}