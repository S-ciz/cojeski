import "./style.css"
import Link from "next/link";
import { getAllPosts } from "@/app/page";

const Blogs_blogs = async () => {

  const posts = await getAllPosts();
 


  return (
    <div>
      <h1 className="post_heading"><span className="bold">COJESKI</span> NEWS</h1>
      <div className="blog-list">
        {posts.map((post, index) => (
          <div className="blog-card" key={index}>
            {post.image && (
              <img src={post.image} alt={post.title} />
            )}
            <div className="blog-title">{post.title}</div>
            {/* <div className="blog-date">{post.date.toString()}</div> */}
            <div className="blog-description">{post.description}</div>
            <Link href={`/pages/blog/${post.slug}`} className="blog-link">Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );

}

export default Blogs_blogs;