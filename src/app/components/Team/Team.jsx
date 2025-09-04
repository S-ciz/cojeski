import "./style.css"
import Image from "next/image"

import profile1 from "../../../../public/profile1.jpg"
import profile2 from "../../../../public/profile2.jpg"
import profile3 from "../../../../public/profile3.jpg"
const Team = ()=>{
    return <div className="team_wrapper">

        <div className="team">
       <div className="header">
        <h1>Meet our team</h1>
       </div>

       <div className="members">
        <div className="member_only">
            <div className="image_wrapper">
                <Image alt="left" src={profile1}/>
            </div>
        </div>
        <div className="member_and_details">
            <div className="image_wrapper">
                <Image alt="middle" src={profile3}/>
            </div>

            <div className="details">
                <h1>Benita Kamanda</h1>
                <p>CEO, DIRECTOR</p>
            </div>
        </div>
        <div className="member_only">
            <div className="image_wrapper">
                <Image alt="right" src={profile2}/>
            </div>
        </div>

       </div>
        </div>
    </div>
}

export default Team;