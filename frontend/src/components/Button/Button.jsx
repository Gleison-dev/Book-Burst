export default function Button({handleClick, name}) {
    return (
        <button className="btn" onClick={handleClick}>{name}</button>
    )
}