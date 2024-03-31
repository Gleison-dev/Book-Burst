import { useState } from "react"
import Button from "../Button/Button"
import Input from "../Input/Input"
import Card from "../Card/Card.jsx"
import "./style.css"

export default function Search() {
    const [books, setBooks] = useState([]);

    async function getAllBooks() {
        await fetch(`https://book-burst.onrender.com/books`)
        .then(res => res.json())
        .then(console.log(data))
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
                {books.map(data => (
                    <Card title={data.title}/>
                ))}
            </div>
        </>
    )
}