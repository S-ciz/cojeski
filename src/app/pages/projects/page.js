import { getCollection } from "@/app/page";
import "./style.css"
import Header from "@/app/components/Header/Header";
import Navbar from "@/app/components/Navbar/Navbar";
import Quote from "@/app/components/Quote/Quote";
import Footer from "@/app/components/Footer/Footer";
import Card from "@/app/components/Card/Card";


const Projects = async () => {
 
    const projects = await getCollection('content/project')
    const displayProjects = projects.map((proj, idx)=> <Card text={proj.text} title={proj.title} key={idx}/>)
    console.log(projects)
    return <>
        <Header />
        <Navbar />

        <div className="projects">
            <h1 className="bold title">Our Projects</h1>
            <div className="project_cards">
               {displayProjects}
            </div>


        </div>
        <br/>

        <Quote />
        <Footer />
    </>
}

export default Projects;