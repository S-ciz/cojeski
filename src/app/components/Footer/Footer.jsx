import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faFacebook,
    faInstagram,
    faTwitter, 
    faLinkedin,
    faYoutube
} from "@fortawesome/free-brands-svg-icons"


const Footer = ()=>{

    return <footer className="footer_wrapper">
        <div className="footer">
            <section>
                <h1>Social Media</h1>
                <ul>
                    <li> <FontAwesomeIcon width={20} icon={faFacebook}/> Facebook </li>
                    <li><FontAwesomeIcon width={20} icon={faInstagram}/> Instagram </li>
                    <li><FontAwesomeIcon width={20} icon={faLinkedin}/> Linkedin </li>
                    <li><FontAwesomeIcon width={20} icon={faYoutube}/> Youtube</li>
                    <li><FontAwesomeIcon width={20} icon={faTwitter}/> Twitter</li>
                </ul>
            </section>
            <section>
                <h1>Links</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Blogs</li>
                    <li>Donation</li>
                </ul>
            </section>
            <section>
                <h1>Partners</h1>
                <ul>
                    <li>URASA</li>
                    <li>Stan-dard Solutions</li>
                 
                </ul>
            </section>
            
        </div>
    </footer>
}

export default Footer;