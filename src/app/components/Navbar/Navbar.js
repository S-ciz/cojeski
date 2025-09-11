"use client"

import "./style.css"
import Image from "next/image"
import Link from "next/link"
import img1 from "../../../../public/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"



const Navbar = () => {

   const [toggle, setToggle] = useState(false)
   function toggleBar() {
      setToggle(!toggle)
   }

   return <nav>

      <header>
         <section className="logo">
            <Image className="imgLogo" alt="Logo" src={img1} />
            <h3 >The collective of <span className="bold">Youth Organisations</span> for <span className="bold">Solidarity</span> in the Democratic Republic of Congo</h3>
         </section>
         <section className="nav">
            <div className="menu_icon"> <FontAwesomeIcon color="#333" onClick={toggleBar} width={30} icon={toggle ? faTimes : faBars} /></div>
            {toggle && <ul className="small_screen">
               <li> <Link href={"/"} className="bold">Home</Link></li>
               <li><Link href={"/pages/about"}>About</Link></li>
               <li><Link href={"/pages/blogs"}>News</Link></li>
               <li><Link href={"/pages/projects"} >Projects</Link></li>
               <li><Link href={"/pages/activities"} >Activities</Link></li>
               <li><Link href={"/pages/fundraising"} >Fundraising</Link></li>
               <li><Link href={"/#contact"} >Contact</Link></li>
               <li><a className="active" href="#">Donate</a></li>
            </ul>}
         </section>
      </header>
   </nav>
}


export default Navbar