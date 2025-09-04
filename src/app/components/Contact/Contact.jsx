import "./style.css"


const Contact = () => {

    return <div id="contact" className="contact_wrapper">
        <div className="contact">
            <div className="header">
                <h1>Contact Us</h1>
            </div>

            <section className="contact_split">
            
                <iframe  src="https://maps.google.com/maps?width=600&height=500&hl=en&q=democratic%20republic%20of%20Congo%2C%20bukavu&t=&z=14&ie=UTF8&iwloc=B&output=embed"></iframe>
                <form>

                    <h1>Contact</h1>

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