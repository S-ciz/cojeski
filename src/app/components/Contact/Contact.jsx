import "./style.css"
import Image from "next/image";
import Map from "../../../../public/map.png"
const Contact = () => {

    return <div id="contact" className="contact_wrapper">
        <div className="contact">


            <section className="contact_split">
                <div className="location">
                    <h3 className="bold">Our Main Office</h3>
                    <ul className="contact_details">
                        <li><span>Location</span>: Offices in Goma, North Kivu </li>
                        <li><span>Contact</span>: N0 172 Nzangi Butondo Road,
                            Kituku One,
                            Kyeshero Goma,
                            North Kivu</li>
                        <li><span>Tel</span>: +243853191163</li>
                        <li><span>Email</span>: cojeskinordkivu@gmail.com</li>
                    </ul>

                    <Image className="map" alt="map" src={Map} width={300} height={300} />
                </div>
                <form>

                    <h1>Contact us</h1>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" />
                    <label htmlFor="message">Message</label>
                    <textarea className="message" name="message" id="message"></textarea>

                    <input className="btn" type="submit" value="Send" />
                </form>
            </section>
        </div>
    </div>
}


export default Contact;