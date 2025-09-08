
import Header from "@/app/components/Header/Header";
import Navbar from "@/app/components/Navbar/Navbar";
import Showcase from "@/app/components/Showcase/Showcase";
import Blogs_blogs from "./blogs";
import Quote from "@/app/components/Quote/Quote";
import Footer from "@/app/components/Footer/Footer";



const Blogs = () => {

    return <>
        <Header />
        <Navbar />
        <Blogs_blogs/>
        <Quote/>
        <Footer />
    </>
}

export default Blogs;