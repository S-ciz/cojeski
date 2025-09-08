import "./style.css"

import About from "@/app/components/About/About";
import Header from "@/app/components/Header/Header";
import Navbar from "@/app/components/Navbar/Navbar";
import Team from "@/app/components/Team/Team";
import Quote from "@/app/components/Quote/Quote";
import Footer from "@/app/components/Footer/Footer";


const AboutPage = () => {

    return <>


        <Header />
        <Navbar />

        <main className="about_us">
            <section className="about_content">
                <h1 className="bold">About us</h1>

                <article>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, perspiciatis nostrum libero expedita quisquam architecto neque autem distinctio provident doloremque porro asperiores laudantium deleniti nobis, sapiente, cupiditate illo molestiae quibusdam?
                </article>
            </section>

            <section className="about_us_img">

            </section>


        </main>

        <About />
        <Team />
        <Quote />
        <Footer />


    </>
}

export default AboutPage;