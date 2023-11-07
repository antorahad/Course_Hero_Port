import Banner from "../components/Banner";
import PopularCourse from "../components/PopularCourse";
import Service from "../components/Service";
import Why from "../components/Why";
import Trusted from "../components/Trusted";
import HomeContact from "../components/HomeContact";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Service/>
            <Why/>
            <PopularCourse/>
            <Trusted/>
            <HomeContact/>
            <Footer/>
        </div>
    );
};

export default Home;