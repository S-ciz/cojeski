import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faFacebook,
    faInstagram,
    faTwitter
} from "@fortawesome/free-brands-svg-icons"


const Footer = ()=>{

    return <footer className="footer_wrapper">
        <div className="footer">
            <section>
                <h1>Social Media</h1>
                <ul>
                    <li> <FontAwesomeIcon width={20} icon={faFacebook}/> Facebook page</li>
                    <li><FontAwesomeIcon width={20} icon={faInstagram}/> Instagram page</li>
                    <li><FontAwesomeIcon width={20} icon={faTwitter}/> Twitter page</li>
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