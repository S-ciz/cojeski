"use client"
import "../comp.css"
import Header from "@/app/components/Header/Header";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import Quote from "@/app/components/Quote/Quote";



const JoinUs = ({
   member,
   volunteer,
   donor,
   supporter,
  
}) => {
    const activityLinks = [
        { title: "Become a member", content: member?.text },
        { title: "Internship and Volunteer", content: volunteer?.text },
        { title: "Donor", content: donor?.text },
        { title: "Supporter", content: supporter?.text },
    
    ];


    function displayContent(e) {
        const contentDiv = document.querySelector(".about_content");
        const selectedItem = activityLinks.find(item => item.title === e.target.innerText.trim());
        let html = `<h2>${selectedItem.title}</h2>`;
        if (selectedItem.content) {
            html += `<p>${selectedItem.content}</p>`;
        }
        contentDiv.innerHTML = html;
    }
    return <>
        <Header />
        <Navbar />
        <main className="about_links">
            {activityLinks.map(item => (
                <div onClick={displayContent} className="about_link" key={item.title}>
                    {item.title}
                </div>
            ))}
        </main>
        <div className="about_content">
            {/* Content will be injected here by displayContent */}
        </div>
        <Quote />
        <Footer />
    </>
}

export default JoinUs;