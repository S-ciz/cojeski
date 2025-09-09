import { getCollection } from "@/app/page";
import "./style.css"
import Header from "@/app/components/Header/Header";
import Navbar from "@/app/components/Navbar/Navbar";
import Quote from "@/app/components/Quote/Quote";
import Footer from "@/app/components/Footer/Footer";
import Card from "@/app/components/Card/Card";


const Act = async() => {

 let activities = await getCollection('/content/activities')

 const displayActivities = activities.map((act, index)=> <Card key={index} text={act.description} title={act.title}/>)

    return <>
        <Header />
        <Navbar />

        <div className="projects">
            <h1 className="bold title">Our Activities</h1>
            <div className="project_cards">
              {displayActivities}
            </div>
            <br/>


        </div>

        <Quote />
        <Footer />
    </>
}

export default Act;