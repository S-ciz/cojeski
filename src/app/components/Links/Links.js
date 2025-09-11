import "./link.css"
import Link from "next/link";


 const Links = () => {
   return <>

      <div className="main_links">
         <Link className="main_link" href={"/"}>Home</Link>
        <Link className="main_link" href={"/pages/about"}>About Us</Link>
        <Link className="main_link" href={"/pages/whatWeDo"}>What we do</Link>
        <Link className="main_link" href={"/pages/projects"} >Projects</Link>
        <Link className="main_link" href={"/pages/activities"} >Activities</Link>
        <Link className="main_link" href={"/pages/joinUs"} >Join Us</Link>
        <Link className="main_link" href={"/pages/fundraising"} >Fundraising</Link>
        <Link className="main_link" href={"/#contact"} >Contact</Link> 
      </div></>
}

export default Links;