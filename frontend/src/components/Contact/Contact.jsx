import "./style.css"
import iconLinkedin from "../../assets/linkedin.png"
import iconGitHub from "../../assets/github.png"

export default function Contact() {
    return (
        <>
            <div className="contact">
                <div className="div-contact">
                    <div className="title">
                        <h1 id="title-contact">Contatos:</h1>
                    </div>
                    <div className="contacts">
                        <div className="first-contact">
                            <img src={iconLinkedin} />
                            <a href="https://www.linkedin.com/in/gleison-ribeiro-dev/">Clique Aqui</a>
                        </div>
                        <div className="second-contact">
                            <img src={iconGitHub} />
                            <a href="https://github.com/Gleison-dev">Clique Aqui</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}