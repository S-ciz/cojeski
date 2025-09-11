
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import WeDoComp from "./weDoComp.js";

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
    const governance = getMarkdownData("whatWeDo/governance", "governance.md")
    const democracy =  getMarkdownData("whatWeDo/democracy", "democracy.md")
    const leadership =  getMarkdownData("whatWeDo/leadership", "leadership.md")
    const development =  getMarkdownData("whatWeDo/development", "development.md")
    const disaster = getMarkdownData("whatWeDo/disaster", "disaster.md")
    const humanitarian =  getMarkdownData("whatWeDo/humanitarian", "humanitarian.md")
    const climateChange =  getMarkdownData("whatWeDo/climateChange", "climateChange.md")

    return (
       <WeDoComp
       humanRights= {humanRights}
       governance = {governance}
       democracy= {democracy}
       leadership = {leadership}
       development = {development}
       disaster = {disaster}
       humanitarian ={humanitarian}
       climateChange= {climateChange}
       />
    );
}

export default WhatWeDo;