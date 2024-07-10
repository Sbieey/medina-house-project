import AboutUs from "../components/HomePage/Aboutus"
import { Contactus } from "../components/HomePage/Contactus"
import Footer from "../components/HomePage/Footer"
import HOJsection from "../components/HomePage/HOJ-section"
import Home from "../components/HomePage/Homepage"
import HOWsection from "../components/HomePage/HOW-section"
import MadinaStats from "../components/HomePage/MadinaStats"
import Navbar from "../components/HomePage/Navbar"
import Testimonial from "../components/HomePage/Testimonial"

const HomePage = () => {
    return (
        <div>
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
    )
}

export default HomePage
