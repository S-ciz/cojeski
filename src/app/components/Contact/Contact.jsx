import "./style.css"
import Image from "next/image";
import Map from "../../../../public/map.png"
const Contact = () => {

    return <div id="contact" className="contact_wrapper">
        <div className="contact">


            <section className="contact_split">
                <div className="location">
                    <h3 className="bold">Our Main Office</h3>
                    <br/>
                    <ul className="contact_details">
                        <li><span>Location</span>: Offices in Goma, North Kivu </li>
                        <li><span>Contact</span>: N0 172 Nzangi Butondo Road,
                            Kituku One,
                            Kyeshero Goma,
                            North Kivu</li>
                        <li><span>Tel</span>: +243853191163</li>
                        <li><span>Email</span>: cojeskinordkivu @gmail.com</li>
                    </ul>

                    <Image className="map" alt="map" src={Map} width={300} height={300} />
                </div>
                <form>

                    <h1>Contact us</h1>
                    <label>Email</label>
                    <input type="email" name="" id="" />
                    <label>Title</label>
                    <input type="text" name="" id="" />
                    <label>Message</label>
                    <textarea className="message"></textarea>

                    <input className="btn" type="submit" value="Send" />
                </form>
            </section>
        </div>
    </div>
}


export default Contact;