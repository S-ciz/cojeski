import "./style.css"

const Card = ({title ="default title", text = "default text"}) => {

    return <div className="about_card">
        <h1 >{title}</h1>
        <p>
           {text}
        </p>
    </div>
}

export default Card;