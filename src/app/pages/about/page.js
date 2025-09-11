
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import AboutUs from "../aboutUs/aboutUs";

function getMarkdownData(folder, filename) {
    const filePath = path.join(process.cwd(), "content", folder, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);
    return data;
}

function getAllMarkdownData(folder) {
    const dirPath = path.join(process.cwd(), "content", folder);
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith(".md"));
    return files.map(file => getMarkdownData(folder, file));
}

const AboutPage = () => {
    // Fetch all needed data here (server-side)

    const history = getMarkdownData("aboutUs/history", "history.md")
    const structure = getMarkdownData("aboutUs/structure", "struct.md")
    const documents = getAllMarkdownData("aboutUs/documents");
    const reports = getAllMarkdownData("aboutUs/reports");
    const members = getAllMarkdownData("aboutUs/members");
    const partners = getAllMarkdownData("aboutUs/partners");
    const donors = getAllMarkdownData("aboutUs/donors");
    const staff = getAllMarkdownData("aboutUs/staff");

    return (
        <AboutUs
            history={history}
            structure={structure}
            documents={documents}
            reports={reports}
            members={members}
            partners={partners}
            donors={donors}
            staff={staff}
        />
    );
}

export default AboutPage;