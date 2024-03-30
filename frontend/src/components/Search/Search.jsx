import Button from "../Button/Button"
import Input from "../Input/Input"
import "./style.css"

export default function Search() {
    return (
        <>
            <div className="div-search">
                <h3 id="title-search">Pesquisar Livros:</h3>
                <p id="subtitle-search">
                    Encontre o livro que você procura!
                </p>
                <div className="search">
                    <div className="search-all">
                        <Button name="Pesquisar todos" />
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
        </>
    )
}