"use client"

import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, 
    faInstagram,
    faTwitter,
    faLinkedin,
    faYoutube
 } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react"


const Header = () => {



    useEffect(() => {
    if (window.location.hash.includes("invite_token")) {
      // Redirect manually with the hash included
      window.location.href = "/admin/" + window.location.hash;
    }
  }, []);

    return <header className="wrapper">
       <div className="header_box">
        <span></span>
        <ul>
            <li> <FontAwesomeIcon width={20} icon={faFacebook}/></li>
            <li> <FontAwesomeIcon width={20} icon={faInstagram}/></li>
            <li> <FontAwesomeIcon width={20} icon={faTwitter}/></li>
            <li> <FontAwesomeIcon width={20} icon={faLinkedin}/></li>
            <li> <FontAwesomeIcon width={20} icon={faYoutube}/></li>
        </ul>
         </div>
    </header>
}

export default Header;