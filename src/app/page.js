import fs from "fs"
import matter from "gray-matter";
import path from "path";

//componenets
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Showcase from "./components/Showcase/Showcase";
import Subscribe from "./components/Subscribe/Subscribe";
import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";
import Activities from "./components/Activities/Activities";
import Quote from "./components/Quote/Quote";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";




export async function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      slug: fileName.replace(/\.md$/, ""),
      ...data,
      content,
    };
  });
}

export default async function Home() {

  const blogs = await getAllPosts();
  
  return (
    <>
      <Header />
      <Navbar />
      <Showcase/>
      <Subscribe/>
      <Welcome/>
      <About/>
      <Activities posts = {blogs} />
      <Quote/>
      <Team/>
      <Contact/>
      <Footer/>
    </>
  );
}
