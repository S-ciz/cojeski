import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, 
    faInstagram,
    faTwitter,
    faLinkedin
 } from "@fortawesome/free-brands-svg-icons";


const Header = () => {

    return <header className="wrapper">
       <div className="header_box">
        <span></span>
        <ul>
            <li> <FontAwesomeIcon width={20} icon={faFacebook}/></li>
            <li> <FontAwesomeIcon width={20} icon={faInstagram}/></li>
            <li> <FontAwesomeIcon width={20} icon={faTwitter}/></li>
            <li> <FontAwesomeIcon width={20} icon={faLinkedin}/></li>
        </ul>
         </div>
    </header>
}

export default Header;