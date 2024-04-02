import "./style.css"

export default function Card({ index, title, genre, writer, tags, link_book }) {
    return (
        <>
            <div key={index} className="div-card">
                <h2 id="title">Título: {title}</h2>
                <h3 id="genre">Genêro: {genre}</h3>
                <h3 id="writer">Escritor: {writer}</h3>
                <p id="tags">Tags: {tags}</p>
                <a href={link_book}><button id="btn-link">Link do Livro</button></a>
            </div>
        </>
    )
}