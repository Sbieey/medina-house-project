import AboutUs from "../../components/Houses/HouseOfWisdom/AboutUs"
import Home from "../../components/Houses/HouseOfWisdom/Hompage"
import Services from "../../components/Houses/HouseOfWisdom/Services"
import Events from "../../components/Houses/HouseOfWisdom/Events"
import Education from "../../components/Houses/HouseOfWisdom/Education"
import Teachers from "../../components/Houses/HouseOfWisdom/Teachers"
import NewsLetter from "../../components/Houses/HouseOfWisdom/NewsLetter"
import Footer from "../../components/Houses/HouseOfWisdom/Footer"
import Stories from "../../components/Houses/HouseOfWisdom/Stories"



const HomePage = () => {
    return (
        <div>
            <Home />
            <Services />
            <AboutUs />
            <Events />
            <Education />
            <Teachers />
            <Stories />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default HomePage
