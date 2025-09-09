import "./style.css"

import About from "@/app/components/About/About";
import Header from "@/app/components/Header/Header";
import Navbar from "@/app/components/Navbar/Navbar";
import Team from "@/app/components/Team/Team";
import Quote from "@/app/components/Quote/Quote";
import Footer from "@/app/components/Footer/Footer";
import { getCollection } from "@/app/page";

const AboutPage = async() => {

    const aboutUs = await getCollection('content/about');
    const team = await getCollection('content/team')

    return <>


        <Header />
        <Navbar />

        <main className="about_us">
            <section className="about_content">
                <h1 className="bold">About us</h1>

                <article>
                 {aboutUs[0].about}
                </article>
            </section>

            <section className="about_us_img">
            
            </section>


        </main>

        <About about = {aboutUs} />
        <Team team={team} />
        <Quote />
        <Footer />


    </>
}

export default AboutPage;