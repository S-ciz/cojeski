import "./style.css"


const About = ({about})=>{
    return <main className="about_wrapper">
       
       <section className="about">

        <div className="about_card">
            <h1>Mission</h1>
            <p>{about[0].mission}</p>
        </div>
        <div className="about_card">
            <h1>Vision</h1>
           <p>{about[0].vision}</p>
        </div>

       </section>
    </main>
}

export default About