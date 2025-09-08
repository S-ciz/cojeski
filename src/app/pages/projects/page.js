import "./style.css"
import Header from "@/app/components/Header/Header";
import Navbar from "@/app/components/Navbar/Navbar";
import Quote from "@/app/components/Quote/Quote";
import Footer from "@/app/components/Footer/Footer";
import Card from "@/app/components/Card/Card";


const Projects = () => {

    return <>
        <Header />
        <Navbar />

        <div className="projects">
            <h1 className="bold title">Our Projects</h1>
            <div className="project_cards">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>


        </div>

        <Quote />
        <Footer />
    </>
}

export default Projects;