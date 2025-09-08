import "./style.css"


const Contact = () => {

    return <div id="contact" className="contact_wrapper">
        <div className="contact">
            <div className="header">
                <h1>Contact Us</h1>
            </div>

            <section className="contact_split">
                <iframe loading="lazy"  src="https://www.google.com/maps/embed/v1/place?q=democratic%20republic%20of%20congo&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
              
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