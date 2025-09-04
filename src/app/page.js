
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
