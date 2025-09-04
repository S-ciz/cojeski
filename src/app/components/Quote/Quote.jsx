import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
const Quote = ()=>{
    
    return <div className="donate">

    <div className="donate_content">
        <h1>Donate Today!</h1>
        <p>
            Every contribution makes a difference for communities affected by conflict and displacement
        </p>
        <a href="#" className="btn">Donate today <FontAwesomeIcon width={20} icon={faArrowAltCircleRight}/> </a>
    </div>
    
    </div>
}

export default Quote;