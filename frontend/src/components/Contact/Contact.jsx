import "./style.css"
import iconLinkedin from "../../assets/linkedin.png"
import iconGitHub from "../../assets/github.png"

export default function Contact() {
    return (
        <>
            <div className="contact">
                <div className="div-contact">
                    <div className="title">
                        <h2 id="title-contact">Contatos:</h2>
                    </div>
                    <div className="contacts">
                        <div className="first-contact">                         
                            <a href="https://www.linkedin.com/in/gleison-ribeiro-dev/"><img className="img" src={iconLinkedin} /></a>
                        </div>
                        <div className="second-contact">  
                            <a href="https://github.com/Gleison-dev"><img className="img" src={iconGitHub} /></a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}