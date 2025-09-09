import "./style.css"
import Link from "next/link";


const Fundraising = () => {
    const projects = [
        {
            id: 1,
            title: "Urgent relief aid",
            link: "https://www.globalgiving.org/projects/urgent-relief-aid-to-war-survivors-in-east-drcongo/"
        },
        {
            id: 2,
            title: "Sexual and Reproductive Health Rights",
            link: "https://www.globalgiving.org/projects/support-the-reduction-of-abortion-stigma-goma-drc/"
        },
        {
            id: 3,
            title: "Small business to women",
            link: "https://www.globalgiving.org/projects/support-small-busness-to-250-refugees-in-drcongo/"
        },
        {
            id: 4,
            title: "Skills development to refugees and IDPs",
            link: "https://www.globalgiving.org/projects/skills-development-to-refugees-and-ipds-in-drcongo/"
        },
        {
            id: 5,
            title: "Documenting refugees",
            link: "https://www.globalgiving.org/projects/documenting-refugees-for-peace-in-drcongo/"
        },
        {
            id: 6,
            title: "Emergency support to HRDs",
            link: "https://www.globalgiving.org/projects/emergency-funds-to-refugee-human-rights-defenders/"
        },
        {
            id: 7,
            title: "End Cholera in Kalemie",
            link: "https://www.globalgiving.org/projects/end-cholera-and-other-diseases-in-kalemie-drcongo/"
        },
        {
            id: 8,
            title: "Kahengela Flood Victims",
            link: "https://www.globalgiving.org/projects/restore-500-kahengera-flood-victims-in-kalemie-drc/"
        },
        {
            id: 9,
            title: "Porridge to refugee children",
            link: "https://www.globalgiving.org/projects/porridge-to-idp-malnourrished-children-in-goma-rdc/"
        },
        {
            id: 10,
            title: "Support indigenous people",
            link: "https://www.globalgiving.org/projects/support-protection-of-indiginous-people-rdc/"
        },
        {
            id: 11,
            title: "Dialogue on refugee issues",
            link: "https://www.globalgiving.org/projects/sponsor10-refugees-in-drc-to-attend-this-un-summit/"
        },
        {
            id: 12,
            title: "Flood victims",
            link: "https://www.globalgiving.org/projects/build-a-shelter-for-the-war-survivors-in-drcongo/"
        },
        {
            id: 13,
            title: "Charcoal Project",
            link: "https://www.globalgiving.org/projects/refugee-charcoal-project-in-goma-north-kivu-drc/"
        }
    ];


    return <>



        <div className="links_wrapper">
            <h1 className="bold title">Fundraising Links</h1>
            <div className="links">

                {projects.map(pro => (<Link href={pro.link} className="fund_link" key={pro.id}>{pro.title}</Link>))}

            </div>
        </div>

    </>
}


export default Fundraising;