import AboutBanner from "../components/AboutBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Mission from "../components/Mission";

const About = () => {
    return (
        <div>
            <Header/>
            <AboutBanner/>
            <div className="max-w-6xl mx-auto space-y-6 py-14">
                <Intro/>
                <Mission/>
            </div>
            <Footer/>
        </div>
    );
};

export default About;