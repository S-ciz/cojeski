
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ProjComp from "./projComp";

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

const WhatWeDo = () => {
    // Fetch all needed data here (server-side)
     const humanRights = getMarkdownData("whatWeDo/humanRights", "humanRights.md")
       const research = getMarkdownData("projects/research", "research.md" )
    const advocacy =getMarkdownData("projects/advocacy", "advocacy.md" )
   const reliefAid = getMarkdownData("projects/reliefAid", "reliefAid.md" )
   const training = getMarkdownData("projects/training", "training.md" )
   const campaigns = getMarkdownData("projects/campaigns", "campaigns.md" )
   const iga = getMarkdownData("projects/iga", "iga.md" )
   const civic_education = getMarkdownData("projects/civic_education", "civic_education.md" )
   const health = getMarkdownData("projects/health", "health.md" )
   const education = getMarkdownData("projects/education", "education.md" )

    return (
       <ProjComp
     humanRights = {humanRights}
     research={ research}
     advocacy={advocacy}
     reliefAid={reliefAid}
     training={training}
     campaigns={campaigns}
     iga={iga}
     civic_education={civic_education}
     health={health}
     education={education}
       />
    );
}

export default WhatWeDo;