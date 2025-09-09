"use client"
import "./style.css"
import Image from "next/image"

import profile1 from "../../../../public/profile1.jpg"
import profile2 from "../../../../public/profile2.jpg"
import profile3 from "../../../../public/profile3.jpg"
import { useEffect, useState } from "react"
const Team = ({ team }) => {

    let [defaultTeam, setTeam] = useState([team])



    // function threeRandomMembers() {

    //     for (let i = team.length - 1; i > 0; i--) {
    //         // Pick a random index from 0 to i
    //         const j = Math.floor(Math.random() * (i + 1));

    //         // Swap elements at index i and j
    //         [team[i], team[j]] = [team[j], team[i]];
    //     }

    //     return team.slice(0,3);
    // }

    // useEffect(() => {
    //     setInterval(() => {
    //       setTeam(threeRandomMembers());
    //     }, 5000);
    // }, [])
    const prefix = "../../../../public"

    console.log(team)


    return <div className="team_wrapper">

        {team.length >= 3 && <div className="team">
            <div className="header">
                <h1>Meet our team</h1>
            </div>

            <div className="members">
                <div className="member_only">
                    <div className="image_wrapper">
                        <Image className="aside" alt="left" width={100} height={100} src={team[0].image} />
                    </div>
                </div>
                <div className="member_and_details">
                    <div className="image_wrapper">
                        <Image className="middle" alt="middle" width={200} height={200} src={team[1].image} />
                    </div>

                    <div className="details">
                        {/* <h1>Benita Kamanda</h1> */}
                        <p>{team[1].role}</p>
                    </div>
                </div>
                <div className="member_only">
                    <div className="image_wrapper">
                        <Image className="aside" alt="right" width={100} height={100} src={team[2].image} />
                    </div>
                </div>

            </div>
        </div>}
    </div>
}

export default Team;