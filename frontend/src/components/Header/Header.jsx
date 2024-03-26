import Logo from "../Images/Logo/Logo.jsx"
import List from "../List/List.jsx"
import "./style.css"

export default function Header() {
    return (
        <>
            <div className="header">
                <Logo />
                <List />
            </div>

        </>
    )
}