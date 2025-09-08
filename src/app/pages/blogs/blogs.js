import "./style.css"
import Link from "next/link";
import { getAllPosts } from "@/app/page";

const Blogs_blogs = async () => {

  const posts = await getAllPosts();
 

  return <div>

    <h1 className="post_heading"><span className="bold">COJESKI</span>NEWS </h1>
    <div className="blogs">
 

      {posts.map((post, index) => (<div className="card" key={index}>

        <Link href={`/pages/blog/${post.slug}`} >

          <div className="blog_content">
            <h5 className="title">{post.title}</h5>
            <p className="desc">{post.description}</p>
          </div>

          <button className="btn">Read more</button>

        </Link>

      </div>))}

    </div>


  </div>

}

export default Blogs_blogs;