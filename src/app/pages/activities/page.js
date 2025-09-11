
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ActComp from "./ActComp";

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

const ActPage = () => {
    // Fetch all needed data here (server-side)

    const refugee = getMarkdownData("activities/Refugee", "refugee.md")
    const idps = getMarkdownData("activities/IDPs", "idps.md")
    const floodVictims = getMarkdownData("activities/Flood_victims", "flood_victims.md")
    const statelessPeople = getMarkdownData("activities/Stateless_people", "stateless_people.md")
    const warVictims = getMarkdownData("activities/War_victims", "war_victims.md")
    const research = getMarkdownData("activities/research", "research.md")

    return (
        <ActComp
            floodVictims={floodVictims}
            idps={idps}
            refugee={refugee}
            statelessPeople={statelessPeople}
            warVictims={warVictims}
            research={ research}
        />
    );
}

export default ActPage;