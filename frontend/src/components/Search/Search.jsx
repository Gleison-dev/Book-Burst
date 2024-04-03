import { useEffect, useState } from "react"
import Button from "../Button/Button"
import Input from "../Input/Input"
import Card from "../Card/Card.jsx"
import "./style.css"
import axios from "axios"

export default function Search() {
    const [books, setBooks] = useState([]);
    const [displayedBooks, setDisplayedBooks] = useState([]);

    async function getAllBooks() {
        try {
            const { data } = await axios.get("https://book-burst.onrender.com/books")
            setBooks(data.books || []);
        } catch (error) {
            console.error("Error fetching books:", error);
            setBooks([]);
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
                        <Input placeholder="Digite o titulo do livro" />
                        <Button name="Pesquisar por título" />
                    </div>
                    <div className="search-writer">
                        <Input placeholder="Digite o nome do autor" />
                        <Button name="Pesquisar por nome do autor" />
                    </div>
                </div>
            </div>
            <div className="results">
                {books.length > 0 && books.map((book, index) => (
                    <Card key={index} title={book.title} genre={book.genre} writer={book.writer} tags={book.tags} link_book={book.link_book}/>
                ))}
                {books.length === 0 && <p>Nenhum livro encontrado.</p>}
            </div>
        </>
    )
}