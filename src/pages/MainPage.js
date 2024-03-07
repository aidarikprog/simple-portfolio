import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import Hero from "../layouts/mainPage/MainHero"
import Projects from "../layouts/mainPage/MainProjects"

const MainPage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Projects />
            <Footer />
        </>
    )
}

export default MainPage
