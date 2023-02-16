import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header/Header";
import Navbar from "./component/navbar/Navbar";
import About from "./component/about/About";
import Experience from "./component/experience/Experience";
import Service from "./component/services/Service";
import Testimonials from "./component/testimonials/Testimonials";
import Portfolio from "./component/portfolio/Portfolio";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      {/* <Service /> */}
      <Portfolio />
      <Contact />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}

export default App;
