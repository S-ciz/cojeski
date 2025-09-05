"use client"
import { useEffect } from "react";
import { useRouter } from "next/router";
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
export default function Home() {

  const router = useRouter();
  useEffect(()=>{
 //if invite token is present in url
 console.log(window.location.hash)
 if(window.location.hash.includes("invite_token")) 
 {
   router.push("/admin/" + window.location.hash)
 }
  }, [router])

  return (
    <>
      <Header />
      <Navbar />
      <Showcase/>
      <Subscribe/>
      <Welcome/>
      <About/>
      <Activities/>
      <Quote/>
      <Team/>
      <Contact/>
      <Footer/>
    </>
  );
}
