import "./style.css"
import Image from "next/image"

import Link from "next/link"


export function truncate(text, maxLength = 4) {
    if (text.split(' ').length < maxLength) {
        return text;
    }
    return text.split(' ').slice(0, maxLength).join(' ')
}


const Activities = ({ posts }) => {



    posts = posts.reverse();
    if (posts.length > 3) {
        posts = posts.slice(0, 3)
    }


    const displayPosts = posts.map((post, index) => (<Link key={index} href={"/pages/blogs"} className="activity_card">
        <div className="img">
            <Image width={200} height={200} className="image" alt={index} src={post.image} />
        </div>
        <h1 style={{fontSize: "1rem"}} >{truncate(post.title)}</h1>

    </Link>))

    return <div className="activity_wrapper">


        <section className="activity">

            <div className="activity_header">
                <h1>COJESKI<span style={{ color: "#333" }}>NEWS</span></h1>
                <p>Updated 12/12/2022</p>
            </div>

            <div className="activity_cards">

                {posts !== null && displayPosts}

            </div>

        </section>
    </div>
}

export default Activities;