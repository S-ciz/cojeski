import "./style.css"
import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

export default function TextOnly({ title = "Title", text = "default Text" }) {
    return <>

        <Header />
        <Navbar />

        <div className="section">

            <h1>{title}</h1>
            <article>

                {text}
            </article>
        </div>

        <Footer />

    </>
}