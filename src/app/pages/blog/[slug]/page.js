
import "./style.css"

import Image from "next/image";
import Header from "@/app/components/Header/Header";
import Showcase from "@/app/components/Showcase/Showcase";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import Quote from "@/app/components/Quote/Quote";
import { getAllPosts } from "@/app/page";



export default async function BlogPost({ params }) {

  const slug = await params;
  const posts = await getAllPosts();

  const data = posts.find(item => item.slug === slug.slug)


  return (

    <div>
      <Header />
      <Navbar />


      <main className="single_blog" >
        <h1>{data.title}</h1>
        <p>{data.date.toString()}</p>
        {(data.image !== null && data.image.trim() !== "") && <Image width={200} height={200} className="blog_img" alt="blog_img" src={data.image} />}

      </main>

      <Quote/>

      <Footer />
    </div>
  );
}
