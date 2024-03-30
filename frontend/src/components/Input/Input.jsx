import "./style.css"

export default function Input({placeholder, value}) {
    return (
        <input className="input" type="text" placeholder={placeholder} value={value}/>
    )
}