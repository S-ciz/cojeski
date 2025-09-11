
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import JoinUs from "./joinUsComp";

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

const JoinUsPage = () => {
    // Fetch all needed data here (server-side)

    const member = getMarkdownData("joinUs/become_member", "become_member.md");
    const volunteer = getMarkdownData("joinUs/volunteer", "volunteer.md");
    const donor = getMarkdownData("joinUs/donor", "donor.md");
    const supporter = getMarkdownData("joinUs/supporter", "supporter.md");
    
    return (
       <JoinUs
       member={member}
       volunteer={volunteer}
       donor={donor}
       supporter={supporter}
       
       />
    );
}

export default JoinUsPage;