
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



      <main className="single-blog-container">
        <div className="single-blog-title">{data.title}</div>
        <div className="single-blog-date">{data.date.toString().split(' ').slice(0,5).join(' ')}</div>
        {(data.image && data.image.trim() !== "") && (
          <img className="single-blog-image" src={data.image} alt={data.title} />
        )}
        <div className="single-blog-content">{data.description}</div>
      </main>

      <Quote/>

      <Footer />
    </div>
  );
}
