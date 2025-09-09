"use client"

import "./style.css"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faChevronCircleDown, faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Fundraising from "../Fundraising/Fund";

const DropDown = ({ text, title }) => {

    const [drop, setDrop] = useState(false);

    return (<div className="dropdown">
        <div onClick={() => setDrop(!drop)} className="dropdown_header">
            <h4>{title}</h4>
            <FontAwesomeIcon color="var(--darkTeal)" width={20} icon={drop ? faChevronCircleUp : faChevronCircleDown} />
        </div>
        <p className={drop ? "drop_content" : "drop_content_empty"}>
            {text}
        </p>
    </div>)
}
const Welcome = ({publications}) => {


    return <main className="welcome_wrapper">
        <section id="welcome" className="welcome">



            <div>
                <Fundraising />
                  <br/>
                <h1 style={{paddingLeft: '0.5rem'}} className="bold">Publications</h1> 
              
                 {/*  Publications */}
                <div className="dropdowns">
                    {publications.map(item => (<DropDown key={item.id} title={item.title} text={item.description} />))}
                </div>



                {/* <button className="button">READ MORE  <FontAwesomeIcon width={20} icon={faArrowAltCircleRight} /> </button> */}
            </div>


            <div className="welcome_bg">
                {/*  placeholder for backgound image */}
            </div>
        </section>
    </main>
}

export default Welcome;