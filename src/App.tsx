import Navbar from "./components/Navbar";
import Home from "./components/Homepage";
import AboutUs from "./components/Aboutus";
import HOJsection from "./components/HOJ-section";
import HOWsection from "./components/HOW-section";
import MadinaStats from "./components/MadinaStats";
import Testimonial from "./components/Testimonial";
import { Contactus } from "./components/Contactus";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <AboutUs />
      <HOJsection />
      <HOWsection />
      <MadinaStats />
      <Testimonial />
      <Contactus />
      <Footer />
    </div>
  );
}

export default App;
