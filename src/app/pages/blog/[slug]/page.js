import "./style.css"
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

import Image from "next/image";
import Header from "@/app/components/Header/Header";
import Showcase from "@/app/components/Showcase/Showcase";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";

// Generate all possible blog slugs
export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content/blog");
  const slugs = fs.readdirSync(dir).map((file) => ({
    slug: file.replace(/\.md$/, ""),
  }));
  return slugs;
}

export default async function BlogPost({ params }) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "content/blog", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

  return (

    <div>
      <Header />
      <Navbar />
      <Showcase />

      <main className="single_blog" >
        <h1>{data.title}</h1>
        <p>{data.date}</p>
        {(data.image !== null && data.image.trim() !== "") && <Image width={200} height={200} className="blog_img" alt="blog_img" src={data.image} />}
        <article dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </main>

      <Footer />
    </div>
  );
}
