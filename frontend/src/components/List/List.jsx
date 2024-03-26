import Li from "../Li/Li";
import "./style.css"

export default function List() {
    return (
        <>
            <div className="list">
                <ul className="menu-list">
                    <Li classname="list-item" name="Página Inicial" />
                    <Li classname="list-item" name="Pesquisar" />
                    <Li classname="list-item" name="Contatos" />
                </ul>
            </div>

        </>
    )
}