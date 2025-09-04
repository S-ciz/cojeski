"use client"

import "./style.css"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faChevronCircleDown, faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";


const DropDown = ({ text, title }) => {

     const [drop, setDrop] = useState(false);

    return (<div className="dropdown">
        <div onClick={() => setDrop(!drop)} className="dropdown_header">
            <h4>{title}</h4>
            <FontAwesomeIcon color="var(--darkTeal)" width={20} icon={ drop? faChevronCircleUp : faChevronCircleDown} />
        </div>
        <p className={drop ? "drop_content" : "drop_content_empty"}>
           {text}
        </p>
    </div>)
}
const Welcome = () => {


   

    const activities = [
        {
            id: 1,
            title: "Human Rights",
            text: "Awareness campaigns, documentation of violations, legal assistance, and policy research"
        },
        {
            id: 2,
            title: "Peace & Conflict Resolution",
            text: "Peace education, dialogue facilitation, negotiation, non-violence strategies, and mediation efforts"
        },
        {
            id: 3,
            title: "Democracy & Civic Engagement",
            text: "Civic education, leadership development, freedom of expression, and improving access to information In North Kivu, they also promote clarity around Congolese citizenship and empower women leaders"
        },
        {
            id: 4,
            title: "Humanitarian Actions",
            text: "Emergency response, disaster relief, prevention of natural risks, and support for refugees and internally displaced persons—especially relevant in regions like North Kivu and Bulengo camp near Goma"
        },
        {
            id: 5,
            title: "Education",
            text: "Enhancing formal education (infrastructure, curriculum reform, access for refugees and early childhood) and informal education (functional literacy, language inclusion for integration)"
        },
    ]

    

    return <main className="welcome_wrapper">
        <section id="welcome" className="welcome">
            <div>

                <h1>Welcome!</h1>
                <p>
                    COJESKI-DRC is a <span className="bold">youth-led, decentralized civil society network</span> dedicated to promoting human rights, democracy, peace, and sustainable development across the Democratic Republic of Congo. Its work spans grassroots-level education and cultural initiatives, humanitarian relief, policy advocacy, governance reform, and regional crisis response.
                </p>
                <p>
                     The North Kivu coordination, based in Goma, adapts these priorities to the specific challenges faced in that region—including conflict, displacement, and civic instability.
                </p>

                <div className="dropdowns">
                   {activities.map(item=>(<DropDown key={item.id} title={item.title} text={item.text}/>))}
                </div>



                <button>READ MORE  <FontAwesomeIcon width={20} icon={faArrowAltCircleRight} /> </button>
            </div>


            <div className="welcome_bg">
                {/*  placeholder for backgound image */}
            </div>
        </section>
    </main>
}

export default Welcome;