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
  const postsDir = path.join(process.cwd(), 'content/blog')
  const files = fs.readdirSync(postsDir)

  const posts = files.map(filename => {
    const filePath = path.join(postsDir, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)
    return { ...data, slug: filename.replace('.md', '') }
  })

  return posts  
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
