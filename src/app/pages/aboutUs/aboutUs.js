"use client"
import "../comp.css"
import Header from "@/app/components/Header/Header";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import Quote from "@/app/components/Quote/Quote";


const AboutUs = ({
    history,
    structure,
    documents,
    reports,
    members,
    partners,
    donors,
    staff
}) => {
    const aboutLinks = [
        { title: "History", content: history?.text, id: 1 },
        { title: "Documents", documents: documents, id: 2 },
        { title: "Members", people: members, id: 3 },
        { title: "Partners", people: partners, id: 4 },
        { title: "Donors", people: donors, id: 5 },
        { title: "Reports", documents: reports, id: 6 },
        { title: "Staff Members", people: staff, id: 7 },
        { title: "Structure", content: structure?.text, id: 8 }
    ];


    function displayContent(e) {
        const contentDiv = document.querySelector(".about_content");
        const selectedItem = aboutLinks.find(item => item.title === e.target.innerText.trim());
        let html = `<h2>${selectedItem.title}</h2>`;
        if (selectedItem.content) {
            html += `<p>${selectedItem.content}</p>`;
        } else if (selectedItem.documents) {
            html += '<ul>' + selectedItem.documents.map(doc => `<li><a href="${doc.url}" target="_blank">${doc.name || doc.title}</a></li>`).join('') + '</ul>';
        } else if (selectedItem.people) {
            html += '<div class="people-list">' + selectedItem.people.map(person => `
                <div class="person-card">
                    <img src="${person.img || ''}" alt="${person.personName || person.title}" style="width:60px;height:60px;border-radius:50%;object-fit:cover;" />
                    <h4>${person.Name || person.title}</h4>
                    <p>${person.Description || person.text || ''}</p>
                </div>
            `).join('') + '</div>';
        }
        contentDiv.innerHTML = html;
    }
    return <>
        <Header />
        <Navbar />
        <main className="about_links">
            {aboutLinks.map(item => (
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

export default AboutUs;