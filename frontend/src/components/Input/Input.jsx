import "./style.css"

export default function Input({placeholder, onChange}) {
    return (
        <input className="input" type="text" placeholder={placeholder} onChange={onChange}/>
    )
}